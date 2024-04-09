/* eslint-disable react/prop-types */
export default function MenuItem({ children }) {
  return (
    <li className="text-white p-1 max-lg:text-sm grow hover:scale-90 transition-all text-nowrap">
      {children}
    </li>
  );
}