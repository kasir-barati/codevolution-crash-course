export function EventHandler() {
    return <button onClick={alertMe}>Alert me</button>;
}

function alertMe(event) {
    alert('I am awaked! check your console');
    console.dir(event, { depth: null });
}
