import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faYoutube, faPinterest, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';


function Footer () {



    return(
        <>
            <div className='footer-container'>
                <div className="footer-wrapper">
                    <div className='footer-col'>
                        <div className='footer-heading'>company</div>
                        <ul>
                            <li><a href="https://in.bookmyshow.com/aboutus">about us</a></li>
                            <li><a href="https://in.bookmyshow.com/contactus">contact us</a></li>
                            <li><a href="https://in.bookmyshow.com/privacy">privacy policy</a></li>
                            <li><a href="https://in.bookmyshow.com/terms-and-conditions">terms and conditions</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <div className='footer-heading'>get help</div>
                        <ul>
                            <li><a href="https://support.bookmyshow.com/support/solutions">FAQ</a></li>
                            <li><a href="https://in.bookmyshow.com/static/sitemap/">site map</a></li>
                            <li><a href="https://in.bookmyshow.com/press-release">press release</a></li>
                            <li><a href="https://in.bookmyshow.com/press-coverage">press coverage</a></li>
                            <li><a href="https://in.bookmyshow.com/careers/">current opening</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <div className='footer-heading'>countries</div>
                        <ul>
                            <li><a href="">UAE</a></li>
                            <li><a href="">sri lanka</a></li>
                            <li><a href="">indonesia</a></li>
                            <li><a href="">singapore</a></li>
                            <li><a href="">west indies</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <div className='footer-heading'>BookMyShow exclusives</div>
                        <ul>
                            <li><a href="https://www.bookachange.org/">BookAChange</a></li>
                            <li><a href="https://in.bookmyshow.com/voucher">corporate vouchers</a></li>
                            <li><a href="https://in.bookmyshow.com/giftcards">gift cards</a></li>
                            <li><a href="https://in.bookmyshow.com/list-your-show">list my show</a></li>
                            <li><a href="https://in.bookmyshow.com/offers">offers</a></li>
                            <li><a href="https://in.bookmyshow.com/explore/c/stream">stream</a></li>
                            <li><a href="https://in.bookmyshow.com/explore/upcoming-movie-trailers">trailers</a></li>
                            <li><a href="https://lollaindia.com/">lollapalooza india</a></li>
                        </ul>
                    </div>

                    <div className='footer-col'>
                        <div className='footer-heading'>follow us</div>
                        <div className='social-icons'>
                            <a href="https://www.facebook.com/BookMyShowIN"><FontAwesomeIcon icon={faFacebook} size="xl" style={{color: "#7f7f7f",}} /></a>
                            <a href="https://x.com/BookMyShow/"><FontAwesomeIcon icon={faXTwitter} size="xl" style={{color: "#7f7f7f",}}/></a>
                            <a href="https://www.instagram.com/bookmyshowin/"><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#7f7f7f",}}/></a>
                            <a href="https://www.pinterest.com/bookmyshow/"><FontAwesomeIcon icon={faPinterest} size="xl" style={{color: "#7f7f7f",}}/></a>
                            <a href="https://www.youtube.com/user/BookMyShow/featured"><FontAwesomeIcon icon={faYoutube} size="xl" style={{color: "#7f7f7f",}}/></a>
                            <a href="https://www.linkedin.com/company/bookmyshow/"><FontAwesomeIcon icon={faLinkedin} size="xl" style={{color: "#7f7f7f",}}/></a>
                        </div>
                    </div>
                </div>

                <div className='bms-footer-logo'>
                    <div className='igiRIk'></div>
                    <img alt="bookmyshow" src="//in.bmscdn.com/webin/common/icons/logo.svg"  className='bms-img'/>
                    <div className='igiRIk'></div>
                </div>

                <div className='copyright-description'>
                    <div>copright description &copy; bigtree entertainment pvt. ltd. all rights reserved</div>
                    <div className='gddSFD'>The content and images used on this site are copyright protected and copyright vests with the respective owners.
                    The usage of images and content on this wensite is intended to promote the works and no endorsement of the artist shall be implied. Unauthorized use is prohibited and punishable by law.</div>
                </div>


                
            </div>
        </>
    );

}

export default Footer