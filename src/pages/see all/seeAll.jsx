import './seeAll.css'
import Header from '../../components/header/header';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BrowserRouter as Router, Switch, Route, useHistory  } from 'react-router-dom';
import RecommendedMovies from '../../components/Recommended Movies/RM';
import AboutMovie from '../../components/aboutmovie/AboutMovie'
import MovieDetails from '../../components/aboutmovie/movieDetails';

function SeeAll () {

    

    

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



    return(
        <>
        <Header/>
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
                                {['english', 'hindi', 'marathi', 'tamil', 'telugu', 'gujarathi', 'japanese', 
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

          {/* movies container */}

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
                    <div>
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
                    <div>
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
            </div>

        </div>
       
               
        </>
    );

}
export default SeeAll;