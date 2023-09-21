import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar/SideBar'

export default function AdminLayout() {
  return (
    <div className='d-flex'>
      <div className='col-auto pl-0'>
        <Sidebar />
      </div>
      <div className='w-100'>
        <Outlet />
      </div>
    </div>
  )
}
