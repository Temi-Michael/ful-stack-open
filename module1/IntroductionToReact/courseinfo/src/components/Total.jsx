export default function Total(prop) {
    return (
        <p>Number of exercises {prop.part.parts[0].exercises + prop.part.parts[1].exercises + prop.part.parts[2].exercises}</p>
    )
};
