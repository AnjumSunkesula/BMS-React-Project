import Header from "../header/header";
import '../aboutmovie/AboutMovie.css';
import MovieDetails from "./movieDetails";
import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'

function AboutMovies () {

   const location = useLocation();
   const {movie, index} = location.state || {}; //get movie from RM.jsx    
 
    
    const [currentCastIndex, setCurrentCastIndex] = useState(0); // state to manage cast sliding
    const [currentCrewIndex, setCurrentCrewIndex] = useState(0); // state to manage crew sliding
    const [rating, setRating] = useState(0);
    const [isRated, setIsRated] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submittedRating, setSubmittedRating] = useState(null);
    const [movieDescriptions, setMovieDescriptions] = useState([]);

    const details = MovieDetails[index + 1]; //to get the movie details based on index

    
    const castPerPage = 5;
    const crewPerPage = 5;

    const handleNextCast = () => {
        if(currentCastIndex < details.cast.length - castPerPage) {
            setCurrentCastIndex(currentCastIndex + castPerPage);
        }
    };

    const handlePreviousCast = () => {
        if(currentCastIndex > 0 ) {
            setCurrentCastIndex(currentCastIndex - castPerPage);
        }
    };

    const handleNextCrew = () => {
        if (currentCrewIndex < details.crew.length - crewPerPage) {
            setCurrentCrewIndex(currentCrewIndex + crewPerPage);
        }
    };

    const handlePreviousCrew = () => {
        if (currentCrewIndex > 0) {
            setCurrentCrewIndex(currentCrewIndex - crewPerPage);
        }
    };


    const handleRatingChange = (e) => {
        const newRating = Number(e.target.value);
        setRating(newRating);
        setIsRated(true); //mark as rated when the slider is being used
    }

    const handleSubmitRating = (close) => {
        // const updatedVotes = `(${(Number(selectedDescription.votes.match(/\d+/)[0]) + 1).toLocaleString()} Votes)`;
        // selectedDescription.votes = updatedVotes; //to display updated votes in the "votes" section
        const updatedDescriptions = [...movieDescriptions];
        const movieDetails = updatedDescriptions[index];
        
        const updatedVotes = `(${(Number(movieDetails.votes.match(/\d+/)[0]) + 1).toLocaleString()} Votes)`;
        movieDetails.votes = updatedVotes;
        
        //disable button after submission
        setMovieDescriptions(updatedDescriptions);
        setIsRated(false);
        setIsSubmitted(true);
        setSubmittedRating(rating);//store the submitted rating
        close();

    }

    const showNextCast = currentCastIndex < details.cast.length - castPerPage;
    const showPreviousCast = currentCastIndex > 0;

    const showNextCrew = currentCrewIndex < details.crew.length - crewPerPage;
    const showPreviousCrew = currentCrewIndex > 0;

     useEffect(() => {
        // Initialize movie descriptions here or fetch from an API
        setMovieDescriptions([
            { dimension: '2d,2d screen x ,3d,mx4d 3d,4dx 3d,3d screen x,imax 2d,ice 3d, imax 3d' , language:'english, telugu, hindi, tamil', icon:<IoStar />, 
            rating: '8.7/10' ,    votes:'(6 Votes)', releaseDate:'26 jul, 2024',         certification:'a',                    duration:'2h 12m'} ,
       { dimension: '2d' ,     language: 'english',              icon:<IoStar />,   
            rating: '8.5/10',     votes:'(3 Votes)',  releaseDate:'9 aug, 2024',         certification:'a',                    duration:'2h 12m'} ,
       { dimension: '2d' ,     language: 'telugu, kannada, malayalam, tamil, hindi', icon:<IoStar />, 
            rating: '6.7/10' ,    votes:'(8 Votes)', releaseDate:'15 aug, 2024',         certification:'a',                    duration:'2h 42m' } ,
       { dimension: '2d' ,     language: 'hindi',                icon:<IoStar />, 
            rating: '9.1/10',     votes:'(13 Votes)', releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 29m'} ,
       { dimension: '2d, imax 3d, 4dx, mx4d 3d,ice 3d,3d,mx4d,4dx 3d,imax 2d' ,        language: 'english, hindi, tamil', icon:<IoStar />, 
            rating: '9.2/10' ,    votes:'(9 Votes)',  releaseDate:'14 jun, 2024',         certification:'u',                    duration:'1h 36m'}, 
       { dimension: '2d,3d,mx4d 3d, 2d screen x,  imax 3d,4dx 3d,3d screen x,ice 3d' , language: 'english', icon:<IoStar />, 
            rating: '8.4/10' ,    votes:'(12 Votes)',  releaseDate:'5 jul, 2024',         certification:'u',                    duration:'1h 34m'} ,
       { dimension: '2d' ,     language: 'marathi',              icon:<IoStar />,   
            rating: '9.2/10' ,    votes:'(5 Votes)',   releaseDate:'26 jul, 2024',         certification:'u',                    duration:'2h 19m'} ,
       { dimension: '2d' ,     language: 'hindi',                icon:<IoStar />,   
            rating: '8.2/10' ,    votes:'(15 Votes)',  releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 14m'} ,
       { dimension: '2d' ,     language: 'malayalam',            icon:<IoStar />,   
            rating: '8.4/10' ,    votes:'(24 Votes)',   releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 6m'} ,
       { dimension: '2d' ,     language: 'hindi, tamil, telugu', icon:<IoStar />, 
            rating: '8/10' ,      votes:'(18 Votes)',  releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 31m'} 
        ]);
    }, []);

    // const description = [
    //    { dimension: '2d,2d screen x ,3d,mx4d 3d,4dx 3d,3d screen x,imax 2d,ice 3d, imax 3d' , language:'english, telugu, hindi, tamil', icon:<IoStar />, 
    //         rating: '8.7/10' ,    votes:'0', releaseDate:'26 jul, 2024',         certification:'a',                    duration:'2h 12m'} ,
    //    { dimension: '2d' ,     language: 'english',              icon:<IoStar />,   
    //         rating: '8.5/10',     votes:'1',  releaseDate:'9 aug, 2024',         certification:'a',                    duration:'2h 12m'} ,
    //    { dimension: '2d' ,     language: 'telugu, kannada, malayalam, tamil, hindi', icon:<IoStar />, 
    //         rating: '6.7/10' ,    votes:'0', releaseDate:'15 aug, 2024',         certification:'a',                    duration:'2h 42m' } ,
    //    { dimension: '2d' ,     language: 'hindi',                icon:<IoStar />, 
    //         rating: '9.1/10',     votes:'0', releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 29m'} ,
    //    { dimension: '2d, imax 3d, 4dx, mx4d 3d,ice 3d,3d,mx4d,4dx 3d,imax 2d' ,        language: 'english, hindi, tamil', icon:<IoStar />, 
    //         rating: '9.2/10' ,    votes:'0',  releaseDate:'14 jun, 2024',         certification:'u',                    duration:'1h 36m'}, 
    //    { dimension: '2d,3d,mx4d 3d, 2d screen x,  imax 3d,4dx 3d,3d screen x,ice 3d' , language: 'english', icon:<IoStar />, 
    //         rating: '8.4/10' ,    votes:'0',  releaseDate:'5 jul, 2024',         certification:'u',                    duration:'1h 34m'} ,
    //    { dimension: '2d' ,     language: 'marathi',              icon:<IoStar />,   
    //         rating: '9.2/10' ,    votes:'0',   releaseDate:'26 jul, 2024',         certification:'u',                    duration:'2h 19m'} ,
    //    { dimension: '2d' ,     language: 'hindi',                icon:<IoStar />,   
    //         rating: '8.2/10' ,    votes:'0',  releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 14m'} ,
    //    { dimension: '2d' ,     language: 'malayalam',            icon:<IoStar />,   
    //         rating: '8.4/10' ,    votes:'0',   releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 6m'} ,
    //    { dimension: '2d' ,     language: 'hindi, tamil, telugu', icon:<IoStar />, 
    //         rating: '8/10' ,      votes:'0',  releaseDate:'15 aug, 2024',         certification:'ua',                    duration:'2h 31m'} 
    // ];

    const selectedDescription = movieDescriptions[index];

    const backgroundGradients = [
        "linear-gradient(270deg, rgb(250,255,251), rgb(143,95,31), rgb(119,20,15) )",
        "linear-gradient(90deg, rgb(104,57,67), rgb(173,135,122), rgb(122,87,57) )",
        "linear-gradient(90deg, rgb(21,1,3), rgb(146,14,10), rgb(104,23,19), rgb(65,66,61), rgb(130,117,111))",
        "linear-gradient(270deg, rgb(18,38,65), rgb(105,116,161), rgb(196,140,153), rgb(185,69,56), rgb(76,18,17) )",
        "linear-gradient(90deg, rgb(188,188,188), rgb(85,135,184), rgb(219,212,144), rgb(183,179,202), rgb(184,182,187) )",
        "linear-gradient(90deg, rgb(231,68,111), rgb(216,118,79), rgb(239,142,61), rgb(170,93,49), rgb(32,2,196) )",
        "linear-gradient(90deg, rgb(82,52,40), rgb(157,53,53), rgb(248,119,124), rgb(193,140,97), rgb(240,177,30) )",
        "linear-gradient(90deg, rgb(193,162,108), rgb(184,155,115), rgb(142,107,79), rgb(148,90,76), rgb(133,64,49) )",
        "linear-gradient(90deg, rgb(76,50,25), rgb(131,109,70), rgb(207,166,100), rgb(196,174,125), rgb(54,40,29) )",
        "linear-gradient(90deg, rgb(163,67,79), rgb(43,44,65), rgb(94,101,109), rgb(141,113,110), rgb(177,159,147) )"
    ];   

    const containerStyle = {
        background: backgroundGradients[index] || "linear-gradient(to right, #333, #777)",
        padding: '30px',
    };

    

   
    

    return(
        <>
        <Header/>
        <div className="film-container">
            <div className='aboutMovie-container'>
                <div className="ticket-booking-container" style={containerStyle}>
                    <div> 
                        <img src={movie.img} className='tBcIMg' alt={movie.movieName} />
                    </div>
                    <div className="image-details">
                        <h1 className="movie-title">{movie.movieName}</h1>
                        <div className="rating-box">
                            {selectedDescription && (
                                <div className="div-rating">
                                    <p className="star-icon">{selectedDescription.icon}</p>
                                    <p className="rating">{selectedDescription.rating}</p>
                                    <p className="votes">{selectedDescription.votes}</p>
                                </div>
                            )}
                            <Popup 
                            modal                  
                            nested
                            trigger =
                                {<div className="hshjF">
                                    <button 
                                       className={`rating-button ${isSubmitted ? 'rated' : ''}`}
                                       disabled={isSubmitted}   
                                    >
                                        {isSubmitted ? (
                                            <>
                                            <span >Your Rating: <span className="submitted-rating">{submittedRating}/10</span></span>
                                            <IoStar className="star-symbol"/>
                                            </>
                                        ) : (
                                            'rate now'
                                        )}
                                        {/* rate now */}
                                    </button>
                                </div>}
                                 onOpen={() => setRating(0)} //reset rating to 0 when popup opens
                                 onClose={() =>  setIsRated(false)} // reset isRated when popup closes.
                                 contentStyle={{ width: '20%'}} //width of the popup
                                >
                                {close => (
                                    <div className="rating-button-section">
                                        <div className="rating-header">
                                            <div className="box-text">
                                                <p className="p-box-text">how was the movie?</p>
                                            </div>
                                            <div className="close-icon-container">
                                                <span className="close-icon" onClick={close}><IoCloseOutline /></span>
                                            </div>
                                        </div>
                                        <div className="rating-area-container">
                                            <div className="rating-area">
                                                <div className="rating-caption">how would you rate the movie?</div>
                                                <div className="rating-section">
                                                    <div className="rating-direction">
                                                        <span>slide to rate</span>
                                                        <span className="icon"><MdOutlineArrowRightAlt /></span>
                                                    </div>
                                                    {/* rating bar */}
                                                    <div className="rating-slider-wrapper">
                                                        <div className="rating-slider">
                                                            <input 
                                                               type="range"  
                                                               id="range" 
                                                               min={0} 
                                                               max={10} 
                                                               step={0.1}
                                                               value={rating}
                                                               onChange={handleRatingChange}
                                                            />
                                                            <div className="dividers"></div>
                                                            <div className="selected-rating" style={{width: '0%'}}>
                                                                <div className="slider-track" style={{minWidth: '232px'}}>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                    <span></span>
                                                                </div>
                                                            </div> 
                                                        </div>

                                                        <div className="slider-count">
                                                            <span className="output">{rating}/10</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                           {/* rating description */}
                                            <div className="ratings-matter">
                                                <div className="ratings-matter-inside">
                                                    <div className="caveat-text">Your ratings matter!</div>
                                                    <div className="ratings-text">They help others decide what to watch next.</div>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="submit-section">
                                            <div className="button-wrapper">
                                                <button 
                                                   className={`submitting-button ${isRated ? 'rated' : ''}`}
                                                //    disabled={ !isRated || isSubmitted} //disable after submission
                                                   onClick={() => handleSubmitRating(close)}
                                                >
                                                    <span className="button-text">Submit Rating</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                        
                        {selectedDescription && (
                            <>
                            <div className="dim-lan">
                                <p className="dimension">{selectedDescription.dimension}</p>
                                <p className="language">{selectedDescription.language}</p>
                            </div>
                            <div className="dur-gen-c">
                                {selectedDescription.duration}
                                <span className="dCrDoT"> • </span>
                                {movie.genre}
                                <span className="dCrDoT"> • </span>
                                {selectedDescription.certification}
                                <span className="dCrDoT"> • </span>
                                {selectedDescription.releaseDate}
                            </div>
                            </>
                        )}
                        <div className="hDaghA">
                            <button className="book-tickets">book tickets</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* movieDetails */}
            <div className="movie-details-container">
                <div className="plot-summary">
                    <h1 className="film-name">about the movie</h1>
                    <p className="plot ">{details.plot}</p>
                </div>
                <hr />


                <div className="cast-container">
                    <h3 className="hDgvjh">cast</h3>
                    <div className="members-details">
                        {details.cast.slice(currentCastIndex, currentCastIndex + castPerPage).map ((member, index) => (
                            <div key={index} className='members'>
                                <img src={member.img} alt={member.name} className="jhFcHj" />
                                <p className="bFgFYv">{member.name}</p>
                                <p className="gfSgRc"> {member.role}</p>
                            </div>
                        ))}
                        {showPreviousCast && (
                            <div className='GysTbv'>
                                <div className='prev-arrow' onClick={handlePreviousCast}>
                                    <span className="material-symbols-rounded">
                                        arrow_back_ios
                                    </span>
                                </div>
                            </div>  
                        )}

                        {showNextCast && (
                            <div className='JgyDk'>
                                <div className='next-arrow' onClick={handleNextCast}>
                                    <span className="material-symbols-rounded">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>


                <div className="crew-container">
                    <h3 className="hDgvjh">crew</h3>
                    <div className="members-details">
                        {details.crew.slice(currentCrewIndex, currentCrewIndex + crewPerPage).map((member, index) => (
                            <div key={index} className='members'>
                                <img src={member.img} alt={member.name} className="jhFcHj" />
                                <p className="bFgFYv">{member.name}</p>
                                <p className="gfSgRc"> {member.role}</p>
                            </div>
                        ))}
                        {showPreviousCrew && (
                            <div className='GysTbv'>
                                <div className='prev-arrow' onClick={handlePreviousCrew}>
                                    <span className="material-symbols-rounded">
                                        arrow_back_ios
                                    </span>
                                </div>
                            </div>  
                        )}

                        {showNextCrew && (
                            <div className='JgyDk'>
                                <div className='next-arrow' onClick={handleNextCrew}>
                                    <span className="material-symbols-rounded">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default AboutMovies;