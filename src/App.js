import logo from "./logo.svg";
import Header from "./Components/Header";
import Router from "./Router";
import UsersList from "./Components/UsersList";
import "./App.css";
import CelebritiesProvider from "./Providers/CelebritiesProvider";
import LoaderProvider from "./Providers/LoaderProvider";

function App() {
  return (
    <LoaderProvider>
      <CelebritiesProvider>
        <div className="App">
          <Header />
          <Router />
        </div>
      </CelebritiesProvider>
    </LoaderProvider>
  );
}

export default App;
