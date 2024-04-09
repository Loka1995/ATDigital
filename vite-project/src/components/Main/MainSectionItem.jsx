import Button from "../UI/Button";

/* eslint-disable react/prop-types */
let imageClasses;
let descriptionClasses;
export default function MainSectionItem({
  img375,
  img768,
  img1200,
  img1440,
  title,
  description,
  index,
}) {
  if (index % 2 === 0) {
    imageClasses = `object-cover px-12 my-4 h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px] order-1 md:order-1`;
    descriptionClasses = `flex flex-col justify-center items-center px-8 order-2 md:order-2`;
  } else {
    imageClasses = `object-cover px-12 my-4 h-[275px] w-[275px] lg:h-[346px] lg:w-[346px] xl:h-[414px] xl:w-[414px] order-1 md:order-2`;
    descriptionClasses = `flex flex-col justify-center items-center px-8 order-2 md:order-1`;
  }

  return (
    <section className="flex flex-col justify-center items-center mb-8 md:flex-row">
      <img
        className={imageClasses}
        src={img1440}
        alt="section logo"
        srcSet={`${img375} 375w,
           ${img768} 768w,
           ${img1200} 1200w,
           ${img1440} 1440w`}
        sizes="(max-width: 767px) 375px,
               (max-width: 1199px) 768px,
               (max-width: 1439px) 1200px,
               (max-width: 1579px) 1440px"
      />
      <div className={descriptionClasses}>
        <h2 className="text-3xl font-bold text-violet-700 text-center mb-8">
          {title}
        </h2>
        <p className="text-lg text-center mb-8 sm:text-left">{description}</p>
        <Button>Learn more</Button>
      </div>
    </section>
  );
}
