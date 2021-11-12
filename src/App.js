import logo from "./logo.svg";
import Header from "./Components/Header";
import Router from "./Router";
import UsersList from "./Components/UsersList";
import "./App.css";
import CelebritiesProvider from "./Providers/CelebritiesProvider";

function App() {
  return (
    <CelebritiesProvider>
      <div className="App">
        <Header />
        <Router />
      </div>
    </CelebritiesProvider>
  );
}

export default App;
