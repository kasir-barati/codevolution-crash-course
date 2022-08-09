import { Fragment, useState } from 'react';

export function Message(prop) {
    // Wrong usage:
    /**
     * You are not allowed to change the value of props value.
     * It is readonly
     * prop.name = 'Name'
     */
    const [message, setMessage] = useState('Welcome visitor');
    return (
        <Fragment>
            <h1>{message}</h1>
            <button
                onClick={() => setMessage('Thanks for subscribing')}
            >
                Subscribe!
            </button>
        </Fragment>
    );
}
