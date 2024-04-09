import { useState } from 'react';
import companyLogo from '../../assets/Company-Logo.png';
import MenuItem from './MenuItem';
import Burger from './Burger';

let baseClassNames;
export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  function toggleHandle() {
    setIsToggle(toggle => !toggle);
  }

  if (!isToggle) {
    baseClassNames = 'text-center uppercase py-4 sm:flex sm:flex-row sm:pb-0 items-center sm:w-3/5 md:w-1/2 lg:w-2/5 md:ml-auto border-t-4 border-white sm:border-none sm:pt-0 border-solid hidden';
  } else {
    baseClassNames = 'text-center uppercase py-4 sm:flex sm:flex-row sm:pb-0 sm:w-3/5 md:w-1/2 lg:w-2/5 md:ml-auto border-t-4 border-white border-solid sm:border-none sm:pt-0 items-center'
  }

  return (
    <nav className='bg-violet-700 sm:flex sm:flex-row px-4 fixed w-full z-10'>
      <div className='flex flex-row justify-between py-4 sm:w-2/5'>
        <img src={companyLogo} alt="company logo" className='object-none' />
        <Burger onToggle={toggleHandle} />
      </div>
      <ul className={baseClassNames}>
        <MenuItem><a href="">Services</a></MenuItem>
        <MenuItem><a href="">About Us</a></MenuItem>
        <MenuItem><a href="">Contact Us</a></MenuItem>
        <MenuItem><a href="">Careers</a></MenuItem>
      </ul>
    </nav>
  )
}