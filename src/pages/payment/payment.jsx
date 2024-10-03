import './payment.css';
import img1 from '../../assets/loginpage-images/main-logo.png';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState, useEffect } from 'react';



// Helper function to format the date
const formatDate = (date) => {
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  // Reformat to "Thu, 3 Oct, 2024" (manually rearranging)
  const [weekday, day, month, year] = formattedDate.split(' ');
  return `${weekday} ${day} ${month} ${year}`;
};




function Payment ({ selectedTicketType, movieData }) {

	const location = useLocation();

	const { selectedSeats, totalPrice, seatCount, amountPayable, selectedFoods } = location.state || { selectedSeats: [], totalPrice: totalPrice, seatCount: seatCount, amountPayable: 0, selectedFoods: [] };

	// to toggle convenience fee
    const [showFeeDetails, setShowFeeDetails] = useState(false);

    const toggleDetails = () => {
        setShowFeeDetails(!showFeeDetails);
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

    // FOODD TOGGLE
	const [showFoodDetails, setShowFoodDetails] = useState(true); // New state for toggle

    const toggleFoods = () => {
        setShowFoodDetails(!showFoodDetails);
    }

	// DATE AND DAY DISPLAY

    const [currentDate, setCurrentDate] = useState('');

	useEffect(() => {
		// Get and format the current date
		const today = new Date();
		setCurrentDate(formatDate(today)); // Set the formatted date
	}, []);


    const { movieName, genre } = location.state || {};


	return(
		<>
			<div className='payment-header'>
				<img src={img1} alt="" className='bms-logo'/>
			</div>

			<div className='bSaga'>
				<div>payment options</div>

				<div className='ticket-container'>
					<div className='vSHTa'>
						<div className='hgVAs'>
							<div className='hFAh'>
								<div className='summary'>order summary</div>
								<div className='hfvs'>
								    <div className='name'>{movieName}</div>
									<div className='certified'>{movieData?.certification}</div>
								</div>
								<div className='category'>{genre}</div>
							</div>
							<div className='no-of-tickets'>
								<div className='number'>{seatCount}</div>
								<div className='tickets'>tickets</div>
							</div>
					    </div>

						<div className='ticket-type'>
							{selectedTicketType ? selectedTicketType : '(selected ticket type)'}
						</div>

						<div>
							<div>{selectedSeats.join(', ')}</div>
							<div className='ticket-date'>
								{currentDate ? `${currentDate}` : '(selected date)'}
							</div>
						</div>

						<div>
							<div>subtotal</div>
							<div>{totalPrice.toFixed(2)}</div>
						</div>

						<div className='Whdq'>
							{selectedFoods.length > 0 && (
								<div className='HGaha'>
									<div className='Uhdw' onClick={toggleFoods} style={{ cursor: 'pointer' }}>
									+Add-ons 
									<span style={{ color: showFoodDetails ? '#dc3558' : '#dc3558' }}>
										{showFoodDetails ? 'Hide All' : 'View All'}
										</span> 
									</div>
									<div className='total-food-price'>₹{selectedFoods.reduce((total, food) => total + (food.price * food.quantity), 0)}</div>
								</div>
							)}


							{showFoodDetails && (
								<div className='fVHs'>
									{selectedFoods.map((food) => (
										<div className='gbGW' key={food.id}>
											<div className='vrTAh'>
												{food.name} (Qty. {food.quantity})   
											</div>
											<div className='vrTAh'>₹{food.price * food.quantity}</div>
										</div>
									))}
								</div>
							)}
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

						<div className='book-a-change'>
							<div className='heading'>
								<div>Donate to BookAChange</div>
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

					<div className='final-price'>
						<div>Amount Payable</div>
						<div>Rs. {amountPayable}</div>
					</div>


				</div>
			</div>
				
		</>
	);

};
export default Payment;

// const [paymentStatus, setPaymentStatus] = useState(null);              // null means no payment status yet

//   // Simulate a payment by randomly determining if it's successful

//     const handlePayment = () => {
//         const isSuccess = Math.random() > 0.5;                               // 50% chance of success or failure
//         setPaymentStatus(isSuccess ? 'success' : 'failure');
//     };

// <div>
//       {paymentStatus === null && (
//         <div>
//           <h2>Proceed with your payment</h2>
//           <button onClick={handlePayment}>Pay Now</button>
//         </div>
//       )}

//       {paymentStatus === 'success' && (
//         <div>
//           <h2>Payment Successful!</h2>
//           <p>Your booking is confirmed. You can now view your booking details.</p>
//           <button onClick={() => window.location.href = '/home'}>Go to Home</button>
//           <button onClick={() => window.location.href = '/booking-details'}>View Booking Details</button>
//         </div>
//       )}

//       {paymentStatus === 'failure' && (
//         <div>
//           <h2>Payment Failed!</h2>
//           <p>Something went wrong. Please try again.</p>
//           <button onClick={() => window.location.href = '/home'}>Go to Home</button>
//           <button onClick={handlePayment}>Retry Payment</button>
//         </div>
//       )}
//     </div>
