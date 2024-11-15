export default function Content(prop) {
    const Part1 = () => {
        return (
            <p>{prop.part1} {prop.exercises1}</p>
        )
    }

    const Part2 = () => {
        return (
            <p>{prop.part2} {prop.exercises2}</p>
        )
    }

    const Part3 = () => {
        return (
            <p>{prop.part3} {prop.exercises3}</p>
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
