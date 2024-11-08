import Header from '../components/header/header'
import ImageSlider from '../components/image slider/imageSlider'
import img1 from '../assets/image slider/movies-list.avif'
import img2 from '../assets/image slider/offer.avif'
import img3 from '../assets/image slider/standup-comedy.avif'
import img4 from '../assets/image slider/goa-pic.avif'
import RecommendedMovies from '../components/Recommended Movies/RM'
import { useHistory } from 'react-router-dom'

function Home({ selectedCity, setSelectedCity, setSearchTerm, searchTerm}) {

    const slides = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
    ];

    const movies = [
        { img: img1, movieName: 'Deadpool & Wolverine', genre: 'action/adventure/comedy' },
        { img: img2, movieName: 'It Ends With Us', genre: 'drama/romantic' },
        { img: img3, movieName: 'Double Ismart', genre: 'action/sci-fi/thriller' },
        { img: img4, movieName: 'Stree 2: Sarkate Ka Aatank', genre: 'comedy/horror' },
        { img: img1, movieName: 'Inside Out 2', genre: 'animation/comedy/drama' },
        { img: img2, movieName: 'Despicable Me 4', genre: 'action/adventure/animation/comedy' },
        { img: img3, movieName: 'Gharat Ganpati', genre: 'comedy/drama/family' },
        { img: img4, movieName: 'Khel Khel Mein', genre: 'comedy/drama' },
        { img: img1, movieName: 'Nunakkuzhi', genre: 'comedy/thriller' },
        { img: img2, movieName: 'Veeda', genre: 'action/drama' }
    ];

    const history = useHistory();
    // Filter the movies based on the search term
    const filteredMovies = searchTerm
        ? movies.filter((movie) => movie.movieName.toLowerCase().includes(searchTerm.toLowerCase()))
        : movies;

    // Handle movie click to navigate to AboutMovies
    const handleMovieClick = (movie, index) => {
        history.push({
            pathname: '/aboutmovies',
            state: { movie, index },
        });
    };

    

    
    return(
        <>
            <div>
                <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
                <ImageSlider slides={slides}/>

                {searchTerm && filteredMovies.length > 0 && (
                    <div className="search-results">
                        <ul>
                            {filteredMovies.map((movie, index) => (
                                <li key={index} onClick={() => handleMovieClick(movie, index)}>
                                    {movie.movieName}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <RecommendedMovies  movies={movies}
                handleMovieClick={handleMovieClick}/>



            
            </div>
        </>
    );
    
}
export default Home;