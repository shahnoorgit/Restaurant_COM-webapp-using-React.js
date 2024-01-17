import styles from "./Header.module.css";
function Header({ All, BF, LN, DN, Search }) {
  const Filterbtn = ["All", "Breakfast", "lunch", "dinner"];
  return (
    <div className={styles.MainCon}>
      {" "}
      <div className={styles.Top}>
        <div className={styles.Logo}>
          <img src="./Images/Foody Zone.svg" alt="Logo" />
        </div>
        <input
          onChange={Search}
          id={styles.inp}
          type="text"
          placeholder="Search Food...."
        />
      </div>
      <div className={styles.Filters}>
        {Filterbtn.map((items) => (
          <button
            onClick={() => {
              if (items === "Breakfast") {
                BF();
              } else if (items === "lunch") {
                LN();
              } else if (items === "All") {
                All();
              } else if (items === "dinner") {
                DN();
              }
            }}
            id={styles.Filterbtn}
            key={items}
          >
            {items}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Header;
