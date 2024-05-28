import logo from "./logo.svg";
import "./App.css";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" exact element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// createContext and ThemeProvider

// import React, { useContext, createContext } from "react";
// const ThemeContext = createContext("light");
// function App() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Toolbar />
//     </ThemeContext.Provider>
//   );
// }
// function Toolbar() {
//   const theme = useContext(ThemeContext);
//   return <div>Current theme: {theme}</div>;
// }
// export default App;
