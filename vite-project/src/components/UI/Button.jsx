/* eslint-disable react/prop-types */
export default function Button({ children }) {
  return (
    <button
      className="uppercase bg-orange-400 text-white rounded text-sm font-bold px-4 py-2
          hover:scale-90 transition-all"
    >
      {children}
    </button>
  );
}
