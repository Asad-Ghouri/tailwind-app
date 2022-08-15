import React from 'react'
import Logo from '../../asserts/logo.png'
import { useState } from 'react'
export const Header = () => {

  const [toggle,setToggle] = useState(false);

  function MenuToggle(){
    setToggle(!toggle);
  }
  return (
    <nav className="bg-white-800">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-between h-16">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={MenuToggle}>
            <span className="sr-only">Open main menu</span>
           
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
         
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
         
          <div className="hidden sm:block sm:ml-6 float-right">
            <div className="flex space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a href="#" className="  px-3 py-2 rounded-md text-sm">Domov</a>
              <a href="#" className="  px-3 py-2 rounded-md text-sm">O projektu</a>
              <a href="#" className="  px-3 py-2 rounded-md text-sm">Raziskava</a>
              <a href="#" className="  px-3 py-2 rounded-md text-sm">Partnerji projekta</a>
              <a href="#" className="  px-3 py-2 rounded-md text-sm">Aktualno</a>
              <a href="#" className="  px-3 py-2 rounded-md text-sm">Kontakt</a>
              
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2  sm:inset-auto sm:ml-6 sm:pr-0">
        
          {/* Profile dropdown */}
          <div className="ml-3 relative">
            <div>
              <a className="">
                <span className="sr-only">Open user menu</span>
                <img className="h-[4rem] w-[3rem]" src={Logo} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {
      toggle?
    <div className="sm:hidden" id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
        <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Domov</a>
        <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">O projektu</a>
        <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Raziskava</a>
        <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium">Partnerji projekta</a>
        <a href="#" className="text-gray-300  block px-3 py-2 rounded-md text-base font-medium">Aktualno</a>
        <a href="#" className="text-gray-300  block px-3 py-2 rounded-md text-base font-medium">Kontakt</a>
      </div>
    </div>
    :
    console.log("MenuClose")
    }

  </nav>
  )
}
