/* eslint-disable react/prop-types */
import Modal from "../Modal/Modal";
import NavbarModalItem from "./NavbarModalItem";

export default function NavbarModal({ modalIsOpen, closeModal }) {
  return (
    <Modal modalIsOpen={modalIsOpen} closeModal={closeModal}>
      <ul>
        <NavbarModalItem>
          <a href="">Home</a>
        </NavbarModalItem>
        <NavbarModalItem>
          <a href="">Services</a>
        </NavbarModalItem>
        <NavbarModalItem>
          <a href="">About Us</a>
        </NavbarModalItem>
        <NavbarModalItem>
          <a href="">Contact Us</a>
        </NavbarModalItem>
        <NavbarModalItem>
          <a href="">Careers</a>
        </NavbarModalItem>
      </ul>
    </Modal>
  );
}
