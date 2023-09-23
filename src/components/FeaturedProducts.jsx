import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
    return (
        <div className='pt-24 font-bonny'>
            <SectionTitle text='Spellbound Selection' />
            <ProductsGrid />
        </div>
    );
};

export default FeaturedProducts;
