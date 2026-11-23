import css from "./ImageCard.module.css";

export default function ImageCard({ word, taskId, imageId, onClick, result }) {

    return (
    <div onClick={onClick} className={css.imageCard}>
      <img
        className={`${css.image} ${result ? css[result] : ""}`}
        src={`/readingImgs/${taskId}/${imageId}.png`}
        alt={word}
      />
    </div>
  );
}
