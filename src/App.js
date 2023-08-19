import "./App.css";
import CustomNav from "./CustomNav";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

function App() {
    return (
        <div>
            <header>
                <CustomNav />
            </header>
            <section id="#" className="home">
                <Home/>
            </section>
            <section id="about" className="about container">
                <About/>
            </section>
            <section id="projects" className="projects container">
                <Projects/>
            </section>
            <section id="contact" className="contact container"></section>
            <footer></footer>
        </div>
    );
}

export default App;
