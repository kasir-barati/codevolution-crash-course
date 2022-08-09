import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <Greet name="Kasir">
                        <span>Birthday name: Mohammad Jawad</span>
                    </Greet>
                    <Greet name="Bob" />
                    <Greet name="Turbo" />
                    <Message></Message>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
