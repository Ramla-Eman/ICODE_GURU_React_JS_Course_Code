import React, { useState, useEffect, useRef, useReducer } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import logo from "./assets/react.svg";
import { counterContext } from "./components/context/Countercontext";
import  {counterReducer}  from "./store/counter/Counter";

const details = [
  {
    name: "Ramla",
    age: 15,
  },
  {
    name: "John",
    age: 20,
  },
  {
    name: "Jane",
    age: 25,
  },
];

const App = () => {
  // const [count, setCount] = useState(0)
  const [count, dispatch] = useReducer(counterReducer, 0)

  // useEffect(() => {
  //   console.log("Component mounted")

  //   return () => {
  //     console.log("Component unmounted")
  //   }
  // })
  // const inputRef = useRef()

  // const focusInput = () => {
  //   inputRef.current.focus()
  // }
  // const [showBtn, setShowBtn] = useState(false);

  return (
    <div>
      <counterContext.Provider value={{count, dispatch}}>
        <Navbar />
        {/* {showBtn ? <p>Text is showing.</p> : <p>Text is not showing.</p>}
        {/* {/* {showBtn && <p>Lorem ipsum dolor sit amet.</p>} 
        <button onClick={() => setShowBtn(!showBtn)}>
          {showBtn ? "Hide" : "Show"}
        </button> */}
         <button onClick={() => setCount(count + 1)}>click</button>
        <Footer />
      </counterContext.Provider>
    </div>
    // <div>
    //   <ul>
    //     {details.map((detail, index) => {
    //       return(
    //         <li key={index}>
    //           <h1>Name: {detail.name}</h1>
    //           <h1>Age: {detail.age}</h1>
    //         </li>
    //       )
    //     })}
    //   </ul>
    //   <img src={logo} alt="" />
    // </div>
    // <div>
    //   <input type="text" ref={inputRef}/>
    //   <button onClick={focusInput}>Focus</button>
    // </div>

    // <div>
    //   <p>Count: {count}</p>
    //   <button onClick={() => setCount(count + 1)}>Add</button>
    // </div>
    // <BrowserRouter>
    // <Navbar/>
    // <Routes>
    //   <Route path='/' element={<Home/>} />
    //   <Route path='/about' element={<About name="Ramla" age={15}/>} />
    //   <Route path='/contact' element={<Contact/>} />
    // </Routes>
    // <Footer/>
    // </BrowserRouter>
  );
};

export default App;
