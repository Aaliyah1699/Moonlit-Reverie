import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const links = [
    { id: 1, url: '/', text: 'haven' },
    { id: 2, url: 'about', text: 'our coven' },
    { id: 3, url: 'products', text: 'potions' },
    { id: 4, url: 'cart', text: 'cauldron' },
    { id: 5, url: 'checkout', text: 'cast Spell' },
    { id: 6, url: 'orders', text: 'concoctions' },
];

const NavLinks = () => {
    // Get the user information from Redux state
    const user = useSelector((state) => state.userState.user);
    return (
        <>
            {/* Map through the links array and render navigation links */}
            {links.map((link) => {
                const { id, url, text } = link;
                if ((url === 'checkout' || url === 'orders') && !user)
                    return null;
                return (
                    <li key={id}>
                        {/* Render a NavLink component with the link's URL and text */}
                        <NavLink className='capitalize' to={url}>
                            {text}
                        </NavLink>
                    </li>
                );
            })}
        </>
    );
};
export default NavLinks;
