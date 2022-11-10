import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import './TK/TY.css';
import './App.css';
import Header from './TK/Header';
import Footer from './TK/Footer';
import Section from './TK/Section';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  return (
    <div className='App'>
        <Header></Header>
        <Section></Section>
        <Footer></Footer>
    </div>
  );
}

function bgColor(a){
  document.body.getElementsByClassName = a;
}

export function ActiveApp() {
  return (
    <header id="hd">
      <div className="container d-flex justify-content-between align-items-center">
        <h1><a href=""><img src="" alt="" /></a></h1>
        <ul id="gnb" className="d-flex">
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
        <button onClick={ function(){ bgColor()} }></button>
      </div>
    </header>
  );

  
}
