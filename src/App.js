import "./App.css";

function App() {
  return (
    <div className="App">

      <header className="hero">
        <h1>Hi, I'm Sruthy S 👋</h1>
        <p>Aspiring Full Stack Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a passionate Computer Science student interested in Web
          Development, React.js, JavaScript, and MERN Stack. I enjoy creating
          modern and responsive web applications.
        </p>
      </section>

      <section className="skills">
        <h2>Skills</h2>

        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Node.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <div className="card">
          <h3>Tic Tac Toe Game</h3>
          <p>React-based game with winner detection.</p>
        </div>

        <div className="card">
          <h3>To-Do List</h3>
          <p>Task manager using React.</p>
        </div>

        <div className="card">
          <h3>Student Registration Form</h3>
          <p>HTML, CSS and JavaScript validation project.</p>
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>

        <button>Download Resume</button>
      </section>

      <footer>
        <p>© 2026 Sruthy S | Portfolio</p>
      </footer>

    </div>
  );
}

export default App;
