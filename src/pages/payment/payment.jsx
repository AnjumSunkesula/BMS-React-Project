import './payment.css';
import img1 from '../../assets/loginpage-images/main-logo.png';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState, useEffect } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";
import gpay from '../../assets/payment/gpay.avif';
import phonepe from '../../assets/payment/phonepe.avif';
import cred from '../../assets/payment/cred.avif';
import upi from '../../assets/payment/UPI.avif';
import bhim from '../../assets/payment/bhim.avif';
import amazonpay from '../../assets/payment/Amazonpay.avif';
import paytm from '../../assets/payment/paytm.avif'

// Helper function to format the date
const formatDate = (date) => {
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	const formattedDate = date.toLocaleDateString(undefined, options);

	// Reformat to "Thu, 3 Oct, 2024" (manually rearranging)
	const [weekday, day, month, year] = formattedDate.split(' ');
	return `${weekday} ${day} ${month} ${year}`;
};




function Payment ({ selectedTicketType }) {

	const location = useLocation();
	
	const { movieName, genre } = location.state || {};
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
	const finalAmount = amountPayable + totalMoney;

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

	// EMAIL ACCESS

	const [formData, setFormData] = useState({});

    useEffect(() => {
        // Retrieve form data from local storage
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            setFormData(JSON.parse(storedData)); // Parse and set form data
        }
    }, []);

	// PHONE NUMBER

	const [phoneNumber, setPhoneNumber] = useState('+91');

	const handleInput = (e) => {
		const value = e.target.value;

		if(value.startsWith('+91')) {
			const inputValue = value.replace(/[^\d+]/g, '');
			setPhoneNumber(inputValue);
		}
	};

	// PAYMENT OPTIONS

	const [selectedTab, setSelectedTab] = useState('UPI');  // state to store the selected tab
	const [showOptions, setShowOptions] = useState(true);  //state to track the visibility of options
	const [selectedOption, setSelectedOption] = useState(''); //state for selected option
	const [upiId, setUpiId] = useState(''); // State for UPI ID
    const [bankDetails, setBankDetails] = useState(''); // State for Bank Details
	const [phoneError, setPhoneError] = useState('');
	const [upiError, setUpiError] = useState('');
    const [bankError, setBankError] = useState('');

	// Options for each payment method
    const paymentOptions = {
        UPI: [
			{name: 'Cred UPI',         img: cred},
			{name: 'GooglePay',        img: gpay },
			{name: 'AmazonPay',        img: amazonpay },
			{name: 'BHIM',             img: bhim },
			{name: 'Paytm',            img: paytm },
			{name: 'PhonePe',          img: phonepe },
			{name: 'Other UPI',        img: upi }

		],
        card: ['Visa', 'MasterCard', 'American Express'],
        netBanking: ['State Bank of India', 'HDFC Bank', 'ICICI Bank'],
        wallets: ['Paytm Wallet', 'Mobikwik', 'Freecharge']
    };

	// Function to handle tab click
    const handleTabClick = (tab) => {
        if (selectedTab === tab) {    // If the selected tab is already active, toggle visibility
            setShowOptions(!showOptions);
        } else {
            setSelectedTab(tab);
			setSelectedOption(''); //reset selected option when vhanging tabs
            setShowOptions(true); // Show options for the newly selected tab
        }
    };

	// Function to handle radio button selection
    const handleOptionChange = (option) => {
        setSelectedOption(option);
		setShowOptions(false); // Hide options once an option is selected
    };

	// Function to handle back arrow click
    const handleBackClick = () => {
        setShowOptions(true); // Show the options again
        setSelectedOption(''); // Reset the selected option
		// setError(''); // Clear error when going back
        setUpiId(''); // Reset UPI ID
        setBankDetails(''); // Reset Bank Details
		set
    };

	// error messgaes for upi and bank details
	const handleMakePayment = () => {
       let hasError = false; // Track if there are any errors

		// Reset error messages
		setUpiError('');
		setBankError('');
		setPhoneError('');

		// Check if UPI ID is filled
		if (!upiId) {
			setUpiError('Please fill in the UPI ID.');
			hasError = true;
		}

		// Check if Bank Details are filled
		if (!bankDetails) {
			setBankError('Please fill in the bank details.');
			hasError = true;
		}

		// Check if Bank Details are filled
		if (!phoneNumber || phoneNumber === '+91') {
			setPhoneError('Please enter a valid Mobile Number.');
			hasError = true;
		}

		// If there are any errors, exit
		if (hasError) {
			return; // Exit if validation fails
		}


		// If validation passes, proceed with payment
		handlePayment();
    };

	// PAYMENT PROCESS

	const [paymentStatus, setPaymentStatus] = useState(null);              // null means no payment status yet

  // Simulate a payment by randomly determining if it's successful

    const handlePayment = () => {
        const isSuccess = Math.random() > 0.5;                               // 50% chance of success or failure
        setPaymentStatus(isSuccess ? 'success' : 'failure');
    };







	return(
		<>
			<div className='payment-header'>
				<img src={img1} alt="" className='bms-logo'/>
			</div>

			<div className='bSaga'>

				<div className='payment-container'>
					<div className='contact-details-wrapper'>

					    <div className='contact-heading'> 
							<span className='drop-down'><MdOutlineArrowDropDown /></span>
						    share your contact details
						</div>

					    <div className='contact-inputs-wrapper'>
							<div className='contact-inputs'>
								<div className='jqzw'>{formData.email}</div>

									<input 
										type="tel" 
										name=""  
										className='jqzwn'
										value={phoneNumber}
										onInput={handleInput}
										maxLength={13}
										onChange={(e) => setPhoneNumber(e.target.value)}
									/>

								<div className='continue-button'>continue</div>
							</div>
							{phoneError && <div className='phone-error-messages'>{phoneError}</div>}
						</div>
					</div>

					<div className='payment-details-wrapper'>
						
						<div className='contact-heading'> 
							<span className='drop-down'><MdOutlineArrowDropDown /></span>
						    payment options
						</div>

						<div className='payment-options-wrapper'>

							<div className='payment-wrapper'>
								<ul className='payment-tabs'>
									<li 
									    className={`payment-list ${selectedTab === 'UPI' ? 'active' : ''}`} 
										onClick={() => handleTabClick('UPI')}>pay by any UPI app
									</li>
									<li 
									    className={`payment-list ${selectedTab === 'card' ? 'active' : ''}`} 
										onClick={() => handleTabClick('card')}>debit/credit card
									</li>
									<li 
									    className={`payment-list ${selectedTab === 'netBanking' ? 'active' : ''}`} 
										onClick={() => handleTabClick('netBanking')}>net banking
									</li>
									<li 
									    className={`payment-list ${selectedTab === 'wallets' ? 'active' : ''}`} 
										onClick={() => handleTabClick('wallets')}>mobile wallets
									</li>
								</ul>
							</div>

							<div className='payment-selections'>
								{showOptions && (
									<>
									    <div className='upi-heading'>
											<img src={upi} alt="" className='upi-logo'/>
											<div className='upi-caption'>pay by any UPI app</div>
										</div>
										<ul>
											{paymentOptions[selectedTab].map((option, index) => (
												<li key={index} className='payment-selection'>
													<label>
														<input
														type='radio'
														name='payment-option'
														value={option.name}
														checked={selectedOption === option.name}
														onChange={() => handleOptionChange(option.name)}
														/>
													</label>
													<img src={option.img} alt="" className='payment-icon' />
													<div className='option-name'>{option.name}</div>
												</li>
											))}
										</ul>
										<div className='shaj'>By clicking "Make Payment" you agree to the <span>terms and conditions</span></div>
									</>
								)}
							</div>

							{!showOptions && selectedOption && (
								<div className='makePayment-wrapper'>
									<div className='GHVFh'>
										<div onClick={handleBackClick} className='backClick-icon'><BsArrowLeftCircle /></div>
										<div className='pay-info'>Pay using  {selectedOption}</div>
									</div>

									<div className='upi-inputs'>

										<div className='input-wrapper'>
											<input 
												type="text"
												placeholder='Enter UPI Id'
												className='bank-details'
												value={upiId}
												onChange={(e) => setUpiId(e.target.value)} //update upi id
										    />
										    {upiError && <div className='error-messages'>{upiError}</div>} {/* Display UPI ID error message */}
										</div>

										<div className='input-wrapper'>
											<input 
												type="text"
												placeholder='Enter Bank'
												className='bank-details'
												value={bankDetails}
												onChange={(e) => setBankDetails(e.target.value)} // Update Bank Details
											/>
											{bankError && <div className='error-messages'>{bankError}</div>} {/* Display bank details error message */}
										</div>

									</div>


									{paymentStatus === null && (
										<div className='make-payment' onClick={handleMakePayment}>make payment</div>
									)}

									{paymentStatus === 'success' && (
										<div>
											<h2>Payment Successful!</h2>
											<p>Your booking is confirmed. You can now view your booking details.</p>
											<button onClick={() => window.location.href = '/home'}>Go to Home</button>
											<button onClick={() => window.location.href = '/booking-details'}>View Booking Details</button>
										</div>
										)}

										{paymentStatus === 'failure' && (
										<div>
											<h2>Payment Failed!</h2>
											<p>Something went wrong. Please try again.</p>
											<button onClick={() => window.location.href = '/home'}>Go to Home</button>
											<button onClick={handlePayment}>Retry Payment</button>
										</div>
										)}


									<div className='shaj'>By clicking "Make Payment" you agree to the <span>terms and conditions</span></div>
								</div>
							)}
						</div>
					</div>
				</div>





                {/* TICKET CONTAINER */}
				<div className='ticket-container'>
					<div className='vSHTa'>
						<div className='hgVAs'>
							<div className='hFAh'>
								<div className='summary'>order summary</div>
								<div className='hfvs'>
								    <div className='name'>{movieName}</div>
								    <div className='category'>
										{genre.split(/[,\/]/).map((item, index) => (
											<span key={index}>
												{item.trim()}
											    {index < genre.split(/[,\/]/).length - 1 && ', '}
											</span>
										))}
									</div>
								</div>
							</div>
							<div className='no-of-tickets'>
								<div className='number'>{seatCount}</div>
								<div className='tickets'>tickets</div>
							</div>
					    </div>

						<div className='ticket-type'>
							{selectedTicketType ? selectedTicketType : '(selected ticket type)'}
						</div>

						<div className='tickets-date'> 
							<div>{selectedSeats.join(', ')}</div>
							<div>
								{currentDate ? `${currentDate}` : '(selected date)'}
							</div>
						</div>

						<div className='line'></div>

						<div className='hHWGQ'>
							<div>sub total</div>
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
						<div>Rs. {finalAmount}</div>
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
