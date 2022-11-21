import FeaturedProjectContainer from '../../molecules/FeaturedProjectContainer';
import './Featured.css';

const Featured = () => {
    return (
        <div className='featured'>
            <FeaturedProjectContainer projectName={'Fishing Odds!'} navLink={'/projects/fishing-odds'} projectImage={"/images/featuredFishingOdds.png"} 
            projectDescription={'An easy way of seeing the odds of catching fish.'} altProjectImageName="Fishing Odds"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Catch The Cash!'} navLink={'/projects/catch-the-cash'}  projectImage={'/images/featuredCatchTheCash.png'} 
            projectDescription={'See where and when to make the most money fishing.'} altProjectImageName="Catch The Cash"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Crab Pots!'} navLink={'/projects/crab-pots'} projectImage={'/images/featuredCrabPots.png'} 
            projectDescription={'Everything you need to know about Stardews most overpowered item.'} altProjectImageName="Crab Pots"></FeaturedProjectContainer>
            <FeaturedProjectContainer projectName={'Community Checklist!'} navLink={'/projects/community-center-checklist'} projectImage={'/images/featuredCommunityChecklist.png'} 
            projectDescription={'An easy way to plan your community center fishing.'} altProjectImageName="Community Checklist"></FeaturedProjectContainer>
        </div>
    )
}

export default Featured;