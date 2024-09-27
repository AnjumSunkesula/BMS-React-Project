import './food&beverages.css';
import { useLocation } from 'react-router-dom';
import banner from '../../assets/foods/banner.avif';
import fig1 from '../../assets/foods/popcorn.avif';
import fig2 from '../../assets/foods/coke.avif';
import fig3 from '../../assets/foods/nachos.avif';
import fig4 from '../../assets/foods/maggi.avif';
import fig5 from '../../assets/foods/sandwich.avif';
import fig6 from '../../assets/foods/toast sandwich.avif';
import fig7 from '../../assets/foods/garlic bread.avif';
import fig8 from '../../assets/foods/aalo burger.avif';
import fig9 from '../../assets/foods/kichdi.avif';
import fig10 from '../../assets/foods/mac.avif';
import fig11 from '../../assets/foods/mac & cheese.avif'; 
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState } from 'react';






function AddFoods () {

    const location = useLocation();

    const { selectedSeats, totalPrice, seatCount } = location.state || { selectedSeats: [], totalPrice: 0, seatCount: 0 };

    // convenience fee
    const [showFeeDetails, setShowFeeDetails] = useState(false);

    const toggleDetails = () => {
        setShowFeeDetails(!showFeeDetails);
    };

    // subtotal
    const convenienceFee = 283.20;

    const subTotal = totalPrice + convenienceFee;







    return(
        <>
            <div className='addfoods-container'>
                <div className='food-container'>
                    <div className='banner-div'>
                       <img src={banner} alt="" className='banner-img'/>
                    </div>

                    <div className='GbWHQ'>
                        <div className='FVGF'>
                            <div className='Fhts'>Grab a <span>bite!</span></div>
                            <div className='gBSg'>Prebook Your Meal and Save More!</div>
                            <div className='food-filter'>
                                <button className='filter-options'>all</button>
                                <button className='filter-options'>popcorn</button>
                                <button className='filter-options'>beverages</button>
                                <button className='filter-options'>snacks</button>
                            </div>
                        </div>
{/* FOOD OPTIONS */}
                        <div className='food-options-container'>
                            {/* 1 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>medium tub salted popcorn (135g | 421.96 kcal)</div>
                                        <div className='card-info'>medium tub salted popcorn (135g | 421.96 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹590</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 2 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig2} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>regular coke 540ml</div>
                                        <div className='card-info'>regular coke (540ml | 237.60 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹420</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 3 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig3} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>jalapeno nachos with cheese & salsa</div>
                                        <div className='card-info'>jalapeno nachos with cheese & salsa</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹490</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 4 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig4} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>maggi on the steriod (200g | 412.22 kcal)</div>
                                        <div className='card-info'>maggi on the steriod (200g | 412.22 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹420</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 5 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>medium tub cheese popcorn (165g | 500.14 kcal)</div>
                                        <div className='card-info'>medium tub cheese popcorn (165g | 500.14 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹640</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 6 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig5} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>club sandwich 240g</div>
                                        <div className='card-info'>club sandwich (240g | 564.04 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹440</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 7 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig6} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>mumbai toastie sandwich 200g</div>
                                        <div className='card-info'>mumbai toastie sandwich (200g | 576.10 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹420</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 8 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig7} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>cheesy garlic bread (180g | 421.04 kcal)</div>
                                        <div className='card-info'>cheesy garlic bread (180g | 421.04 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹380</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 9 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>medium tub caramel popcorn (270g | 904.27 kcal)</div>
                                        <div className='card-info'>medium tub caramel popcorn (270g | 904.27 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹640</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 10 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>regular tub salted popcorn (90g | 281.31 kcal)</div>
                                        <div className='card-info'>regular tub salted popcorn (90g | 281.31 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹490</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 11 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>regular tub cheese popcorn (110g | 333.43 kcal)</div>
                                        <div className='card-info'>regular tub cheese popcorn (110g | 333.43 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹540</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 12 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig2} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>medium coke 810 ml</div>
                                        <div className='card-info'>medium coke (810 ml | 297.00 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹450</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 13 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>regular tub caramel popcorn (180g | 602.85 kcal)</div>
                                        <div className='card-info'>regular tub caramel popcorn (180g | 602.85 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹540</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 14 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig8} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>retro aloo tikki burger 250g</div>
                                        <div className='card-info'>retro aloo tikki burger (250g | 699.77 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹440</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 15 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig9} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>twice baked khichdi (300g | 542.86 kcal)</div>
                                        <div className='card-info'>twice baked khichdi (300g | 542.86 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹470</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 16 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig10} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>macaroni - italian tomato & fresh basil 250g</div>
                                        <div className='card-info'>macaroni - italian tomato & fresh basil (250g | 311.99 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹490</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 17 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig11} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>mac & cheese 200g</div>
                                        <div className='card-info'>mac & cheese (200g | 513.16 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹450</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 18 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig2} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>large coke 810ml</div>
                                        <div className='card-info'>large coke (810ml | 356.40 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹600</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>
                            {/* 19 */}
                            <div className='food-options'>
                                <div className='BVFsg'>
                                    <img src={fig1} alt="" className='food-image' />
                                </div>

                                <div className='hGShg'>
                                    <div className='GFSGh'>
                                        <div className='card-title'>large tub salted popcorn (240g | 750.15 kcal)</div>
                                        <div className='card-info'>large tub salted popcorn (240g | 750.15 kcal)</div>
                                    </div>
                                    <div className='gbSga'>
                                        <div className='food-price'>₹820</div>
                                        <button className='add-button'>add</button>
                                    </div>
                                </div> 
                            </div>

                        </div>
{/* NOTE */}
                        <div className='note-inox'>
                            <div className='note'>
                                <div>Note:</div>
                                <div className='gHDs'>
                                    1. Images are for representation purposes only.
                                    <br />
                                    2. Prices inclusive of all taxes.
                                    <br />
                                    3. All nutritional information is indicative, values are per serve as shared by the Cinema and may vary depending on the ingredients and portion size.
                                    <br />
                                    4. An average active adult requires 2000 kcal energy per day, however, calorie needs may vary.
                                </div>
                            </div>

                            <div className='inox'>
                                <div>Inox T&C:</div>
                                <div className='gHDs'>
                                    1. Children above the age of 3 will need a separate ticket ,children will not be allowed in Adult movie.
                                    <br />
                                    2. Please carry a valid age proof for A rated movies -18 years and over only would be given entry.
                                    <br />
                                    3. Tickets are not refundable or transferable.
                                    <br />
                                    4. Outside food and beverages are not allowed ,Right of admission is reserved.
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
{/* TICKET DISPLAY */}
                <div class="ticket-display">
                    <div className='ticket-title'>booking summary</div>

                    <div className='booking-summary'>

                        <div className='Gnjgs'>
                            <div className='hvWJ'>
                                {selectedSeats.join(', ')} ({seatCount} tickets)  
                            </div>
                            {/* toFixed: to add cents value number */}
                            <div className='gGwJH'>rs. {totalPrice.toFixed(2)}</div>   
                        </div>

                        <div className='gsJA'>
                            <div className='hahkz' >
                                <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                                    <span className='drop-icon' onClick={toggleDetails}>
                                        {showFeeDetails ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}    
                                    </span>
                                    Convenience Fees
                                </div>
                                <div>rs.283.20</div>
                            </div>
                            {showFeeDetails && (
                                <div className='nsbjh'>
                                    <div className='HSWj'>
                                        <div className='GUqwy'>Base Amount: </div>
                                        <div className='GUqwy'>Rs.240.00</div>
                                    </div>
                                    <div className='HSWj'>
                                        <div className='GUqwy'>Central GST (CGST) @ 9%: </div>
                                        <div className='GUqwy'>Rs.21.60</div>
                                    </div>
                                    <div className='HSWj'>
                                        <div className='GUqwy'>State GST (SGST) @ 9%: </div>
                                        <div className='GUqwy'>Rs.21.60</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='hahkz'>
                            <div className='GErgd'>sub total</div>
                            <div className='GErgd'>Rs.{subTotal.toFixed(2)}</div>
                        </div>

                    </div>

                    <div>
                        contribute to book a change
                    </div>

                    <div class="total-amount">
                        <p>Amount Payable</p>
                        <p>addition of everything</p>
                    </div>
                </div>


            </div>
        </>
    );
}
export default AddFoods;