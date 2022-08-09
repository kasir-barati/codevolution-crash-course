export function GreetParent(props) {
    return (
        <button
            onClick={() => props.greet('Child passes this value')}
        >
            Greet Parent
        </button>
    );
}
