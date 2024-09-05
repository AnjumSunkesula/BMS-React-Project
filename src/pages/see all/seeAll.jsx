import './seeAll.css'
import Header from '../../components/header/header';
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


function SeeAll () {

    const [visibleDropdown, setVisibleDropdown] = useState(''); //The visibleDropdown state is used to track which dropdown is currently open.If no dropdown is open, it stores null

    // const handleToggleDropDown = (dropdown) => {
    //     if (visibleDropdown === dropdown) {
    //         setDropDownVisible(null); // Close the dropdown if it's clicked twice
    //     } else {
    //         setDropDownVisible(dropdown); // Open the clicked dropdown
    //     }
    // };

    const handleToggleDropDown = (dropdownName) => {
        setVisibleDropdown(visibleDropdown === dropdownName ? '' : dropdownName);
    };

    return(
        <>
        <Header/>
        {/* filter container */}
        <div className='filter-container'>
            <div className='filters'>
                filters
            </div>
            <div className='filters-division'>
                <div className='language-container '>
                    <div className='bGHvsh'  onClick={() => handleToggleDropDown('language')}>
                        <span className='arrow' >
                            {visibleDropdown === 'language' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                        </span>
                        <h4 className='Gsjsa'>languages</h4>
                        <div className='clear'>clear</div>
                    </div>
                    {visibleDropdown === 'language' && (
                        <div className='language-options'>
                            <div className='yGpFs'>english</div>
                            <div className='yGpFs'>hindi</div>
                            <div className='yGpFs'>marathi</div>
                            <div className='yGpFs'>tamil</div>
                            <div className='yGpFs'>telugu</div>
                            <div className='yGpFs'>gujarathi</div>
                            <div className='yGpFs'>japanese</div>
                            <div className='yGpFs'>bhojpuri</div>
                            <div className='yGpFs'>malayalam</div>
                            <div className='yGpFs'>multi-language</div>
                            <div className='yGpFs'>punjabi</div>
                        </div>
                    )}
                </div>
                <div className='genre-container'>
                   <div className='bGHvsh'  onClick={() => handleToggleDropDown('genre')}>
                        <span className='arrow' >
                            {visibleDropdown === 'genre' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                        </span>
                        <h4 className='Gsjsa'>genre</h4>

                    </div>
                    {visibleDropdown === 'genre' && (
                        <div className='genre-options'>
                            <div className='yGpFs'>drama</div>
                            <div className='yGpFs'>action</div>
                            <div className='yGpFs'>thriller</div>
                            <div className='yGpFs'>comedy</div>
                            <div className='yGpFs'>horror</div>
                            <div className='yGpFs'>romantic</div>
                            <div className='yGpFs'>adventure</div>
                            <div className='yGpFs'>fantasy</div>
                            <div className='yGpFs'>crime</div>
                            <div className='yGpFs'>anime</div>
                            <div className='yGpFs'>family</div>
                            <div className='yGpFs'>biography</div>
                            <div className='yGpFs'>classic</div>
                            <div className='yGpFs'>sci-fi</div>
                            <div className='yGpFs'>animation</div>
                            <div className='yGpFs'>mystery</div>
                            <div className='yGpFs'>devotional</div>
                            <div className='yGpFs'>documentary</div>
                            <div className='yGpFs'>historical</div>
                            <div className='yGpFs'>sports</div>
                        </div>
                    )}
                </div>
                <div className='format-container'>
                    <div className='bGHvsh'  onClick={() => handleToggleDropDown('format')}>
                        <span className='arrow' >
                            {visibleDropdown === 'format' ? <IoIosArrowUp /> : <IoIosArrowDown/>}
                        </span>
                        <h4 className='Gsjsa'>format</h4>
                    </div>
                    {visibleDropdown === 'format' && (
                        <div className='format-options'>
                            <div className='yGpFs'>2D</div>
                            <div className='yGpFs'>4DX</div>
                            <div className='yGpFs'>IMAX 2D</div>
                            <div className='yGpFs'>3D</div>
                            <div className='yGpFs'>4DX 3D</div>
                            <div className='yGpFs'>MX4D</div>
                            <div className='yGpFs'>2D SCREEN X</div>
                            <div className='yGpFs'>MX4D 3D </div>
                            <div className='yGpFs'>IMAX 3D</div>
                            <div className='yGpFs'>ICE</div>
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* movies container */}

        <div className='movies-container'>
            <div>
                selected filters
            </div>
            <div>
                
            </div>

        </div>

       
               
        </>
    );

}
export default SeeAll;