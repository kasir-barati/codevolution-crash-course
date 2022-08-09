import { Fragment } from 'react';

export function ListName() {
    const names = ['Kasir', 'Chan', 'Kawasaki'];
    return (
        <Fragment>
            {names.map((name) => (
                <h1 key={name}>{name}</h1>
            ))}
        </Fragment>
    );
}
