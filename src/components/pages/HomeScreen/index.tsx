import H1 from '../../atoms/H1';
import Featured from '../../organisms/Featured';
import './HomeScreen.css'


const HomeScreen = () => {
    return (
        <div className="home-screen">
            <H1 text={'Fan Favourites'}></H1>
            <Featured></Featured>
        </div>
    )
}

export default HomeScreen;