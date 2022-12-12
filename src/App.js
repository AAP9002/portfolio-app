import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>Alan Prophett</b> - Portfolio under construction
        </p>
        <div>
          <a
            className="App-link"
            href="https://github.com/AAP9002"
            target="_blank"
            style={{padding:10}}
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/alan-prophett"
            target="_blank"
            style={{padding:10}}
            rel="noopener noreferrer"
          >
            Linked In
          </a>
          <a
            className="App-link"
            href="https://gitlab.cs.man.ac.uk/z72819ap"
            target="_blank"
            style={{padding:10}}
            rel="noopener noreferrer"
          >
            UoM Gitlab
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
