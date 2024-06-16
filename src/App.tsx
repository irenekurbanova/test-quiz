import { Provider } from "react-redux";
import { store } from "./app/store/store.ts";
import Quiz from "./pages/quiz/quiz";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
