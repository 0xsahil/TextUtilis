import React, { useState } from 'react';
// import ReactDOM from "react-dom/client";
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }
  // const [bgColor, setbgColor] = useState(null)
  // let a= document.body.style.backgroundColor
  // const colorPlt = (color) => {
  //   setbgColor({
  //     a : color
  //   })
  // }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#021226'
      document.body.style.color = 'whitesmoke'
      showAlert("Dark mode has been set", "success")
      document.title = "Textutilis-Dark"

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'whitesmoke'
      document.body.style.color = '#021226'
      showAlert("Light mode has been set", "success")
      document.title = "Textutilis-Light"
    }
  }
  // const id = React.useRef(null);

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextUtilis" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-2">
          {/* <Routes>
            <Route exact path='/' element={ */}
        <TextForm heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
              {/* } />
            <Route exact  path='/about' element={<About/>} /> */}
            {/* <Route path='/' component={<About/>}/ > */}
          {/* </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
