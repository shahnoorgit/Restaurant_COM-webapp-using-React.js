import styles from "./Body.module.css";
import Card from "./Card";
import Loading from "./Loading";

function Body({ load, Data, BASE_URL }) {
  return (
    <div className={styles.Container}>
      {load && <Loading />}
      {!load &&
        Data.map((items) => (
          <Card
            key={items.name}
            pic={items.image}
            url={BASE_URL}
            text={items.text}
            name={items.name}
            price={items.price}
          ></Card>
        ))}
    </div>
  );
}

export default Body;
