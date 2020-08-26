import React, { Component } from 'react';
import kR from '../unnamed.png'
import {Link} from 'react-router-dom'
import './script'
import logo from './f2.png'
class Navbar extends Component {
  logOut=(e)=>{
  e.preventDefault()
  localStorage.removeItem('token')
  window.location='/'
  }
  leave=(e)=>{
  e.preventDefault()
  }
    render() {
        return (
            <div>
            <div id="sidebar" class="h-screen w-16 menu bg-white text-white px-4 flex items-center nunito static fixed shadow">

        <ul class="list-reset ">
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fas fa-home fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Home</span>
                </Link>
            </li>
            <li class="my-2 md:my-0 ">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fas fa-tasks fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Tasks</span>
                </Link>
            </li>
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fa fa-envelope fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Messages</span>
                </Link>
            </li>
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fas fa-chart-area fa-fw mr-3 text-indigo-400"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Analytics</span>
                </Link>
            </li>
            <li class="my-2 md:my-0">
                <Link to="#" class="block py-1 md:py-3 pl-1 align-middle text-gray-600 no-underline hover:text-indigo-400">
                    <i class="fa fa-wallet fa-fw mr-3"></i><span class="w-full inline-block pb-1 md:pb-0 text-sm">Payments</span>
                </Link>
            </li>
        </ul>

    </div>
            </div>
          );
    }
}

export default Navbar;
