import logo from './img/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TY.scss'


export default function Header() {
    return (
        <header id="hd">
         <nav id="nav" classNameName="fixed-top navbar px-3 px-md-5">
          <h1 className="col-4 col-sm3 col-md-2"><a className = "d-block pr-md-4" href=""><img src={logo} alt="" className="img-fluid"></img></a></h1>
          <ul className="depth1 d-none d-md-flex">
            <li><a href="#aboutMe">aboutMe</a></li>
            <li><a href="#wantToBe">wantToBe</a></li>
            <li><a href="#contactMe">contactMe</a></li>
        </ul>
        </nav>
      </header>
    );
  }

  