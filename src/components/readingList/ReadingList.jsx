import { useState } from 'react'
import ImageCard from '../ImageCard/ImageCard'
import css from "./ReadingList.module.css"
import { useParams } from 'react-router-dom';
import { readings } from '../../reading';

export default function ReadingList() {
   const { taskId } = useParams();
   console.log(taskId)
  const reading = readings.find((l) => l.title === taskId);
    const [answers, setAnswers] = useState({});
      const handleAnswer = (taskId, imageId) => {
        setAnswers((prev) => ({
          ...prev,
          [taskId]: imageId,
        }));
      };
  return (
    <ul className={css.ul}>
        {reading.task1.map((el) => (
          <li className={css.li} key={el.id}>
            <p className={css.text}>{el.word}</p>
            <div className={css.imageBox}>
              <ImageCard
                word={el.word}
                taskId={taskId}
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
                taskId={taskId}
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
  )
}
