/* eslint-disable react/prop-types */
import FooterSectionItem from "./FooterSectionItem";

export default function FooterSection({ heading, list }) {
  return (
    <div className="mb-8 md:pr-32 lg:w-1/3 lg:grow">
      <h2 className="mb-4 text-lg font-bold">{heading}</h2>
      <ul>
        {list.map((listItem, index) => <FooterSectionItem 
          key={`${listItem}#${index}`}
          title={listItem}
        />)}
      </ul>
    </div>
  )
}