import './seeAll.css'
import Header from '../../components/header/header';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {  useHistory  } from 'react-router-dom';
import img1    from '../../assets/recommended movies/movie-cards/D & W.avif'
import img2    from '../../assets/recommended movies/movie-cards/IEWU.avif'
import img3    from '../../assets/recommended movies/movie-cards/double ismart.avif'
import img4    from '../../assets/recommended movies/movie-cards/stree 2.avif'
import img5    from '../../assets/recommended movies/movie-cards/inside out 2.avif'
import img6    from '../../assets/recommended movies/movie-cards/DM4.avif'
import img7    from '../../assets/recommended movies/movie-cards/gharat ganpati.avif'
import img8    from '../../assets/recommended movies/movie-cards/KKM.avif'
import img9    from '../../assets/recommended movies/movie-cards/nunakkuzhi.avif'
import img10   from '../../assets/recommended movies/movie-cards/vedaa.avif'
import img11   from  '../../assets/recommended movies/movie-cards/beetlejuice.avif'
import img12   from  '../../assets/recommended movies/movie-cards/detective.avif'
import img13   from  '../../assets/recommended movies/movie-cards/GOAT.avif'
import img14   from  '../../assets/recommended movies/movie-cards/joker.avif'
import img15   from  '../../assets/recommended movies/movie-cards/kill.avif'
import img16   from  '../../assets/recommended movies/movie-cards/S-Sanivaram.avif'
import img17   from  '../../assets/recommended movies/movie-cards/udaan choo.avif'
import img18   from  '../../assets/recommended movies/movie-cards/alien.avif'
import img19   from  '../../assets/recommended movies/movie-cards/gujarathi.avif'
import img20   from '../../assets/recommended movies/movie-cards/marathi.avif'
import img21   from  '../../assets/recommended movies/movie-cards/wedding.avif'
import img22   from  '../../assets/recommended movies/movie-cards/vaazhai.avif'
import img23   from  '../../assets/recommended movies/movie-cards/maharaja.avif'
import img24   from  '../../assets/recommended movies/movie-cards/colony-2.avif'
import img25   from  '../../assets/recommended movies/movie-cards/gangs-1.avif'
import img26   from  '../../assets/recommended movies/movie-cards/strange darling.avif'
import img27   from  '../../assets/recommended movies/movie-cards/RHTDM.avif'
import img28   from  '../../assets/recommended movies/movie-cards/gangs.avif'
import img29   from  '../../assets/recommended movies/movie-cards/17.avif'
import img30   from '../../assets/recommended movies/movie-cards/laila majnu.avif'
import img31   from  '../../assets/recommended movies/movie-cards/DDLJ.avif'


function SeeAll ({ selectedCity, setSelectedCity }) {

    const history = useHistory();
    // const startIndex = 0;

    const handleMovieClick = (movie, index,) => { 
        history.push({
            pathname: '/aboutmovies',
            state: {movie, index} 
        });
    };



    

    const [visibleDropdown, setVisibleDropdown] = useState(''); //The visibleDropdown state is used to track which dropdown is currently open.If no dropdown is open, it stores null
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [selectedFormats, setSelectedFormats] = useState([]);

    const handleToggleDropDown = (dropdownName) => {
        if (dropdownName !== 'clear') {
            setVisibleDropdown(visibleDropdown === dropdownName ? '' : dropdownName);
        }
    };

    const handleClearSelection = (type, e) => {  //no need to toggle the dropdown when clearing the selection
        e.stopPropagation(); //prevent triggering the dropdown
        switch (type) {
            case 'language':
                setSelectedLanguages([]);
                break;
            case 'genre':
                setSelectedGenres([]);
                break;
            case 'format':
                setSelectedFormats([]);
                break;
            default:
                break;
        }
    };

    const handleSelectOption = (option, type) => {
        switch (type) {
            case 'language':
                setSelectedLanguages(prev => 
                    prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
                );
                break;
            case 'genre':
                setSelectedGenres(prev => 
                    prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
                );
                break;
            case 'format':
                setSelectedFormats(prev => 
                    prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
                );
                break;
            default:
                break;
        }
    };

    const movies = [
    { img: img1  ,  movieName: 'deadpool & wolverine',       genre: 'action, adventure, comedy',           languages: 'english, hindi, tamil, telugu',  formats: '2D,2D SCREEN X ,3D,MX4D 3D,4DX 3D,3D SCREEN X,IMAX 2D,ICE 3D, IMAX 3D' },
    { img: img2  ,  movieName: 'it ends with us',            genre: 'drama, romantic',                     languages: 'english',  formats: '2D' },
    { img: img3  ,  movieName: 'double ismart',              genre: 'action, sci-fi, thriller',            languages: 'telugu, kannada, malayalam, tamil, hindi',  formats: '2D' },
    { img: img4  ,  movieName: 'stree 2: sarkate ka aatank', genre: 'comedy, horror',                      languages: 'hindi',  formats: '2D' },
    { img: img5  ,  movieName: 'inside out 2',               genre: 'animation, comedy, drama',            languages: 'english, hindi, tamil',  formats: '2D,4DX,3D,MX4D 3D,MX4D,4DX 3D,IMAX 2D,ICE 3D, IMAX 3D' },
    { img: img6  ,  movieName: 'despicable me 4',            genre: 'action, adventure, animation, comedy',languages: 'english, hindi, tamil, telugu',  formats: '2D,3D,MX4D 3D, 2D SCREEN X, IMAX 3D,4DX 3D,3D SCREEN X,ICE 3D' },
    { img: img7  ,  movieName: 'gharat ganpati',             genre: 'comedy, drama, family',               languages: 'marathi',  formats: '2D' },
    { img: img8  ,  movieName: 'khel khel mein',             genre: 'comedy, drama',                       languages: 'hindi',  formats: '2D' },
    { img: img9  ,  movieName: 'nunakkuzhi',                 genre: 'comedy, thriller',                    languages: 'malayalam',  formats: '2D' },
    { img: img10 ,  movieName: 'vedaa',                      genre: 'action, drama',                       languages: 'hindi, tamil, telugu',  formats: '2D' },
    { img: img11 ,  movieName: 'beetlejuice beetlejuice' ,   genre: 'comedy, fantasy, horror',             languages: 'english',  formats: '2D, MX4D, IMAX 2D, ICE, 4DX, 2D SCREEN X' },
    { img: img12 ,  movieName: 'detective conan vs. kid the phantom thief', genre: 'anime, crime, mystery',languages: 'japanese',  formats: '2D' },
    { img: img13 ,  movieName: 'the greatest of all time' ,  genre: 'action, drama, thriller',             languages: 'tamil, telugu',  formats: '2D, IMAX 2D' },
    { img: img14 ,  movieName: 'joker' ,                     genre: 'drama, suspense, thriller',           languages: 'english',  formats: '2D, MX4D, 2D SCREEN X, 4DX, ICE' },
    { img: img15 ,  movieName: 'kill' ,                      genre: 'action, thriller',                    languages: 'hindi',  formats: '2D' },
    { img: img16 ,  movieName: 'saripodha sanivaram' ,       genre: 'action, drama',                       languages: 'telugu',  formats: '2D' },
    { img: img17 ,  movieName: 'udan chhoo' ,                genre: 'comedy, drama, family',               languages: 'gujarathi',  formats: '2D' },
    { img: img18 ,  movieName: 'alien: romulus' ,            genre: 'horror, sci-fi, thriller',            languages: 'english, hindi, telugu, tamil',  formats: '2D, IMAX 2D,MX4D, 4DX, ICE, 2D SCREEN X'},
    { img: img19 ,  movieName: 'fakt purusho maate' ,        genre: 'comedy, drama, fantasy',              languages: 'gujarathi',  formats: ' 2D'},
    { img: img20 ,  movieName: 'shriyut non maharashtrian' , genre: 'drama, mystery, thriller',            languages: 'marathi',  formats: '2D'},
    { img: img21 ,  movieName: 'a wedding story' ,           genre: 'horror, thriller',                    languages: 'hindi',  formats: '2D'},
    { img: img22 ,  movieName: 'vaazhai' ,                   genre: 'drama',                               languages: 'tamil',  formats: '2D'},
    { img: img23 ,  movieName: 'maharaja (hindi)' ,          genre: 'action, drama',                       languages: 'hindi',  formats: '2D'},
    { img: img24 ,  movieName: 'demonte colony 2-vengeance of the unholy' ,    genre: 'horror, thriller',  languages: 'tamil',  formats: '2D'},
    { img: img25 ,  movieName: 'gangs of wasseypur' ,        genre: 'crime, drama, thriller',              languages: 'hindi',  formats: '2D'},
    { img: img26 ,  movieName: 'strange darling' ,           genre: 'adventure, horror, mystery, thriller',languages: 'english',  formats: '2D'},
    { img: img27 ,  movieName: 'rehnaa hai tere dil mein' ,  genre: 'drama, romantic',                     languages: 'hindi',  formats: '2D'},
    { img: img28 ,  movieName: 'gangs of wasseypur 2' ,      genre: 'action, drama, thriller',             languages: 'hindi',  formats: '2D'},
    { img: img29 ,  movieName: `seventeen tour 'follow' again to cinemas`, genre: 'documentary, musical',  languages: 'korean',  formats: '2D, 4DX, 2D SCREEN X'},
    { img: img30 ,  movieName: 'laila majnu',                genre: 'drama, romantic',                    languages: 'hindi',  formats: '2D'},
    { img: img31 ,  movieName: 'dilwale dulhaniya le jayenge',genre: 'classic, drama, romantic',           languages: 'hindi',  formats: '2D'}
    ];

    //filter the movies based on selected filters
    const filteredMovies = movies.filter((movie) => {
        const languageMatch = selectedLanguages.length === 0 || selectedLanguages.some((lang) => movie.languages.includes(lang));
        const genreMatch = selectedGenres.length === 0 || selectedGenres.some((genre) => movie.genre.includes(genre));
        const formatMatch = selectedFormats.length === 0 || selectedFormats.some((format) => movie.formats.includes(format));

        return languageMatch && genreMatch && formatMatch ;

    })


    return(
        <>
        <Header selectedCity={selectedCity} setSelectedCity={setSelectedCity}/>
        {/* filter container */}
        <div className='see-all-container'>
            <div className='filter-container'>
                <div className='filters'>
                    filters
                </div>
                <div className='filters-division'>
                    {/* language container */}
                    <div className='language-container '>
                        <div className='bGHvsh'  onClick={() => handleToggleDropDown('language')}>
                            <div className='jadFjh'>
                                <span className='arrow' >
                                    {visibleDropdown === 'language' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                                </span>
                                <h4 className='Gsjsa'>languages</h4>
                            </div>
                            <div className='clear' onClick={(e) => handleClearSelection('language', e)}>clear</div>

                        </div>
                        {visibleDropdown === 'language' && (
                            <div className='language-options'>
                                {['english', 'hindi', 'marathi', 'tamil', 'telugu', 'kannada', 'gujarathi', 'japanese', 
                                'bhojpuri', 'malayalam', 'multi-language', 'punjabi'].map(option => (
                                    <div
                                        key={option}
                                        className={`yGpFs ${selectedLanguages.includes(option) ? 'selected' : ''}`}
                                        onClick={() => handleSelectOption(option, 'language')}
                                    >
                                        {option}
                                    </div>
                                ))}
                                

                            </div>
                        )}
                    </div>
                    {/* genre container */}
                    <div className='genre-container'>
                        <div className='bGHvsh'  onClick={() => handleToggleDropDown('genre')}>
                            <div className='jadFjh'>
                                <span className='arrow' >
                                    {visibleDropdown === 'genre' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                                </span>
                                <h4 className='Gsjsa'>genre</h4>
                            </div>
                            <div className='clear' onClick={(e) => handleClearSelection('genre', e)}>clear</div>

                        </div>
                        {visibleDropdown === 'genre' && (
                            <div className='genre-options'>
                                {['drama', 'action', 'thriller', 'comedy', 'horror', 'romantic', 'adventure', 'fantasy', 'crime', 'anime', 'family', 'biography', 'classic', 'sci-fi', 'animation', 'mystery', 'devotional', 'documentary', 'historical', 'sports'].map(option => (
                                    <div
                                        key={option}
                                        className={`yGpFs ${selectedGenres.includes(option) ? 'selected' : ''}`}
                                        onClick={() => handleSelectOption(option, 'genre')}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* format-container */}
                    <div className='format-container'>
                        <div className='bGHvsh'  onClick={() => handleToggleDropDown('format')}>
                            <div className='jadFjh'>
                                <span className='arrow' >
                                    {visibleDropdown === 'format' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                                </span>
                                <h4 className='Gsjsa'>format</h4>
                            </div>
                            <div className='clear' onClick={(e) => handleClearSelection('format', e)}>clear</div>
                                
                            
                        </div>
                        {visibleDropdown === 'format' && (
                            <div className='format-options'>
                                {['2D', '4DX', 'IMAX 2D', '3D', '4DX 3D', 'MX4D', '2D SCREEN X', 'MX4D 3D', 'IMAX 3D', 'ICE'].map(option => (
                                    <div
                                        key={option}
                                        className={`yGpFs ${selectedFormats.includes(option) ? 'selected' : ''}`}
                                        onClick={() => handleSelectOption(option, 'format')}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

          {/*  container */}

            <div className='movie-container'>
                <div className='selected-heading'>
                    selected filters:
                </div>
                <div className='hbVTjn'>
                    <div className='selected-options'>
                        {selectedLanguages.length > 0 && (
                            <ul className='uo-li'>
                                {selectedLanguages.map(filter => (
                                    <li 
                                    className='o-l' 
                                    key={filter} 
                                    onClick={() => handleSelectOption(filter, 'language')}>
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='selected-options'>
                        {selectedGenres.length > 0 && (
                            <ul className='uo-li'>
                                {selectedGenres.map(filter => (
                                    <li 
                                    className='o-l'
                                    key={filter} 
                                    onClick={() => handleSelectOption(filter, 'genre')}>
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='selected-options'>
                        {selectedFormats.length > 0 && (
                            <ul className='uo-li'>
                                {selectedFormats.map(filter => (
                                    <li 
                                    className='o-l'
                                    key={filter} 
                                    onClick={() => handleSelectOption(filter, 'format')}>
                                        {filter}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                </div>



                <div className='movie-cards-container'>
                    {filteredMovies.length > 0 ? (filteredMovies.map((movie, index) => (
                       <div className='movie' key={index} >
                            <div className='image'>
                                <img 
                                    src={movie.img} 
                                    className='displayed-movie-cards'  
                                    alt={movie.movieName}
                                    onClick={() => handleMovieClick(movie, index)}
                                />
                            </div>
                            <div className='dVLjtu'>
                                <div className='dshUgd'>
                                    <div className='film-title'>{movie.movieName}</div>
                                </div>
                                <div className='dshUgd'>
                                    <div className='Ylsgya'>{movie.genre}</div>
                                </div>
                                <div className='dshUgd'>
                                    <div className='Ylsgya'>{movie.languages}</div>
                                </div>
                            </div>
                        </div> 
                        ))
                    ) : (
                          <p>No movies found for the selected filters.</p>
                    )}




                    {/* {movies.slice(startIndex, startIndex + 31).map((movie, index) => (
                        <div className='movie' key={index} >
                        <div className='image'>
                            <img 
                                src={movie.img} 
                                className='displayed-movie-cards'  
                                alt={movie.movieName}
                                onClick={() => handleMovieClick(movie, index)}
                            />
                        </div>
                        <div className='dVLjtu'>
                            <div className='dshUgd'>
                                <div className='film-title'>{movie.movieName}</div>
                            </div>
                            <div className='dshUgd'>
                                <div className='Ylsgya'>{movie.genre}</div>
                            </div>
                            <div className='dshUgd'>
                                <div className='Ylsgya'>{movie.languages}</div>
                            </div>
                        </div>
                    </div>
                    ))} */}
                    
                </div>

                
                



            </div>

        </div>
       
               
        </>
    );

}
export default SeeAll;