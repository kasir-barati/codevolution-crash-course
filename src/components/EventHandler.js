import { Fragment } from 'react';

export function EventHandler() {
    return (
        <Fragment>
            <button onClick={alertMe}>Alert me</button>
            <button onClick={(event) => alertMe(event, 1)}>
                Show me 1
            </button>
        </Fragment>
    );
}

function alertMe(event, extraMessage) {
    alert('I am awaked! check your console');
    if (extraMessage) {
        alert(extraMessage);
    }
    console.dir(event, { depth: null });
}
