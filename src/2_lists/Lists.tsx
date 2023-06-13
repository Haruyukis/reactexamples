const names : string[] = ["James", "Jake", "Pedro", "Alex"]

const forEachElement = () => {
    // Return in a h1 tag each name of the array.
    names.map((name) => {
        return <h1>{name}</h1>
    });
}