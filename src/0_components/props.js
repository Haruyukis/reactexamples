const GetComponentWithProps = (props) => {
    /* Component using Props */
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.email}</h1>
        </div>
    );
};

const jalGetComponentWithProps = ()  => {
    <GetComponent name="Alex" age={21} email="alex@alex.com"/>
    return
};