/* eslint-disable react/prop-types */
import { useState } from "react";

export default function FAQItem({ item }) {
  const [showAnswer, setShowAnswer] = useState(false);
  function handleQuestionAnswer() {
    setShowAnswer((prevState) => !prevState);
  }
  return (
    <li className="flex flex-col p-8 sm:px-16 md:px-24">
      <div
        className={`flex mb-4 leading-7 text-xl font-bold gap-x-10 justify-between ${
          showAnswer ? "text-violet-500" : "text-black"
        }`}
      >
        <p>{item.question}</p>
        <button
          className="w-4 h-4 leading-1 text-[2rem]"
          onClick={handleQuestionAnswer}
        >
          {showAnswer ? "-" : "+"}
        </button>
      </div>
      {showAnswer && <p className="leading-8 text-gray-500">{item.answer}</p>}
    </li>
  );
}
