import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { EventHandler } from './components/EventHandler';
import { GreetParent } from './components/GreetParent';
import { UserGreeting } from './components/UserGreeting';
import { ListName } from './components/ListName';

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
                    <EventHandler />
                    <GreetParent
                        greet={(message) =>
                            alert('Hi from Parent, ' + message)
                        }
                    />
                    <UserGreeting isLoggedIn={false}></UserGreeting>
                    <UserGreeting isLoggedIn={true}></UserGreeting>
                    <ListName />
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
