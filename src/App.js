import Header from "./Components/Header";
import Router from "./Router";

import "./App.css";
import CelebritiesProvider from "./Providers/CelebritiesProvider";
import AuthProvider from "./Providers/AuthProvider";
import LoaderProvider from "./Providers/LoaderProvider";
//import ToastProvider from "./Providers/ToastProvider";
import { ToastProvider } from "react-toast-notifications";

function App() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <ToastProvider autoDismissTimeout={2000} autoDismiss={true}>
          <CelebritiesProvider>
            <div className="App">
              <Header />
              <Router />
            </div>
          </CelebritiesProvider>
        </ToastProvider>
      </AuthProvider>
    </LoaderProvider>
  );
}

export default App;
