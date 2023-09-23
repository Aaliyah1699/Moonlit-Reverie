import { useLoaderData } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { useState } from 'react';
import { VscListSelection } from 'react-icons/vsc';
import { CiGrid42 } from 'react-icons/ci';

const ProductsContainer = () => {
    const { meta } = useLoaderData();
    const totalProducts = meta.pagination.total;

    const [layout, setLayout] = useState('grid');

    const setActiveStyles = (pattern) => {
        return `text-xl btn btn-circle btn-sm ${
            pattern === layout
                ? 'btn-primary text-primary-content'
                : 'btn-ghost text-based-content'
        }`;
    };

    return (
        <>
            {/* HEADER */}
            <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5 font-bonny'>
                <h4 className='font-medium text-md'>
                    {totalProducts} Potion{totalProducts > 1 && 's'}
                </h4>
                <div className='flex gap-x-2'>
                    <button
                        type='button'
                        onClick={() => setLayout('grid')}
                        className={setActiveStyles('grid')}
                    >
                        <CiGrid42 />
                    </button>
                    <button
                        type='button'
                        onClick={() => setLayout('list')}
                        className={setActiveStyles('list')}
                    >
                        <VscListSelection />
                    </button>
                </div>
            </div>
            {/* PRODUCTS */}
            <div>
                {totalProducts === 0 ? (
                    <h5 className='text-2xl mt-16 font-bonny'>
                        Oh no, the cauldron is empty - no potions found....
                    </h5>
                ) : layout === 'grid' ? (
                    <ProductsGrid />
                ) : (
                    <ProductsList />
                )}
            </div>
        </>
    );
};

export default ProductsContainer;
