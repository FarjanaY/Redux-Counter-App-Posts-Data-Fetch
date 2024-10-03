//External Imports
import { useDispatch, useSelector } from "react-redux";

//Internal Imports
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { decrement, increment } from "./features/counters/countersSlice";
import Posts from "./components/Posts";

function App() {
  const counters = useSelector((state) => state.counterR);
  const dispatch = useDispatch();

  //Total Count
  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  //button Handler
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
  };

  return (
    <>
      <h2>Counter App</h2>

      {counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            count={counter.value}
            onIncrement={() => handleIncrement(counter.id)}
            onDecrement={() => handleDecrement(counter.id)}
          />
        );
      })}

      <Stats totalCount={totalCount} />

      <h1>Fetch Data for Posts</h1>
      <Posts />
    </>
  );
}

export default App;
