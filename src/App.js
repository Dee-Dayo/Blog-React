import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";

function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<Home/>} path={"/home"}/>
                  <Route element={<Login/>} path={"/login"}/>
                  <Route element={<SignUp/>} path={"/signup"}/>
              </Routes>
          </BrowserRouter>
      </>
  );
}

export default App;
