import { useEffect, useState, useReducer } from "react";
import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const BASE_URL = "http://localhost:9000";
  const [Data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [load, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onsearch = (event) => {
    const searchval = event.target.value;
    if (searchval === " ") {
      setFilter(null);
    }

    const Sfilter = Data.filter((items) =>
      items.name.toLowerCase().includes(searchval.toLowerCase())
    );
    setFilter(Sfilter);
  };

  const fooditems = (json) => {
    DispatchData({
      type: "FETCH",
      payload: {
        json,
      },
    });
  };

  const all = () => {
    setFilter(Data);
  };

  const Breakfast = (type) => {
    const filtered = Data.filter((items) => items.type == "breakfast");
    setFilter(filtered);
  };

  const lunch = () => {
    const filtered = Data.filter((items) => items.type == "lunch");
    setFilter(filtered);
  };

  const dinner = () => {
    const filtered = Data.filter((items) => items.type == "dinner");
    setFilter(filtered);
  };
  useEffect(() => {
    const fetchfood = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        // Update state with fetched data
        setFilter(json);
        setData(json);
      } catch (error) {
        setError("Unable to fetch content");
      } finally {
        setLoading(false);
      }
    };

    fetchfood();
  }, []);

  return (
    <>
      {" "}
      <Header
        All={all}
        BF={Breakfast}
        LN={lunch}
        DN={dinner}
        Search={onsearch}
      />
      <Body Data={filter} load={load} error={error} BASE_URL={BASE_URL} />
    </>
  );
}

export default App;
