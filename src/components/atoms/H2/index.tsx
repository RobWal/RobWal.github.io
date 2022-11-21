import './H2.css'

type H2 = {
    text: string,
}

const H2 = ({text}: H2) => {
    return (
        <h2 className="h2">{text}</h2>
    )
}

export default H2;