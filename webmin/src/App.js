import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import { Route,Switch }from "react-router-dom";
import Bisection from './root_of_equation/Bisection.js';
import False_Position from './root_of_equation/False_Position.js';
import One_Point from './root_of_equation/One_Point.js';
import Newton_Raphson from './root_of_equation/Newton_Raphson.js';
import Secant from './root_of_equation/Secant.js';
import Linear_Interpolation from './Interpolation/Linear_Interpolation.js';
import Quadratic_Interpolation from './Interpolation/Quadratic_Interpolation.js';
import Polynomial_Interpolation from './Interpolation/Polynomial_Interpolation.js';
import Linear_Regession from './Regession/Linear_Regession.js';
import Cramer from './Linear_Equations/Cramer.js';
import Guass_Elimination from './Linear_Equations/Guass_Elimination.js';
import Guass_Jordan from './Linear_Equations/Guass_Jordan.js';
import Guass_Seidel from './Linear_Equations/Guass_Seidel.js';
import LU_Decomposition from './Linear_Equations/LU_Decomposition.js';
import Jacobi from './Linear_Equations/Jacobi.js';
import Cholrsky from './Linear_Equations/Cholrsky.js';
import Conjugate_Gradient from './Linear_Equations/Conjugate_Gradient.js';


function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Bisection" component={Bisection}/>
          <Route exact path="/False_Position" component={False_Position}/>
          <Route exact path="/One_Point" component={One_Point}/>
          <Route exact path="/Newton_Raphson" component={Newton_Raphson}/>
          <Route exact path="/Secant" component={Secant}/>
          <Route exact path="/Linear_Interpolation" component={Linear_Interpolation}/>
          <Route exact path="/Quadratic_Interpolation" component={Quadratic_Interpolation}/>
          <Route exact path="/Polynomial_Interpolation" component={Polynomial_Interpolation}/>
          <Route exact path="/Linear_Regession" component={Linear_Regession}/>
          <Route exact path="/Cramer" component={Cramer}/>
          <Route exact path="/Cholrsky" component={Cholrsky}/>
          <Route exact path="/Guass_Elimination" component={Guass_Elimination}/>
          <Route exact path="/Conjugate_Gradient" component={Conjugate_Gradient}/>
          <Route exact path="/Guass_Jordan" component={Guass_Jordan}/>
          <Route exact path="/Guass_Seidel" component={Guass_Seidel}/>
          <Route exact path="/Jacobi" component={Jacobi}/>
          <Route exact path="/LU_Decomposition" component={Jacobi}/>
        </Switch>
      </React.Fragment>
    </div>
  );
}

export default App;
