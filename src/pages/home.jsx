import Header from '../components/header/header'
import ImageSlider from '../components/image slider/imageSlider'
import img1 from '../assets/image slider/movies-list.avif'
import img2 from '../assets/image slider/offer.avif'
import img3 from '../assets/image slider/standup-comedy.avif'
import img4 from '../assets/image slider/goa-pic.avif'
import RecommendedMovies from '../components/Recommended Movies/RM'
function Home({ selectedCity, setSelectedCity }) {

    const slides = [
        {
            id: 1,
            src: img1,
        },
        {
            id: 2,
            src: img2,
        },
        {
            id: 3,
            src: img3,
        },
        {
            id: 4,
            src: img4,
        },
    ]



    return(
        <>

        <div>
         <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
         <ImageSlider slides={slides}/>
         <RecommendedMovies/>



        
        </div>
        </>
    );
    
}
export default Home