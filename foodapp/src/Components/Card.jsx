import styles from "./Card.module.css";

function Card({ name, text, pic, url, price }) {
  return (
    <>
      <div className={styles.Blurimg}>
        <div className={styles.Profile}>
          <img src={url + pic} alt="not found" />
        </div>
        <div className={styles.Content}>
          {" "}
          <h1>{name}</h1>
          <p> {text} </p>
          <button id={styles.Filterbtn}>{`${price} $`}</button>
        </div>
      </div>
    </>
  );
}

export default Card;
