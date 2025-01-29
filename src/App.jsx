import { useEffect, useState } from "react";
import Loader from "./Loader";
import { Tours } from "./Tours";

const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const removeTours = (id) => {
    setTours(tours.filter((item) => item.id !== id));
  };

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTours(tours);
    } catch (error) {
      console.log("error");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (isLoading) {
    return (
      <main>
        <Loader />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button
            className="btn"
            onClick={fetchTours}
            style={{ marginTop: "2rem" }}
          >
            Load More Tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTours={removeTours} />
    </main>
  );
};
export default App;
