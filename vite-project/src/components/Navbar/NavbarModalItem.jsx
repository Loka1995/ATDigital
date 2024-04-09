/* eslint-disable react/prop-types */
export default function NavbarModalItem({ children }) {
  return (
    <li className="text-black p-4 grow transition-all text-nowrap">
      <span>{children}</span>
    </li>
  );
}
