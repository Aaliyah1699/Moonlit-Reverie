import { GiUbisoftSun, GiPotionOfMadness, GiMagicBroom } from 'react-icons/gi';
import { RxMoon } from 'react-icons/rx';
import { HiBars3BottomLeft } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';
import NavLinks from './NavLinks';

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();

    const handleTheme = () => {
        dispatch(toggleTheme());
    };

    // Get the number of items in the cart from Redux state
    const numItemsInCart = useSelector(
        (state) => state.cartState.numItemsInCart
    );

    return (
        <nav className='bg-base-200 font-bonny'>
            <div className='navbar align-element'>
                <div className='navbar-start'>
                    {/* TITLE */}
                    <NavLink
                        to='/'
                        className='hidden lg:flex btn items-center font-bonny'
                    >
                        <div className='text-primary text-4xl capitalize font-bold italic'>
                            Moonlit Reverie
                        </div>
                        <GiPotionOfMadness className='h-8 w-8 text-primary' />
                    </NavLink>

                    {/* DROPDOWN */}
                    <div className='dropdown'>
                        <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                            <HiBars3BottomLeft className='h-6 w-6' />
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
                        >
                            <NavLinks />
                        </ul>
                    </div>
                </div>

                <div className='navbar-center hidden lg:flex '>
                    <ul className='menu menu-horizontal text-base'>
                        <NavLinks />
                    </ul>
                </div>
                <div className='navbar-end'>
                    {/* THEME SETUP */}
                    <label className='swap swap-rotate hover:text-primary'>
                        <input type='checkbox' onChange={handleTheme} />
                        {/* sun icon*/}
                        <GiUbisoftSun className='swap-on h-6 w-6' />
                        {/* moon icon*/}
                        <RxMoon className='swap-off h-6 w-6' />
                    </label>

                    {/* CART LINK */}
                    <NavLink
                        to='/cart'
                        className='btn btn-ghost btn-circle btn-md ml-4'
                    >
                        <div className='indicator hover:text-primary'>
                            <GiMagicBroom className='h-7 w-7' />
                            <span className='badge badge-sm badge-primary indicator-item'>
                                {numItemsInCart}
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
