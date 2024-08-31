import React, {useState} from 'react'
// import { Popup } from 'reactjs-popup/dist/reactjs-popup.cjs.production.min'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './header.css'
import RegionSelection from '../citySelection/regionselection'
import HeaderLogo from '../../assets/header/header-logo.png'
import userLogo from '../../assets/header/userlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function Header() {

    const [selectedCity, setSelectedCity] = useState('Select City');
    const [isPopupOpen, setPopupOpen] = useState(false);

    const closePopup = () => setPopupOpen(false);

    const handleCitySelection = (city) => {
        setSelectedCity(city);
        closePopup();
    };

    return(
        <>
        <div className='header-container'>
            <header className="header1">
            <div className="header-left">
                <img src={HeaderLogo} className='header-logo' alt="" />
                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'  className='search-logo'/>
                <input type="text" 
                placeholder= " Search for Movies,Plays,Activities,Events and Sports" 
                />
            </div>
            <div className="header-right">
                <span>{selectedCity}</span>
                <Popup 
                open={isPopupOpen}
                onClose={closePopup}
                modal
                nested
                trigger = 
                    {<button  className='arrow-button'>
                        <span className="material-symbols-outlined">
                            keyboard_arrow_down
                        </span>
                    </button>}>
                    {close => (
                        <RegionSelection 
                        setSelectedCity={handleCitySelection}
                        closePopup={close}/> 

                    )}

                    {/* { close => ( 
                        <>

                        <RegionSelection setSelectedCity={setSelectedCity}/> 
                         selected cities are passed from the child component via the setSelectedCity prop
                         <div>
                            <button onClick={() => close()}> 
                                Go Back
                            </button>
                        </div> 
                        </>
                    )
                    } */}
                </Popup>
                


                
                
                

                <img src={userLogo} className='user-logo' alt="" />
                <span className='user-profile'>Hi,User..</span>
            </div>
        </header>
        <header className="header2">
            <div className='navbar'>
                    <a href="" className='movies-margin'>Movies</a>
                    <a href="">Stream</a>
                    <a href="">Events</a>
                    <a href="">Plays</a>
                    <a href="">Sports</a>
                    <a href="">Activities</a>
                    <a href="">Fanhood</a>
                    <a href="">Buzz</a>
                <nav className="nav-right">
                    <a href="">Listyourshow</a>
                    <a href="">Corporates</a>
                    <a href="">Offers</a>
                    <a href="" className='giftcards-margin'>Gift Cards</a>
                </nav>
            </div>
        </header>
        </div>
        
        
        
        
        
        
        
        </>
    );
    
}
export default Header