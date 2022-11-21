import './P1.css'

type P1 = {
    text: string,
}

const P1 = ({text}: P1) => {
    return (
        <p className="p1">{text}</p>
    )
}

export default P1;