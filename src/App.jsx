import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App;
