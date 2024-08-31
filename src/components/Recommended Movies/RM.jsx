import '../Recommended Movies/RM.css'
import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { MdOutlineArrowRight } from "react-icons/md";
import img1 from '../../assets/recommended movies/D & W.avif'
import img2  from '../../assets/recommended movies/IEWU.avif'
import img3 from '../../assets/recommended movies/double ismart.avif'
import img4     from '../../assets/recommended movies/stree 2.avif'
import img5 from '../../assets/recommended movies/inside out 2.avif'
import img6  from '../../assets/recommended movies/DM4.avif'
import img7   from '../../assets/recommended movies/gharat ganpati.avif'
import img8    from '../../assets/recommended movies/KKM.avif'
import img9    from '../../assets/recommended movies/nunakkuzhi.avif'
import img10 from '../../assets/recommended movies/vedaa.avif'
import stream from '../../assets/recommended movies/stream-leadin-web-collection-202210241242.avif'
// import AboutMovies from '../aboutmovie/AboutMovie';


function RecommendedMovies () {

       
    const history = useHistory();//hook for navigation

    const handleMovieClick = (movie, index,) => { //function to handle movie click and navigate to aboutmovies component
        history.push({
            pathname: '/aboutmovies',
            state: {movie, index} //passing movie data and index to aboutmovies as/via state
        });
    };

    // const navigate = useNavigate();
    // const handleMovieClick = (movie) => {
    //     navigate('/aboutmovies', { state: {movie} });
    // };
    


    const [startIndex, setStartIndex] = useState(0); //state to manage the starting index for movie display
    
    const movies = [
    { img: img1,  movieName: 'deadpool & wolverine',       genre: 'action/adventure/comedy' },
    { img: img2,  movieName: 'it ends with us',            genre: 'drama/romantic' },
    { img: img3,  movieName: 'double ismart',              genre: 'action/sci-fi/thriller' },
    { img: img4,  movieName: 'stree 2: sarkate ka aatank', genre: 'comedy/horror' },
    { img: img5,  movieName: 'inside out 2',               genre: 'animation/comedy/drama' },
    { img: img6 , movieName: 'despicable me 4',            genre: 'action/adventure/animation/comedy' },
    { img: img7,  movieName: 'gharat ganpati',             genre: 'comedy/drama/family' },
    { img: img8,  movieName: 'khel khel mein',             genre: 'comedy/drama' },
    { img: img9,  movieName: 'nunakkuzhi',                 genre: 'comedy/thriller' },
    { img: img10, movieName: 'vedaa',                      genre: 'action/drama' },
    ];
    
    //get the currently displayed movies based on the start index
    const displayedMovies = movies.slice(startIndex, startIndex + 5);


    const handleNext = () => { //function to handle the "next" button click and update the index
        if(startIndex + 5 < movies.length) {
            setStartIndex(startIndex + 5);
        }
    };

    const handleprevious = () => { //function to handle the "previous" button click and update the index
        if(startIndex - 5 >=0) {
            setStartIndex(startIndex - 5);
        }
    };


    //determine whether to show the navigation buttons
    const showPrevious = startIndex > 0;
    const showNext = startIndex + 5 < movies.length;

    return(
        <>
        <div className="movies-container">
            <div className='movie-header'>
                <div className='r-m'>
                    <h3>Recommended Movies</h3>
                </div>
                <div className='s-a'>
                    <h3>see all <span className='arrow-right'><MdOutlineArrowRight /></span> </h3>
                </div>
            </div>


            <div className='movies-captions'>
                {displayedMovies.map((movie, index) => (
                    <div className='movie' key={index}>
                        <div className='image'>
                            <img 
                                src={movie.img} 
                                className='movie-cards'  
                                alt={movie.movieName}
                                onClick={() => handleMovieClick(movie, index + startIndex)} // pass the movie object
                            />
                        </div>
                        <div className='dVLjtu'>
                            <div className='dshUgd'>
                                <div className='movie-name'>{movie.movieName}</div>
                            </div>
                            <div className='dshUgd'>
                                <div className='genre'>{movie.genre}</div>
                            </div>
                        </div>
                    </div>
                ))}

                





                {showNext && (
                    <div className='hghTdh'>
                        <div className='next-arrow' onClick={handleNext}>
                            <span className="material-symbols-rounded">
                                arrow_forward_ios
                            </span>
                        </div>
                    </div>
                )}

                {showPrevious && (
                    <div className='jhTFG'>
                        <div className='prev-arrow' onClick={handleprevious}>
                            <span className="material-symbols-rounded">
                                arrow_back_ios
                            </span>
                        </div>
                    </div>  
                )}



                 



            
               

                

            </div>
            <img src={stream} className='stream' alt="" />
        </div>











        </>
    );






}

export default RecommendedMovies