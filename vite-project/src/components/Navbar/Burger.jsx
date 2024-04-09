/* eslint-disable react/prop-types */
export default function Burger({ onToggle }) {
  return (
    <button
      className='flex flex-col justify-around w-10 h-auto p-1 sm:hidden hover:animate-pulse transition-all'
      type='button'
      onClick={onToggle}
    >
      <span className='w-full border-t-4 border-white border-solid'></span>
      <span className='w-full border-t-4 border-white border-solid'></span>
      <span className='w-full border-t-4 border-white border-solid'></span>
    </button>
  )
}