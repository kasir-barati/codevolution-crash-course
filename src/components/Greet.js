import { Fragment } from 'react';

export function Greet(prop) {
    // Wrong usage:
    /**
     * You are not allowed to change the value of props value.
     * It is readonly
     * prop.name = 'Name'
     */
    return (
        <Fragment>
            <h1>Hello {prop.name}</h1>
            {prop.children}
        </Fragment>
    );
}
