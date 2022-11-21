import { Link } from 'react-router-dom';
import './ProjectInformation.css'

const ProjectInformation = () => {
    return (
        <div className="project-information">
            <h1>This is the project-information page</h1>
            <Link to="/projects/fishing-odds"><p>Fishing Odds</p></Link>
            <Link to="/projects/catch-the-cash"><p>Catch The Cash</p></Link>
            <Link to="/projects/crab-pots"><p>Crab Pots</p></Link>
            <Link to="/projects/community-center-checklist"><p>Community Center Checklist</p></Link>
        </div>
    )
}

export default ProjectInformation;