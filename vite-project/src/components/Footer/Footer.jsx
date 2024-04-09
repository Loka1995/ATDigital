import footerLogo from "../../assets/Footer-Logo.png";
import FooterSection from "./FooterSection";

const ourTechnologies = [
  "ReactJS",
  "Gatsby",
  "NextJS",
  "NodeJS",
  "GraphQL",
  "Laravel",
];
const ourServices = [
  "Social media Marketing",
  "Web & Mobile App Development",
  "Data & Analytics",
];

export default function Footer() {
  return (
    <footer className="bg-violet-700 text-white px-4 py-8 md:px-8 md:py-12 lg:px-12 lg:py-16">
      <div className="lg:flex lg:flex-row lg:justify-between">
        <div className="lg:w-1/3 lg:grow">
          <img src={footerLogo} alt="company-logo" className="mb-8" />
          <p className="mb-12 text-sm text-left md:w-1/3 lg:w-3/5 xl:w-2/5">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>
        <div className="md:flex md:flex-row">
          <FooterSection heading={"Our Technologies"} list={ourTechnologies} />
          <FooterSection heading={"Our Services"} list={ourServices} />
        </div>
      </div>
      <div className="flex flex-row border-t-2 border-t-white border-solid pt-2 justify-center text-sm">
        <p className="border-r-2 border-t-white border-solid px-4">
          Privacy Policy
        </p>
        <p className="px-4">Terms & Conditions</p>
      </div>
    </footer>
  );
}
