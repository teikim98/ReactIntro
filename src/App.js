import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import './TK/TY.css';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className='container-fluid px-0'>
      <header id='hd' className='border-bottom py-3 d-flex justify-content-between align-items-center'>
        
        <a href='#none'className='col-1'>
          <img src={logo} className='img-fluid'></img>
        </a>

        <button onClick={(e) => {alert('객체 어쩌구'); }}>All</button>
        

      </header>
    </div>
  );
}

export function ActiveApp() {
  return (
    <div className='container-fluid px-0'>
      <header id='hd' className='border-bottom bg-dark py-3'> 
      </header>
    </div>
  );

  
}
