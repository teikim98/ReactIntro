import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TY.scss';

export default function Section() {
    return (
        <section class="wrap ">
        <section class = "slideSection" id="about">
          <h2>첫 배너</h2>
        </section>
        <section class = "slideSection" id="portfoloio">
          <h2>각섹션타이틀</h2>
        </section>
        <section class = "slideSection" id="preInterview">
          <h2>각섹션타이틀</h2>
        </section>
        <section class = "slideSection" id="contact">
          <h2>사전인터뷰</h2>
        </section>
      </section>
    );
  }

