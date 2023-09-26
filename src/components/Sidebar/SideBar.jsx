import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.scss";

export default function Sidebar() {
    


    return (
        <div className='sider-bar bg-dark flex-column text-white'>
            <NavLink to="/admin" className='nav-link text-white'>
                <i class="fa-solid fa-film"></i>
                <scan className="siderbar-text" >Admin Page</scan>
            </NavLink>
            <hr className='text-secondary mt-2' />
            <ul className='nav nav-pills flex-column'>
                <li className='nav-item p-2'>
                    <NavLink to="/admin/user" className='nav-link text-white'>
                        <i className="fa-regular fa-user" />
                        <scan> Users</scan>
                    </NavLink>
                </li>
                <li className="nav-item p-2">
                    <NavLink to="/admin/films" className='nav-link text-white'>
                        <i className="fa-regular fa-file" />
                        <scan> Films</scan>
                        <i className="fa-solid fa-angles-down" />
                    </NavLink>
                </li>
                <li className="nav-item item-down">
                    <NavLink to="/admin/films/edit" className='nav-link text-white'>
                        <i className="fa-regular fa-file" />
                        <scan> Film</scan>
                    </NavLink>
                </li>
                <li className="nav-item  item-down">
                    <NavLink to="/admin/films/addnew" className='nav-link text-white'>
                        <i className="fa-regular fa-file" />
                        <scan> Addnew</scan>
                    </NavLink>
                </li>
                <li className='nav-item p-2'>
                    <NavLink to="" className='nav-link text-white'>
                        <i className="fa-solid fa-display" />
                        <scan> Showtime</scan>
                    </NavLink>
                </li>

            </ul>
        </div>
    )
}
