import { FAQ } from "../../util/frequentlyAskedQuestions";
import FAQItem from "./FAQItem";

export default function FAndQSection() {
  return (
    <>
      <h2 className="text-3xl mt-8 font-bold text-violet-700 text-center mb-8 px-8">
        Frequently asked questions
      </h2>
      <ul className="w-11/12">
        {FAQ.map((item) => (
          <FAQItem key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}
