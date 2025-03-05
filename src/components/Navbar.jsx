import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-evenly gap-4 border w-full'>
            <NavLink to={"/"}>
                <h3 className='text-blue-700'>Home</h3>
            </NavLink>
            <NavLink to={"/Pastes"}>
                <h3 className='text-blue-700'>Pastes</h3>
            </NavLink>
        </div>
    );
};

export default Navbar;