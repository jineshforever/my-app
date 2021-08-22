import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [textFormColor, setTextFormColor] = useState('light');
  const [buttonColor, setbuttonColor] = useState("primary");
  const [textColor, settextColor] = useState("black")

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleModeBlue = ()=>{
    if(mode==="dark")
      {
        document.body.style.backgroundColor="white";
        showAlert("The light mode has been enabled", "success");
        setbuttonColor("primary");
        settextColor("black");
      }
      if(mode==="light")
      {
        document.body.style.backgroundColor="#b7eef3";
        showAlert("The dark mode has been enabled", "success");
        setTextFormColor("#b7eef3");
        setbuttonColor("primary");
        settextColor("black");
      }
    setMode(mode === "dark"?"light":"dark");
  }
  const toggleModeYellow = ()=>{
    if(mode==="dark")
      {
        document.body.style.backgroundColor="white";
        showAlert("The light mode has been enabled", "success");
        setbuttonColor("primary");
        settextColor("black");
      }
      if(mode==="light")
      {
        document.body.style.backgroundColor="#f1faa9"
        showAlert("The dark mode has been enabled", "success");
        setTextFormColor("#f1faa9");
        setbuttonColor("success");
        settextColor("black");
      }
    setMode(mode === "dark"?"light":"dark");
  }
  const toggleModeDarkBlue = ()=>{
    if(mode==="dark")
      {
        document.body.style.backgroundColor="white";
        showAlert("The light mode has been enabled", "success");
        setbuttonColor("primary");
        settextColor("black");
      }
      if(mode==="light")
      {
        document.body.style.backgroundColor="#042743";
        showAlert("The dark mode has been enabled", "success");
        setTextFormColor("#042743");
        setbuttonColor("danger");
        settextColor("white");

      }
    setMode(mode === "dark"?"light":"dark");
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About us" mode={mode} toggleModeDarkBlue={toggleModeDarkBlue} toggleModeBlue={toggleModeBlue} toggleModeYellow={toggleModeYellow}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <div className="container">
      <TextForm heading="Enter the text to analyse" textFormColor={textFormColor} textColor={textColor} showAlert={showAlert} mode={mode} buttonColor={buttonColor}/>      
      </div>
          </Route>
        </Switch>
        </Router>
     
    </>
  );
}

export default App;
