export default function Content(prop) {
    const Part1 = () => {
        return (
            <p>{prop.part.parts[0].name} {prop.part.parts[0].exercises}</p>
        )
    }

    const Part2 = () => {
        return (
            <p>{prop.part.parts[1].name} {prop.part.parts[1].exercises}</p>
        )
    }

    const Part3 = () => {
        return (
            <p>{prop.part.parts[2].name} {prop.part.parts[2].exercises}</p>
        )
    }
    return (
        <div>
            <Part1 />
            <Part2 />
            <Part3 />
        </div>
    )
};
