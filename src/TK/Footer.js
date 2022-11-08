
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TY.scss';

export default function Footer() {
    return(
      <footer className='footer text-center fixed-bottom'>
        <div className="container">
        <ul className="list-inline">
          <li className="list-inline-item">
          <a className="social-link rounded-circle fix-font-black mr-3" href="#none">
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
            </a>
          </li>
          <li className="list-inline-item">
          <a className="social-link rounded-circle fix-font-black mr-3" href="#none">
           <FontAwesomeIcon icon="fa-brands fa-instagram" />
            </a>
          </li>
          <li className="list-inline-item">
          <a className="social-link rounded-circle fix-font-black mr-3" href="#none">
          <FontAwesomeIcon icon="fa-brands fa-github" />
            </a>  
          </li>
        </ul>
        <p>
          copyright - asd
        </p>
  
        </div>
      </footer>
    );
  }
  