const isGreen : boolean = true ;

const ternaryOperator = () => {
    // The operator "?" is equivalent to if else ; The operator "&&" is equivalent to if.
    return (
        <div>
            <h1>{isGreen ? "This sentence is green." : "This sentence is not green."}</h1>
            <h1>{isGreen && "This sentence is green."}</h1>  
        </div>
    );
};
