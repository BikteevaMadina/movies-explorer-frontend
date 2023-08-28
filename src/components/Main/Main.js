// import Header from "../Header/Header.js";
import Cutaway from "./Cutaway/Cutaway.js";
import Portfolio from "./Portfolio/Portfolio.js";
import Project from "./Project/Project.js";
import Student from "./Student/Student.js";
import Techno from "./Techno/Techno.js";
import Footer from "../Footer/Footer.js";
//import Header from "../Header/Header.js";



const Main = () => {
  return (
    <div className="page">
      <main>
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
