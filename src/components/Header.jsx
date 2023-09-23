import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '../features/cart/cartSlice';
import { logoutUser } from '../features/user/userSlice';
import { useQueryClient } from '@tanstack/react-query';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const queryClient = useQueryClient();
    const user = useSelector((state) => state.userState.user);

    const handleLogout = () => {
        navigate('/');
        dispatch(clearCart());
        dispatch(logoutUser());
        queryClient.removeQueries();
    };

    return (
        <header className='bg-neutral py-2 text-neutral-content font-bonny'>
            <div className='align-element flex justify-center sm:justify-end'>
                {user ? (
                    <div className='flex gap-x-2 sm:gap-x-8 items-center'>
                        <p className='text-lg sm:text-sm'>
                            We've been expecting you, {user.username}
                        </p>
                        <button
                            className='btn btn-xs btn-outline btn-primary text-sm'
                            onClick={handleLogout}
                        >
                            Seal the Portal
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-x-6 justify-center items-center text-sm'>
                        <Link
                            to='/login'
                            className='link link-hover text-sm sm:text-sm'
                        >
                            Enter the Coven / Magical Visitor
                        </Link>
                        <Link
                            to='/register'
                            className='link link-hover text-sm sm:text-sm'
                        >
                            Cast a Spell
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
