import './FeaturedImage.css'

type FeaturedImage = {
    projectImage: string,
    altProjectImageName: string,
}

const FeaturedImage = ({projectImage, altProjectImageName}: FeaturedImage) => {
    return (
        <div className="featured-image-link">
            <img className="featured-image" src={projectImage} alt={altProjectImageName}/>   
        </div>
    )
}

export default FeaturedImage;