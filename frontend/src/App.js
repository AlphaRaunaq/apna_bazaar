import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actions from "./actions";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "./component/Home/Home.js";


function App({ counter, increment, decrement, reset, resetTo100 }) {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  });

  return (
    // <>
    //   <button onClick={increment}>+</button>
    //   <div className="App">Counter: {counter}</div>
    //   <button onClick={decrement}>-</button>
    //   <button onClick={reset}>reset</button>
    //   <button onClick={resetTo100}>100</button>
    // </>
    <Router>
      <Header />
      <Routes><Route exact path="/" element={<Home/>} /></Routes>
      <Footer />
    </Router>
  );
}

const mapStateToProps = (state) => {
  const { counter } = state.countReducer;

  return { counter };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
