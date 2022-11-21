import './NavDownloadLink.css'

type NavDownloadLink = {
    text: string,
}

const NavDownloadLink = ({text}: NavDownloadLink) => {
    return (
        <a className="nav-download-link" href="download.png" download>{text}</a>
    )
}

export default NavDownloadLink;