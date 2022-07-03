import React, {useState} from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from './components/Alert';
import About from "./components/About";
import TextForm from "./components/TextForm";
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";  

function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);
    const showAlert= (message, type)=>{
        setAlert({
            msg: message,
            type: type
        })
        setTimeout(() => {
            setAlert(null);
        }, 1000);
    }
    const toggleMode = ()=>{
        if(mode === 'light'){
            setMode('dark');
            document.body.style.backgroundColor = '#212529';
            document.body.style.color = '#ffffff';
            showAlert("Dark mode has been enabled", "success");
        }
        else{
            setMode('light');
            document.body.style.backgroundColor = '#ffffff';
            document.body.style.color = '#212529';
            showAlert("Light mode has been enabled", "success");
        }
    }
    return (
        <>
            <Router>
                <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
                <Alert alert={alert}/>
                <div className="container my-2">
                    <Routes>
                        <Route exact path="/about" element={<About mode={mode}/>}></Route>
                        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils" mode={mode}/>}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;