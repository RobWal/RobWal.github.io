import './H1.css'

type H1 = {
    text: string,
}

const H1 = ({text}: H1) => {
    return (
        <h1 className="h1">{text}</h1>
    )
}

export default H1;