import FeaturedImage from '../../atoms/FeaturedImage';
import P1 from '../../atoms/P1';
import SocialButton from '../../atoms/SocialButton';
import { NavLink } from 'react-router-dom';
import './FeaturedProjectContainer.css'
import H1 from '../../atoms/H1';

type FeaturedProjectContainerType = {
    projectName: string,
    // projectGithubLink: string,
    projectImage: string,
    projectDescription: string,
    altProjectImageName: string,
    navLink: string,
    // projectLiveLink: string,
}

const FeaturedProjectContainer = ({projectName, projectImage, altProjectImageName, projectDescription, navLink}: FeaturedProjectContainerType) => {
    return (
        <div className = 'featured-project-container'>
            <NavLink className="featured-nav-link" to={navLink}><FeaturedImage projectImage={projectImage} altProjectImageName={altProjectImageName}/></NavLink>
            <H1 text={projectName}></H1>
            <P1 text={projectDescription}></P1>
        </div>
    )
}

export default FeaturedProjectContainer;