export function UserGreeting(props) {
    return <h1>Hello {props.isLoggedIn ? 'User' : 'Guest'}</h1>;
}
