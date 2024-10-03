import './food&beverages.css';
import { useLocation, useHistory } from 'react-router-dom';
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
import { MdDeleteOutline } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { useState } from 'react';






function AddFoods ({ selectedTicketType, onTicketSelection }) {

    const location = useLocation();
    const history = useHistory();
    
    const { selectedSeats, totalPrice, seatCount } = location.state || { selectedSeats: [], totalPrice: 0, seatCount: 0 };
    
    // to toggle convenience fee
    const [showFeeDetails, setShowFeeDetails] = useState(false);
    
    const toggleDetails = () => {
        setShowFeeDetails(!showFeeDetails);
    };
    
    
    
    // subtotal
    const convenienceFee = 283.20;
    
    const subTotal = totalPrice + convenienceFee;
    
    // food details
    
    const foodItems = [
        {id: 1,  name: 'medium tub salted popcorn (135g | 421.96 kcal)',  price: 590, info: 'medium tub salted popcorn (135g | 421.96 kcal)',                imgSrc: fig1, category: "popcorn"},
        {id: 2,  name: 'regular coke 540ml',                              price: 420, info: 'regular coke (540ml | 237.60 kcal)',                            imgSrc: fig2, category: "beverages"},
        {id: 3,  name: 'jalapeno nachos with cheese & salsa',             price: 490, info: 'jalapeno nachos with cheese & salsa',                           imgSrc: fig3, category: "snacks"},
        {id: 4,  name: 'maggi on the steriod (200g | 412.22 kcal)',       price: 420, info: 'maggi on the steriod (200g | 412.22 kcal)',                     imgSrc: fig4, category: "snacks"},
        {id: 5,  name: 'medium tub cheese popcorn (165g | 500.14 kcal)',  price: 640, info: 'medium tub cheese popcorn (165g | 500.14 kcal)',                imgSrc: fig1, category: "popcorn"},
        {id: 6,  name: 'club sandwich 240g',                              price: 440, info: 'club sandwich (240g | 564.04 kcal)',                            imgSrc: fig5, category: "snacks"},
        {id: 7,  name: 'mumbai toastie sandwich 200g',                    price: 420, info: 'mumbai toastie sandwich (200g | 576.10 kcal)',                  imgSrc: fig6, category: "snacks"},
        {id: 8,  name: 'cheesy garlic bread (180g | 421.04 kcal)',        price: 380, info: 'cheesy garlic bread (180g | 421.04 kcal)',                      imgSrc: fig7, category: "snacks"},
        {id: 9,  name: 'medium tub caramel popcorn (270g | 904.27 kcal)', price: 640, info: 'medium tub caramel popcorn (270g | 904.27 kcal)',               imgSrc: fig1, category: "popcorn"},
        {id: 10, name: 'regular tub salted popcorn (90g | 281.31 kcal)',  price: 490, info: 'regular tub salted popcorn (90g | 281.31 kcal)',                imgSrc: fig1, category: "popcorn"},
        {id: 11, name: 'regular tub cheese popcorn (110g | 333.43 kcal)', price: 540, info: 'regular tub cheese popcorn (110g | 333.43 kcal)',               imgSrc: fig1, category: "popcorn"},
        {id: 12, name: 'medium coke 810ml',                               price: 450, info: 'medium coke (810ml | 297.00 kcal)',                             imgSrc: fig2, category: "beverages"},
        {id: 13, name: 'regular tub caramel popcorn (180g | 602.85 kcal)',price: 540, info: 'regular tub caramel popcorn (180g | 602.85 kcal)',              imgSrc: fig1, category: "popcorn"},
        {id: 14, name: 'retro aloo tikki burger 250g',                    price: 440, info: 'retro aloo tikki burger (250g | 699.77 kcal)',                  imgSrc: fig8, category: "snacks"},
        {id: 15, name: 'twice baked khichdi (300g | 542.86 kcal)',        price: 470, info: 'twice baked khichdi (300g | 542.86 kcal)',                      imgSrc: fig9, category: "snacks"},
        {id: 16, name: 'macaroni - italian tomato & fresh basil 250g',    price: 490, info: 'macaroni - italian tomato & fresh basil (250g | 311.99 kcal)',  imgSrc: fig10, category: "snacks"},
        {id: 17, name: 'mac & cheese 200g',                               price: 540, info: 'mac & cheese (200g | 513.16 kcal)',                             imgSrc: fig11, category: "snacks"},
        {id: 18, name: 'large coke 810ml',                                price: 600, info: 'large coke (810ml | 356.40 kcal)',                              imgSrc: fig2, category: "beverages"},
        {id: 19, name: 'large tub salted popcorn (240g | 750.15 kcal)',   price: 820, info: 'large tub salted popcorn (240g | 750.15 kcal)',                 imgSrc: fig1, category: "popcorn"} 
    ];
    
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFoods, setSelectedFoods] = useState([]); //to store selected food item
    
    
    // FOOD FUNCTIONALITY
    
    // food addition
    const handleAddFood = (food) => {
        setSelectedFoods((prevSelectedFoods) => {
            const existingFood = prevSelectedFoods.find((item) => item.id === food.id);
            if (existingFood) {
                return prevSelectedFoods.map((item) =>
            item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            return [...prevSelectedFoods, { ...food, quantity: 1 }];
        }
        });
    };
    
    
    const handleRemoveFood = (food) => {
        setSelectedFoods((prevSelectedFoods) => {
            return prevSelectedFoods.map((item) =>
                item.id === food.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0);
        });
    };

    const filteredFoods = selectedCategory === 'all' ? foodItems : foodItems.filter((food) => food.category === selectedCategory);


    // New state for toggle food options
    const [showFoodDetails, setShowFoodDetails] = useState(true); // New state for toggle

    const toggleFoods = () => {
        setShowFoodDetails(!showFoodDetails);
    }

    // Function to delete all items
    const deleteAllItems = () => {
        setSelectedFoods([]);       // Clear the selected foods
        setShowFoodDetails(false);  // Hide food details after deletion
    };

    // Function to calculate the total price
    const calculateTotalPrice = () => {
        return selectedFoods.reduce((total, food) => total + (food.price * food.quantity), 0);
    };

    // function to delete a single item
    const deleteSingleItem = (foodId) => {
        const updatedFoods = selectedFoods.filter((food) => food.id !== foodId);    // Filter the selectedFoods array to exclude the item with the specified ID
        setSelectedFoods(updatedFoods);                                             // Update the state with the new array
    };
    
    // CONTRIBUTE MONEY
    
    const [isMoneyAdded, setIsMoneyAdded] = useState(false);
    const [totalMoney, setTotalMoney] = useState(0);
    
    const handleClick = () => {
        if(isMoneyAdded) {
            setTotalMoney(totalMoney - seatCount);
            setIsMoneyAdded(false);
        }
        else{
            setTotalMoney(totalMoney + seatCount);
            setIsMoneyAdded(true);
        }
    }
    
    
    
    // AMOUNT PAYABLE
    
    const amountPayable = subTotal + calculateTotalPrice() + totalMoney ;
    
    // STATE PASSAGE
    const { movie } = location.state || {};     //passing movie object to payment component
    
    const handlePaymentPage = () => {
        history.push({
            pathname: '/payment',
            state: {
                movieName: movie.movieName,
                genre: movie.genre,
                selectedSeats: selectedSeats,
                totalPrice: totalPrice,
                seatCount : seatCount,
                subTotal: subTotal,
                amountPayable: amountPayable,
                selectedFoods: selectedFoods
            }
        });
    }

    

    
    
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
                                <button 
                                    className={`filter-options ${selectedCategory === 'all' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('all')}>
                                    all
                                </button>
                                <button 
                                    className={`filter-options ${selectedCategory === 'popcorn' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('popcorn')}>
                                    popcorn
                                </button>
                                <button 
                                    className={`filter-options ${selectedCategory === 'beverages' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('beverages')}>
                                    beverages
                                </button>
                                <button 
                                    className={`filter-options ${selectedCategory === 'snacks' ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory('snacks')}>
                                    snacks
                                </button>
                            </div>
                        </div>
{/* FOOD OPTIONS */}
                        <div className='food-options-container'>
                            {filteredFoods.map((food) => (
                                <div key={food.id} className='food-options'>
                                    <div className='BVFsg'>
                                       <img src={food.imgSrc} alt="" className='food-image' />
                                    </div>

                                    <div className='hGShg'>
                                        <div className='GFSGh'>
                                            <div className='card-title'>{food.name}</div>
                                            <div className='card-info'>{food.info}</div>
                                        </div>
                                        <div className='gbSga'>
                                            <div className='food-price'>₹{food.price}</div>

                                            {selectedFoods.find((item) => item.id === food.id) ? (
                                            <div className='NUDgy'>
                                                <button onClick={() => handleRemoveFood(food)} className='math-symbols'>-</button>
                                                <span>{selectedFoods.find((item) => item.id === food.id).quantity}</span>
                                                <button onClick={() => handleAddFood(food)} className='math-symbols'>+</button>
                                            </div>
                                            ) : (
                                            <button className='add-button' onClick={() => handleAddFood(food)}>add</button>
                                            )}

                                        </div>
                                    </div>
                                </div>
                            ))}
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
                <div className='ticket-payment-details'>
                    <div class="ticket-display">
                        <div className='jgjS'>
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

                                <div className='hahz'>
                                    <div className='GErgd'>sub total</div>
                                    <div className='GErgd'>Rs.{subTotal.toFixed(2)}</div>
                                </div>

                                <div className='Whdq'>
                                    {selectedFoods.length > 0 && (
                                        <>
                                            <div className='HGaha'>
                                                <div className='Uhdwq'>
                                                    <div onClick={toggleFoods} className='fhVSw'>
                                                        {showFoodDetails ?  <IoIosArrowDropup /> : <IoIosArrowDropdown />}
                                                    </div>
                                                    <div className='Qyugbw'>food and beverage</div>
                                                    <div onClick={deleteAllItems} className='fhVSw'><MdDeleteOutline /></div>
                                                </div>
                                                <div className='total-food-price'>₹{calculateTotalPrice()}</div>
                                            </div>

                                            {showFoodDetails && (
                                                <div className='fVHs'>
                                                    {selectedFoods.map((food) => (
                                                        <div className='gbGW'>
                                                            <div  className='vfYVs'>
                                                                <div key={food.id} className='bgYS'>
                                                                    <TiDeleteOutline onClick={() => deleteSingleItem(food.id)} className='x-icon'/> 
                                                                </div>
                                                                <div className='vrTAh'>
                                                                    {food.name} (Qty. {food.quantity})   
                                                                </div>
                                                            </div>
                                                            <div className='vrTAh'>
                                                                ₹{food.price * food.quantity}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
    {/* CONTRIBUTION */}
                            <div className='book-a-change'>
                                <div className='heading'>
                                    <div>Contribute to BookAChange</div>
                                    <div >Rs. {totalMoney}</div>
                                </div>

                                <div className='hGFS' onClick={handleClick}>
                                    <div className='GVSq'>(₹1 rupee per ticket has been added)</div>
                                    {isMoneyAdded ? 'remove' : `add rs. ${seatCount}`}
                                </div>

                                <div className='tooltip'>
                                    VIEW T&C
                                    <div className='tooltip-text'>
                                        <div className='GSam'>
                                            <div className='bookachange'>
                                                <span className='book'>book</span>
                                                <span className='a'>a</span>
                                                <span className='change'>change</span>
                                            </div>
                                            <div className='hgJHGq'>BookMyShow's charity initiative BookAChange was created with a vision to enrich the lives of the less fortunate
                                                through activities and experiences from across genres like Cinema, Sport, Theatre, Music & Arts.
                                            </div>
                                        </div>

                                        <div className='disclaimer'>disclaimer</div>

                                        <div className='points'>
                                            <div className='point'>
                                                1. Big Tree Entertainment Pvt Ltd (BEPL) is faciliating the transactions on the platform <strong>https://www.bookachange.org</strong>. The proceeds of the same will
                                                be used for social initiatives for the underprivileged sections of society.
                                            </div>
                                            <div className='point'>
                                                2. Apart from this, BEPL is not engaged is any partnership, association or tie-up with the NGOs.
                                            </div>
                                            <div className='point'>
                                                3.BEPL expressly disclaims any and all liability and assumes no responsibility whatsoever for consequences resulting from any actions or inactions of the NGO.
                                            </div>
                                            <div className='point'>
                                                4. By procceding to donate the money, you do so at your own risk and expressly waive any and all claims, rights of actions and/or remedies (under law otherwise) 
                                                that you may have against BEPL arising out of or in connection with the aforesaid transaction.
                                            </div>
                                            <div className='point'>
                                                5. BEPL will not be held responsible for the issuance of 80G certificate.
                                            </div>
                                            <div className='point'>
                                                6.The amount contributed towards BookAChange is purely a voluntary act of kindness to contribute to the smiles of the less fortunate. In case you have made the contribution to BookAChange by mistake,
                                                please reach out to us at  <strong>email</strong> for a refund of the same. The refund shall be made into the same bank account/wallet/payment channel through which the contribution was made by you.
                                            </div>
                                            <div className='point'>
                                                7. For any queries,kindly  <strong>email us</strong>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="final-price">
                            <div>Amount Payable</div>
                            <div>Rs. {amountPayable.toFixed(2)}</div>
                        </div>
                    </div>

                    <div className='ticket-payment'>
                        
                        <div className='ticket-selection'>
                            <div className='qnjhW'>select ticket type</div>
                            <div className='ticketOptions'>
                                <div className='ticketOption'>
                                    <input 
                                       type="radio" 
                                       name='ticket-type' 
                                       className='radio'
                                       value='m-ticket'
                                       checked={selectedTicketType === 'm-ticket'} // Check if this option is selected
                                       onChange={() => onTicketSelection('m-ticket')} // Update the state in Parent Component
                                    />
                                    <div className='ticket-name'>m-ticket</div>
                                </div>
                                <div className='ticketOption'>
                                    <input 
                                        type="radio" 
                                        name='ticket-type' 
                                        className='radio'
                                        value='box-office'
                                        checked={selectedTicketType === 'box-office'}
                                        onChange={() => onTicketSelection('box-office')}
                                    />
                                    <div className='ticket-name'>box-office</div>
                                </div>
                            </div>
                            <div className='ticket-text'>Show the m-ticket QR Code on your mobile to enter the cinema. </div>
                        </div>

                        <div className='payment-box'>
                            <div className='payment-text'>By proceeding, I express my consent to complete this transaction</div>
                            <div className='payment' onClick={handlePaymentPage}>
                                <div className='hgqJ'>TOTAL:Rs. {amountPayable.toFixed(2)}</div>
                                <div className='hgqJ'>proceed</div>
                            </div>
                        </div>

                        <div className='cancelation-policy'>
                            You can cancel the tickets 20 min(s) before the show. Refunds will be done according to Cancellation Policy.
                        </div>

                    </div>


                </div>


            </div>
        </>
    );
}
export default AddFoods;