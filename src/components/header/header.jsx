import React, {useState, useEffect} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './header.css'
import RegionSelection from '../citySelection/regionselection'
import HeaderLogo from '../../assets/header/header-logo.png'
import userLogo from '../../assets/header/userlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FaRegUser } from "react-icons/fa6";
import { IoMailOutline, IoGiftOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { BiPurchaseTag } from "react-icons/bi";
import { MdLiveTv } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { LiaBirthdayCakeSolid } from "react-icons/lia";


function Header({ selectedCity, setSelectedCity, setSearchTerm, searchTerm }) {

    const [isPopupOpen, setPopupOpen] = useState(false);

    const closePopup = () => setPopupOpen(false);

    const handleCitySelection = (city) => {
        setSelectedCity(city);
        closePopup(); //no need to directly set localStorage here. it's handled in app.js through useEffect
    };

    // serach term

    const [inputValue, setInputValue] = useState('');

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        setSearchTerm(e.target.value); // Pass the input value to the parent
    };

    // user popup

    const [isUserDetailsVisible, setUserDetailsVisible] = useState(false);

    const handleUserClick = () => {
        setUserDetailsVisible(true);
    }

    // EMAIL ACCESS

	const [formData, setFormData] = useState({});

    // Retrieve form data from local storage
    useEffect(() => {
        const savedFormData = JSON.parse(localStorage.getItem('formData'));
        if (savedFormData) {
            setFormData(savedFormData); 
        }
    }, []);

    

    return(
        <>
            <div className='header-container'>
                <header className="header1">
                    <div className="header-left">
                        <img src={HeaderLogo} className='header-logo' alt="" />
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='lg'  className='search-logo'/>
                        <input 
                            type="text" 
                            placeholder= " Search for Movies here...." 
                            value={inputValue}
                            onChange={handleSearchChange}
                        />
                    </div>
                    
                    <div className='header-right'>
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
                                </button>}
                                contentStyle={{ padding: '0'}}
                            >
                            {close => (
                                <RegionSelection 
                                setSelectedCity={handleCitySelection}
                                closePopup={close}/> 

                            )}
                        </Popup>


                        {!isUserDetailsVisible && (
                            <>
                                <img src={userLogo} className='user-logo' alt="" onClick={handleUserClick}/>
                                <span className='user-profile' onClick={handleUserClick}>Hi,User..</span>
                            </>
                        )}


                        {isUserDetailsVisible && (
                        <div className={`user-popup ${isUserDetailsVisible ? 'open' : ''}`}>
                            <div className="user-popup-content">
                                <div className='user-heading'>
                                   <div className='user-details'>User Details</div>
                                   <div className="close-btn" onClick={() => setUserDetailsVisible(false)}>X</div>
                                </div>
                                <div className='user-details-wrapper'>
                                    <div className='details'><FaRegUser />{formData.firstName} {formData.lastName}</div>
                                    <div className='details'><IoMailOutline />{formData.email}</div>
                                    <div className='details'><LiaBirthdayCakeSolid />{formData.dateOfBirth}</div>
                                    <div className='details'><FaRegBell />Notifications</div>
                                    <div className='details'><BiPurchaseTag />Your Orders</div>
                                    <div className='details'><MdLiveTv />Stream Library</div>
                                    <div className='details'><AiOutlineMessage />Help & Support</div>
                                    <div className='details'><IoSettingsOutline />Account & Settings</div>
                                    <div className='details'><IoGiftOutline />Rewards</div>


                                </div>
                                <div className='logout-wrapper'>
                                    <div className='logout'>logout</div>
                                </div>
                            </div>
                        </div>
                    )}



                    </div>
                </header>
                <header className="header2">
                    <div className='navbar'>
                            <a href="" className='movies-margin'>Movies</a>
                            <a href="https://in.bookmyshow.com/explore/c/stream">Stream</a>
                            <a href="https://in.bookmyshow.com/explore/events-mumbai">Events</a>
                            <a href="https://in.bookmyshow.com/explore/plays-hyderabad">Plays</a>
                            <a href="https://in.bookmyshow.com/explore/sports-hyderabad">Sports</a>
                            <a href="https://in.bookmyshow.com/explore/activities-hyderabad">Activities</a>
                        <nav className="nav-right">
                            <a href="https://in.bookmyshow.com/list-your-show/">Listyourshow</a>
                            <a href="https://in.bookmyshow.com/voucher">Corporates</a>
                            <a href="https://in.bookmyshow.com/offers">Offers</a>
                            <a href="https://in.bookmyshow.com/giftcards" className='giftcards-margin'>Gift Cards</a>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
    
}
export default Header