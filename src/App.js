import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

import firebaseConfig from "./Config/firebaseConfig";
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}/>
           <Route exact path="/signin" element={<Signin />}/>
           <Route exact path="/Signup" element={<Signup />}/>
           <Route exact path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;

















// import React, { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";

// import "bootstrap/dist/css/bootstrap.min.css";

// //react-router


// //toast
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

// //firebase
// // import firebase from "firebase/app";
// import firebase from 'firebase/compat/app';

// import "firebase/auth";

// //components
// import Home from "./pages/Home";
// import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
// import PageNotFound from "./pages/PageNotFound";
// import { UserContext } from "./context/UserContext";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// import Footer from "./layout/Footer";
// import Header from "./layout/Header";

// import firebaseConfig from "./Config/firebaseConfig";
// //init firebase
// firebase.initializeApp(firebaseConfig)

// const App = () => {
//   const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//     <ToastContainer />
//       <UserContext.Provider value={{ user, setUser }}>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />}/>
//         <Route path="/signin" element={<Signin />}/>
//         <Route path="/Signup" element={<Signup />}/>
//         <Route path="*" element={<PageNotFound />}/>
//       </Routes>
//       <Footer />
//       </UserContext.Provider>
//     </BrowserRouter>
//   );
// };

// export default App;
