// import Header from "../Header/Header.js";
import Cutaway from "./Cutaway/Cutaway.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Project from "./Project/Project.js";
import Student from "./Student/Student.js";
import Techno from "./Techno/Techno.js";
import Footer from "../Footer/Footer.js";
import AuthNav from "../Header/AuthNav.js";



const Main = (props) => {
  return (
    <div className="page">
      <main>
      <AuthNav/>
      <Cutaway />
      <Project />
      <Techno />
      <Student />
      <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
export default Main;
