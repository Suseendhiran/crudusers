import logo from "./logo.svg";
import Header from "./Components/Header";
import Router from "./Router";
import UsersList from "./Components/UsersList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
