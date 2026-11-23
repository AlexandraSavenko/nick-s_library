import { useState } from "react";
import { reading } from "../../reading/data";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ReadingLayout.module.css";

export default function ReadingLayout() {
  const [answers, setAnswers] = useState({});
  const handleAnswer = (taskId, imageId) => {
    console.log("working")
    setAnswers((prev) => ({
      ...prev,
      [taskId]: imageId,
    }));
  };

  return (
    <div className={css.readingLayout}>
      Reading
      <ul className={css.ul}>
        {reading.task1.map((el) => (
          <li className={css.li} key={el.id}>
            <p className={css.text}>{el.word}</p>
            <div className={css.imageBox}>
              <ImageCard
                word={el.word}
                taskId={"task1"}
                imageId={el.url1}
                onClick={() => handleAnswer(el.id, el.url1)}
                result={
                  answers[el.id] === el.url1
                    ? el.url1 === el.correct
                      ? "correct"
                      : "wrong"
                    : null
                }
              />
              <ImageCard
                word={el.word}
                taskId={"task1"}
                imageId={el.url2}
                onClick={() => handleAnswer(el.id, el.url2)}
                result={
                  answers[el.id] === el.url2 
                    ? el.url2 === el.correct
                      ? "correct"
                      : "wrong"
                    : null
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
