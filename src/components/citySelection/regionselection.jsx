import '../citySelection/regionselection.css'
import React, {useState} from 'react'
import 'reactjs-popup/dist/index.css'
import Banaglore from '../../assets/city selection/bangalore.png'
import Ahmedabad from '../../assets/city selection/ahmedabad.avif'
import Mumbai from '../../assets/city selection/mumbai.avif'
import Hyderabad from '../../assets/city selection/hyderabad.png'
import Chandigarh from '../../assets/city selection/chandigarh.avif'
import Delhi from '../../assets/city selection/delhi.avif'
import Chennai from '../../assets/city selection/chennai.avif'
import Kolkata from '../../assets/city selection/kolkata.avif'
import Pune from '../../assets/city selection/pune.png'
import Kochi from '../../assets/city selection/kochi.avif'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {allCityNames} from './viewallcities'



function RegionSelection ({ setSelectedCity, closePopup }) {

    const [showAllCities, setShowAllCities] = useState(false); //controls visibility of the full city list
    const [searchTerm, setSearchTerm] = useState(''); //the search input value
    const [filteredCities, setFilteredCities] = useState(allCityNames); //stores the filtered list cities for search input..
    const [isSuggestionsVisible, setSuggestionsVisible] = useState(false); //controls the visibility of search suggestion
    
    // toggle city list visibility
    const toggleCityList = () => {
        // setShowAllCities = (!toggleCityList);
        setShowAllCities(prevState => !prevState);//useing the state updater function(prevState= !prevState) to toggle the value
    }

    // handle city selection
    const handleCityClick = (city) => {
        setSelectedCity(city); //set the selected city in the parent component
        setSearchTerm(''); //clear search term after selection
        setFilteredCities(allCityNames); //reset the filtered cities
        setSuggestionsVisible(false); //to hide the suggestion box
        closePopup(); //close the popup
    };

    // handle search input change
    const handleSearchChange= (e) => {
        const newSearchTerm = e.target.value; //to get the new search term
        setSearchTerm(newSearchTerm); //update the search term state

        //filter cities based on search term
        if(newSearchTerm) {
            const filtered = allCityNames.filter(city => 
                city.toLowerCase().includes(newSearchTerm.toLowerCase())
            );
            setFilteredCities(filtered); //update the filtered cities list
            setSuggestionsVisible(true); //show the suggestion box
        } else {
            setFilteredCities(allCityNames); //reset to all cities if search is cleared
            setSuggestionsVisible(false); // hide the suggestion box
        }
    }



    return(
        <>
            <div className='regionSelection-container'>
                <div className='suggestions-container'>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'  className='search-icon'/>
                    <input 
                    type="text"
                    placeholder="Search for your city "
                    value={searchTerm}
                    onChange={handleSearchChange} 
                />
                {isSuggestionsVisible && filteredCities.length > 0 && (
                    <div className='suggestions-box'>
                        {filteredCities.map((city, index) => (
                            <div
                                key={index}
                                className='suggestion-item'
                                onClick={() => handleCityClick(city)}
                            >
                                {city}
                            </div>
                        ))}
                    </div>
                )}
                </div>
                <hr />
                <h2>Popular Cities</h2>
                <div className='popular-cities'>
                    {[
                        { name: 'Bangalore', img: Banaglore },
                        { name: 'Ahmedabad', img: Ahmedabad },
                        { name: 'Mumbai', img: Mumbai },
                        { name: 'Hyderabad', img: Hyderabad },
                        { name: 'Chandigarh', img: Chandigarh },
                        { name: 'Delhi', img: Delhi },
                        { name: 'Chennai', img: Chennai },
                        { name: 'Kolkata', img: Kolkata },
                        { name: 'Pune', img: Pune },
                        { name: 'Kochi', img: Kochi },
                        
                    ].map(city => (
                        <figure key={city.name} onClick={() => handleCityClick(city.name)}>
                            <img src={city.img} alt={city.name} />
                            <figcaption>{city.name}</figcaption>
                        </figure>
                    ))}
                    
                </div>


                


                <div className='all-cities'>
                    <h3 onClick={toggleCityList} style={{ cursor: 'pointer' }}>
                        {showAllCities ? 'Other Cities' : 'View All Cities'}
                    </h3>
                    
                    {showAllCities && (
                        <>

                            <ul className='other-cities-ul'>
                                {filteredCities.map(city => (
                                    <li key={city} className='other-cities-li' onClick={() => handleCityClick(city)}>
                                        <div className='other-cities'>
                                            {city}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <h3 onClick={toggleCityList} style={{ cursor: 'pointer' }}>
                                    Hide All Cities
                            </h3>
                            {/* <ViewAllCities handleCityClick={handleCityClick} />
                            <h3 onClick={toggleCityList}>
                               Hide All Cities
                            </h3> */}
                        
                        </>
                        
                    )}
                    
                    
                             
                </div>






            </div>

        </>
    );
}
export default RegionSelection
