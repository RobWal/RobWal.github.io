import './SocialButton.css'

type SocialButton = {
    fileName: string,
    link: string,
    alternate: string,
}

const SocialButton = ({fileName, link, alternate}: SocialButton) => {
    return (
        <div className="social">
            <a className="social-link" href={link} target="_blank">
                <img className="social-link-image" src={fileName} alt={alternate}/>   
            </a>
        </div>
    )
}

export default SocialButton;