import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TY.scss';



export default function Section() {
    return (
        <section className="wrap ">
        <section className = "slideSection" id="aboutMe">
          <h2>aboutme</h2>
          <button className='test'>click</button>
        </section>
        <section className = "slideSection" id="wantToBe">
          <h2>wanttobe</h2>
        </section>
        <section className = "slideSection" id="contactMe">
          <h2>contactMe</h2>
        </section>
      </section>
    );
  }

