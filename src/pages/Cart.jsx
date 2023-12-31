import { useSelector } from 'react-redux';
import { CartItemsList, SectionTitle, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
    const user = useSelector((state) => state.userState.user);

    const numItemsInCart = useSelector(
        (state) => state.cartState.numItemsInCart
    );

    if (numItemsInCart === 0) {
        return <SectionTitle text='Your Basket is Barren of Brews' />;
    }

    return (
        <>
            <SectionTitle text='Enchanted Goods' />
            <div className='mt-8 grid gap-8 lg:grid-cols-12 font-bonny font-bold text-lg'>
                <div className='lg:col-span-8 '>
                    <CartItemsList />
                </div>
                <div className='lg:col-span-4 lg:pl-4'>
                    <CartTotals />
                    {user ? (
                        <Link
                            to='/checkout'
                            className='btn btn-primary btn-block mt-8'
                        >
                            Complete Thy Spell
                        </Link>
                    ) : (
                        <Link
                            to='/login'
                            className='btn btn-primary btn-block mt-8'
                        >
                            Access Your Magic
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
};
export default Cart;
