// import './App.css';
import {Provider} from "react-redux";
import "./style/app.scss";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor }  from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <div className="App">
        <TodoForm/>
        <TodoList/>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
