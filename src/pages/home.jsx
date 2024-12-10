import React, { useRef, useEffect } from 'react';
import Header from '../components/header/header'
import ImageSlider from '../components/image slider/imageSlider'
import img1 from '../assets/image slider/movies-list.avif'
import img2 from '../assets/image slider/offer.avif'
import img3 from '../assets/image slider/standup-comedy.avif'
import img4 from '../assets/image slider/goa-pic.avif'
import RecommendedMovies from '../components/Recommended Movies/RM'
import Footer from '../components/footer/footer';
import { useHistory} from 'react-router-dom'
// movie cards
import fig1 from '../assets/recommended movies/movie-cards/D & W.avif'
import fig2  from '../assets/recommended movies/movie-cards/IEWU.avif'
import fig3 from '../assets/recommended movies/movie-cards/double ismart.avif'
import fig4     from '../assets/recommended movies/movie-cards/stree 2.avif'
import fig5 from '../assets/recommended movies/movie-cards/inside out 2.avif'
import fig6  from '../assets/recommended movies/movie-cards/DM4.avif'
import fig7   from '../assets/recommended movies/movie-cards/gharat ganpati.avif'
import fig8    from '../assets/recommended movies/movie-cards/KKM.avif'
import fig9    from '../assets/recommended movies/movie-cards/nunakkuzhi.avif'
import fig10 from '../assets/recommended movies/movie-cards/vedaa.avif'

function Home({ selectedCity, setSelectedCity, setSearchTerm, searchTerm}) {

    const slides = [
        { id: 1, src: img1 },
        { id: 2, src: img2 },
        { id: 3, src: img3 },
        { id: 4, src: img4 },
    ];

    const movies = [
        { img: fig1, movieName: 'Deadpool & Wolverine', genre: 'action/adventure/comedy' },
        { img: fig2, movieName: 'It Ends With Us', genre: 'drama/romantic' },
        { img: fig3, movieName: 'Double Ismart', genre: 'action/sci-fi/thriller' },
        { img: fig4, movieName: 'Stree 2: Sarkate Ka Aatank', genre: 'comedy/horror' },
        { img: fig5, movieName: 'Inside Out 2', genre: 'animation/comedy/drama' },
        { img: fig6, movieName: 'Despicable Me 4', genre: 'action/adventure/animation/comedy' },
        { img: fig7, movieName: 'Gharat Ganpati', genre: 'comedy/drama/family' },
        { img: fig8, movieName: 'Khel Khel Mein', genre: 'comedy/drama' },
        { img: fig9, movieName: 'Nunakkuzhi', genre: 'comedy/thriller' },
        { img: fig10, movieName: 'Veeda', genre: 'action/drama' }
    ];

    const history = useHistory();
    const searchResultsRef = useRef(null);

    // Filter the movies based on the search term
    const filteredMovies = searchTerm ? movies.filter((movie) => movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())) : [];

    // Handle movie click to navigate to AboutMovies
    const handleMovieClick = (movie, index) => {
        history.push({
            pathname: '/aboutmovies',
            state: { movie, index },
        });
    };

    // Hide search results when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchResultsRef.current && !searchResultsRef.current.contains(event.target)) {
                setSearchTerm(''); // Clear search term to hide the results
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [setSearchTerm]);

    // Styles for search results
    const styles = {
        searchResults: {
            position: 'absolute',
            top: '140px', 
            left: '0',
            width: '100%',
            backgroundColor: 'white',
            zIndex: 10,
        },
        searchResultsUl: {
            margin: 0,
            padding: '8px',
            listStyle: 'none',
        },
        searchResultsLi: {
            padding: '10px',
            cursor: 'pointer',
            borderBottom: '1px solid #eee',
            fontFamily: 'sans-serif'
        },
        noResults: {
            padding: '10px',
            textAlign: 'center',
            color: '#888',
        },
    };

    

    
    return(
        <>
            <div>
                <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity} setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>

                {searchTerm && (
                    <div ref={searchResultsRef} style={styles.searchResults}>
                        <ul style={styles.searchResultsUl}>
                            {filteredMovies.length > 0 ? (
                                filteredMovies.map((movie, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleMovieClick(movie, index)}
                                        style={styles.searchResultsLi}
                                        onMouseEnter={(e) => (e.target.style.backgroundColor = '#f0f0f0')}
                                        onMouseLeave={(e) => (e.target.style.backgroundColor = 'white')}
                                    >
                                        {movie.movieName}
                                    </li>
                                ))
                            ) : (
                                <div style={styles.noResults}>No movies found</div>
                            )}
                        </ul>
                    </div>
                )}

                <ImageSlider slides={slides}/>
                <RecommendedMovies  movies={movies} handleMovieClick={handleMovieClick}/>
                <Footer />



            
            </div>
        </>
    );
    
}
export default Home;