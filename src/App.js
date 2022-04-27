import './App.css';


import  Footer  from './components/Footer';

import RegisterForm from './components/register';
import LoginForm from './components/login';
import {
 
  Routes,
  Route,
  Link

} from "react-router-dom";

import { Adjustments } from "heroicons-react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import BodyComp from './components/Body';
import UserListView from './components/usersview';

// import { ChevronDownIcon } from '@heroicons/react/solid'

// ###################################################33

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
// ###########################
///////////////////////////////////////////////////////////////////////////

  

function App() {
  return (
    
    <div className="h-screen w-screen border-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 p-2 border-black overflow-y-scroll font-mono">
        {/* #########################################3  */}
        <div className="flex items-center w-auto h-20 bg-gray-300 m-2  p-1 ">
        <div className="bg-stone-900 rounded-md h-full flex items-center text-gray-50 p-2 m-1">
          
          <h1 className="object-center font-bold text-xs sm:text-3xl align-left">User Admin Board</h1>
          
          </div>
        <div className=" flex-auto p-2 border-black border-3 m-1 "></div>
        <div className="border-black border-3 p-2 m-1  ">
         
                    {/* ################################################# */}
                    {/* ################################################# */}
                    <Menu as="div" className="relative inline-block font-bold text-left">
      <div>
        <Menu.Button className="inline-flex hover:bg-stone-900 justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 hover:bg-stone-900" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
        </svg> */}
          <Adjustments size={24}/>
          {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
          <div className="py-1">
          <Link to="/login">
            <Menu.Item>
              {({ active }) => (
                <a
                  
                href="/"
                  className={classNames(
                    active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Login
                </a>
              )}
            </Menu.Item>
            </Link>
            <Link to="/register">           
             <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Register User
                </a>
              )}
            </Menu.Item>
            </Link>
            <Link to="/users">           
             <Menu.Item>
              {({ active }) => (
                <a
                  href="/"
                  className={classNames(
                    active ? 'hover:bg-stone-900 hover:text-gray-50 bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Users
                </a>
              )}
            </Menu.Item>
            </Link>

          </div>

          
        </Menu.Items>
      </Transition>
    </Menu>
     
                    {/* ################################################### */}
        </div>
      </div>       
        {/* ########################################## */}
        
        <div className="flex items-center justify-center w-auto min-h-full bg-slate-100 border-2 m-2 border-black p-2">
        
         <Routes>
         <Route path="/" element={<BodyComp/>}/>
         
         <Route path="register" element={<RegisterForm/>}/ >
         
         <Route path="login" element={<LoginForm/> }/ >
         <Route path="users" element={<UserListView/> }/ >
         
         </Routes>
         
      </div>
       
       
       <Footer/>
    </div>
    
    );
}
export default App;
