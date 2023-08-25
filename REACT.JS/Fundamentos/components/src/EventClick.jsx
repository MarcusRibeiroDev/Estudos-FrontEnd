const EventClick = () => {
    const handleJSX = () => {
        return (
            <h1>HandleJSX</h1>
        );
    }

    return (
        <div>
            <button onClick={() => {
                console.log("Clicou também");
            }}>Clique aqui!</button>
            {handleJSX()}
        </div>
    );
}

export default EventClick;
