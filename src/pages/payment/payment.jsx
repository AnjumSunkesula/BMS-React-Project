import './payment.css';
import img1 from '../../assets/loginpage-images/main-logo.png';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { useState, useEffect } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BsArrowLeftCircle } from "react-icons/bs";
// upi
import gpay from '../../assets/payment/gpay.avif';
import phonepe from '../../assets/payment/phonepe.avif';
import cred from '../../assets/payment/cred.avif';
import upi from '../../assets/payment/UPI.avif';
import bhim from '../../assets/payment/bhim.avif';
import amazonpay from '../../assets/payment/Amazonpay.avif';
import paytm from '../../assets/payment/paytm.avif';
// netbanking
import SBI from '../../assets/payment/sbi-na.avif'
import axis from '../../assets/payment/axis-na.avif';
import hdfc from '../../assets/payment/hdf-na.avif';
import icici from '../../assets/payment/ici-na.avif';
// mobile wallets
import Amobile from '../../assets/payment/Amazonpay (1).avif';
import mobikwik from '../../assets/payment/mobikwik_web.avif';
import paytmIOS from '../../assets/payment/paytm_ios.png';
import payzapp from '../../assets/payment/PAYZAPP.avif';
// copyright
import mastercard from '../../assets/payment/mastercard-securecode6659.jpg';
import PCIDSS from '../../assets/payment/pci-dss.avif';
import entrust from '../../assets/payment/entrust.png';
import safekey from '../../assets/payment/american express.webp';

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

	const [phoneNumber, setPhoneNumber] = useState('+91 ');

	const handleInput = (e) => {
		const value = e.target.value;

		if(value.startsWith('+91 ')) {
			const inputValue = value.replace(/[^\d+]/g, '');
			setPhoneNumber(inputValue);
		}
	};

	

	// TICKET MESSAGE IN CONTACT DETAILS

	const [message, setMessage] = useState('');

	const handleContinue = () => {
		if (phoneNumber.trim() === '+91 ' || phoneNumber.length <= 13) { 
            setPhoneError('Please enter a valid Phone number.');
        } else {
            setPhoneError('');
            const mail = formData.email;
            const phone = phoneNumber;

            setMessage(`Send tickets to ${mail}/ ${phone}`);
        }
	};
	
	// TOGGLE PAYMNET WRAPPER VISIBILITY

	const [paymentVisibility, setPaymentVisibility] = useState(true);

	const toggleVisibility = () => {
		setPaymentVisibility(!paymentVisibility);
	}

	// PAYMENT OPTIONS

	const [selectedTab, setSelectedTab] = useState('UPI');         // state to store the selected tab
	const [showOptions, setShowOptions] = useState(true);         //state to track the visibility of options
	const [selectedOption, setSelectedOption] = useState('');     //state for selected option
	const [upiId, setUpiId] = useState('');                       // State for UPI ID
    const [bankDetails, setBankDetails] = useState('');           // State for Bank Details
	const [phoneError, setPhoneError] = useState('');
	const [upiError, setUpiError] = useState('');
    const [bankError, setBankError] = useState('');

	// Options for each payment method
    const paymentOptions = {
        UPI: [
			{ name: 'Cred UPI',         img: cred},
			{ name: 'GooglePay',        img: gpay },
			{ name: 'AmazonPay',        img: amazonpay },
			{ name: 'BHIM',             img: bhim },
			{ name: 'Paytm',            img: paytm },
			{ name: 'PhonePe',          img: phonepe },
			{ name: 'Other UPI',        img: upi }

		],
        netBanking: [
			{ name: 'State Bank of India', img: SBI },
			{ name: 'ICICI Bank', img: icici },
			{ name: 'HDFC Bank', img: hdfc },
			{ name: 'Axis Bank', img: axis }
		],
        wallets: [
			{ name: 'AmazonPay', text: 'Pay using Amazon Pay Balance and get upto INR 75* back. *T&C Apply', img:Amobile },
			{ name: 'Mobikwik | Zip (Pay Later)', text: 'Pay using Mobikwik & Get upto 30% Cashback. *T&C Apply', img:mobikwik },
			{ name: 'Paytm (Wallet | UPI | Saved Cards)', text: '', img:paytmIOS },
			{ name: 'PayZapp(Wallet | Saved Cards)', text: 'Pay using PayZapp and get 5% cashback upto INR 100 T&C Apply ', img:payzapp }
		]
    };

	// Function to handle tab click
    const handleTabClick = (tab) => {
        if (selectedTab === tab) {                                // If the selected tab is already active, toggle visibility
            setShowOptions(!showOptions);
        } else {
            setSelectedTab(tab);
			setSelectedOption('');                                 //reset selected option when vhanging tabs
            setShowOptions(true);                                 // Show options for the newly selected tab
        }
    };

	// Function to handle radio button selection
    const handleOptionChange = (option) => {
        setSelectedOption(option);
		setShowOptions(false);                                    // Hide options once an option is selected
    };

	// Function to handle back arrow click
    const handleBackClick = () => {
        setShowOptions(true);                                     // Show the options again
        setSelectedOption('');                                     // Reset the selected option
        setUpiId('');                                              // Reset UPI ID
        setBankDetails('');                                       // Reset Bank Details
		setUpiError('');                                            // Clear error when going back
		setBankError('');
    };

	// PAYMENT PROCESS

	const [paymentStatus, setPaymentStatus] = useState(null);              // null means no payment status yet
	const [bookedSeats, setBookedSeats] = useState(JSON.parse(localStorage.getItem('bookedSeats') || "[]")); // Initial booked seats from local storage


	// Simulate a payment by randomly determining if it's successful

	const handlePayment = () => {
		const isSuccess = Math.random() > 0.5;                               // 50% chance of success or failure

		if(isSuccess) {
			const updatedBookedSeats = [...bookedSeats, ...selectedSeats];
			localStorage.setItem('bookedSeats', JSON.stringify(updatedBookedSeats));       //store booked seats in local storage
			setBookedSeats(updatedBookedSeats);
			setPaymentStatus('success');
		} else {
			setPaymentStatus('failure');
		}
	};

	// handle retry payment

	const retryPayment = () => {
		setPaymentStatus(null);            //reset to show all form fields and options
	};
	
	// error messgaes for upi and bank details
	const handleMakePayment = () => {
       let hasError = false;                                       // Track if there are any errors

		// Reset error messages
		setPhoneError('');
		setUpiError('');
		setBankError('');

		// Check if phone number is filled
		if (!phoneNumber || phoneNumber.trim() === '+91 ' || phoneNumber.length <= 13) {
			setPhoneError('Please enter a valid Phone Number.');
			hasError = true;
		}

		if (selectedTab === 'UPI') {
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
	

		} else if (selectedTab === 'netBanking') {
			if (!phoneNumber || phoneNumber.trim() === '+91 ' || phoneNumber.length <= 13) {
				setPhoneError('Please enter a valid Phone Number.');
				hasError = true;
			}                                                             //its fine even if this function doesnt exist.
		}


		// If there are any errors, exit
		if (hasError) {
			return;                                                          // Exit if validation fails
		}


		// If validation passes, proceed with payment
		handlePayment();
    };


	// BANK OPTIONS

	const banks = [
		"SBI Bank", "HDFC Bank", "ICICI Bank", "AXIS Bank", "Kotak Bank", "Airtel Payments Bank",
		"Bank of India", "Bank of Maharashtra", "Central Bank of India", "Canara Bank", "Cosmos Bank",
		"PNB Corporate Bank", "Catholic Syrian Bank", "City Union Bank", "Deutsche Bank", "DCB Bank Ltd",
		"Dhanalaxmi Bank", "Federal Bank", "IndusInd Bank", "Indian Bank", "Indian Overseas Bank",
		"Jammu and Kashmir Bank", "Janata Sahakari Bank Limited", "Karnataka Bank", "Karur Vysya Bank",
		"PNB Bank", "Punjab and Sind Bank", "RBL Bank Limited", "South Indian Bank", "Saraswat Bank",
		"Tamilnad Mercantile Bank", "UCO Bank NetBanking", "Yes Bank"
	];

	const handleSelectChange = (bank) => {
		setSelectedOption(bank); // Set selected bank from dropdown
		setShowOptions(false);   // Hide options and go to confirmation screen
	};



	
	
    // CARD VALIDATIONS
	
	const [cardNumber, setCardNumber] = useState('');
	const [cardName, setCardName] = useState('');
	const [expiryMonth, setExpiryMonth] = useState('');
	const [expiryYear, setExpiryYear] = useState('');
	const [cvv, setCvv] = useState('');
	const [isCardFormValid, setIsCardFormValid] = useState(false);
    const [showCardDetails, setShowCardDetails] = useState(false); // New state for showing card details

	// Helper function to format card number
	const formatCardNumber = (value) => {
		const digitsOnly = value.replace(/\D/g, ''); // Remove all non-digits
		const formattedValue = digitsOnly.replace(/(.{4})/g, '$1 ').trim(); // Add space after every 4 digits
		return formattedValue;
	};

	// Handle input changes
	const handleInputChange = (e) => {
		const formattedValue = formatCardNumber(e.target.value);
		setCardNumber(formattedValue);
		validateCardForm(formattedValue, cardName, expiryMonth, expiryYear, cvv);
	};

	// Function to validate card form
	const validateCardForm = (number = cardNumber, name = cardName, month = expiryMonth, year = expiryYear, cardCvv = cvv) => {
		const cardNumberValid = number.replace(/\s/g, '').length === 16; // Validate card number length
		const nameValid = name.trim() !== ''; // Validate card name
		const expiryValid = month.length === 2 && year.length === 2; // Validate expiry date
		const cvvValid = cardCvv.length === 3; // Validate CVV

		setIsCardFormValid(cardNumberValid && nameValid && expiryValid && cvvValid);
	};

	// Individual input change handlers
	const handleCardNameChange = (e) => {
		setCardName(e.target.value);
		validateCardForm(cardNumber, e.target.value, expiryMonth, expiryYear, cvv);
	};

	const handleExpiryMonthChange = (e) => {
		const {value} = e.target;
		const numericValue = value.replace(/[^0-9]/g, '');    // Filter out non-numeric characters

		// Update state only if it's valid (max length check)
		if (numericValue.length <= 2) {
			setExpiryMonth(numericValue);
		}
		validateCardForm(cardNumber, cardName, numericValue, expiryYear, cvv);
	};

	const handleExpiryYearChange = (e) => {
		const {value} = e.target;
		const numericValue = value.replace(/[^0-9]/g, '');

		if(numericValue.length <= 2) {
			setExpiryYear(numericValue);
		}
		validateCardForm(cardNumber, cardName, expiryMonth, numericValue, cvv);
	};

	const handleCvvChange = (e) => {
		const {value} = e.target;
		const numericValue = value.replace(/[^0-9]/g, '');

		if(numericValue.length <= 3) {
			setCvv(numericValue);
		}
		validateCardForm(cardNumber, cardName, expiryMonth, expiryYear, numericValue);
	};

	// Handler for the "Next" button
	const handleNext = () => {
		if (isCardFormValid) {
			setShowCardDetails(true); // Show card details on successful validation
		} 
	};

	


  





	


	return(
		<>
			<div className='payment-header'>
				<img src={img1} alt="" className='bms-logo'/>
			</div>

			<div className='jAgsh'>
				{paymentStatus ? (
					<div className='payment-status'>
						{paymentStatus === 'success' ? (
							<div className='success-wrapper'>
								<div className='success-heading'>congratulations on your successful payment!</div>
								<div className='success-note'>Thank you for choosing us! Your booking is confirmed, and we can't wait for you to experience our service. Check out our <a href="https://lk.bookmyshow.com/faq">FAQ</a> for the tips on making the most of your experience.</div>
								<div className='home-button' onClick={() => window.location.href = '/home'}>go to home</div>
							</div>
						) : (
							<div className='success-wrapper'>
								<div className='success-heading'>🚫 payment failed</div>
								<div className='success-note'>Unfortunately, your payment didn't go through. You can try again or reach out to us at <a href="https://support.bookmyshow.com/support/home">help center</a> for troubleshooting tips.</div>
								<div className='buttons-wrapper'>
									<div className='home-button' onClick={() => window.location.href = '/home'}>go to home</div>
									<div className='home-button' onClick={retryPayment}>retry payment</div>
								</div>
							</div>
						)}
					</div>
				) : (
					<>
					    <div className='bSaga'>
							<div className={`payment-container ${paymentVisibility ? 'visible' : 'hidden'}`}>
								<div className='contact-details-wrapper'>
									{message ? (
										<div className='success-message'>{message}</div>
									) : (
										<>
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
															maxLength={14}
															onChange={(e) => setPhoneNumber(e.target.value)}
														/>

													<div className='continue-button' onClick={handleContinue}>continue</div>
												</div>
												{phoneError && <div className='phone-error-messages'>{phoneError}</div>}
											</div>
										</>
									)}
								</div>

								<div className='payment-details-wrapper'>
									
									<div className='contact-heading'> 
										<span className='drop-down' onClick={toggleVisibility}><MdOutlineArrowDropDown /></span>
										payment options
									</div>

									{paymentVisibility && (
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

												{/* UPI */}
												{showOptions && selectedTab === 'UPI' && (
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


												{/* DEBIT/CREDIT CARD */}

												{showOptions && selectedTab === 'card' && !showCardDetails && (
													<> 
														<div className='upi-heading'>
															<div className='upi-caption'>enter your card details </div>
														</div>

														<div className='card-container'>
															<div className='card-number-wrapper'>
																<div className='card-headings'>card number</div>
																<div className='card-inputs'>
																	<input 
																		type="text"
																		placeholder='enter your card number'
																		className='input-values number-input'
																		maxLength={19}
																		value={cardNumber}
																		onChange={handleInputChange}
																	/>

																	<input 
																		type="text"
																		placeholder='name on the card' 
																		className='input-values'
																		value={cardName}
																		onChange={handleCardNameChange}
																	/>
																</div>
															</div>
															<div className='expiry-cvv'>
																<div className='expiry'>
																	<div className='card-headings'>expiry</div>
																	<div className='expiry-inputs'>
																		<input 
																			type="text"
																			inputMode='numeric'
																			placeholder='mm'
																			maxLength={2} 
																			className='GUYSq'
																			value={expiryMonth}
																			onChange={handleExpiryMonthChange}
																		/>
																		<input 
																			type="text"
																			inputMode='numeric'
																			placeholder='yy' 
																			maxLength={2}
																			className='GUYSq'
																			value={expiryYear}
																			onChange={handleExpiryYearChange}

																		/>
																	</div>
																</div>
																<div className='cvv'>
																	<div className='card-headings'>CVV</div>
																	<div>
																		<input 
																			type="password"
																			placeholder='cvv' 
																			maxLength={3}
																			className='GUYq'
																			value={cvv}
																			onChange={handleCvvChange}
																		/>
																	</div>
																</div>
															</div>
														</div>

														<button className='next-button' onClick={handleNext} disabled={!isCardFormValid}>Next</button> {/* Next Button */}
														
													</>
												)}

												{/* this logic is supposed to be right after the input logic because When you placed the conditional logic ({showCardDetails && ...}) right after the card input, React only renders that part of the UI based on whether the showCardDetails state is true or false.
												If you placed the conditional logic far from where the actual card input is rendered, React would either not rerender correctly or it would not reflect the updated state in the part of the component where it's needed. */}

												{selectedTab === 'card' && showCardDetails && (            
													<div className='payment-info'>
														<div>
															<div className='card-heading'>card details</div>
															<div className='card-details'>Card Number: <span>{cardNumber}</span></div>
															<div className='card-details'>Name on Card: <span>{cardName}</span></div>
															<div className='card-details'>Expiry Date: <span>{expiryMonth}/{expiryYear}</span></div>
															<div className='card-details'>CVV: <span>{cvv}</span></div>
														</div>

														<div className='card-payment'>
															{paymentStatus === null && (
																<div className='make-payment' onClick={handleMakePayment}>make payment</div>
															)}
															<div className='shaj'>By clicking "Make Payment" you agree to the <span>terms and conditions</span>.</div>
														</div>

													</div>

													
												)}


												{/* NETBANKING */}

												{showOptions && selectedTab === 'netBanking' && (
													<>
														<div className='upi-heading'>
															<div className='upi-caption'>pay by Net Banking</div>
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
																	<img src={option.img} alt={option.name} className='netBanking-icon' />
																</li>
															))}
														</ul>

														<div className='ndknwn'>
															<div className='all-banks'>All Banks</div>
															<select
																id="bank-options"
																onChange={(e) => handleSelectChange(e.target.value)}  // Handle dropdown change
																value={selectedOption || ''}
															>
																<option value="">Select Bank</option>
																{banks.map((bank, index) => (
																	<option key={index} value={bank}>{bank}</option>
																))}
															</select>
														</div>

													</>
												)}


												{/* MOBILE WALLETS */}

												{showOptions && selectedTab === 'wallets' && (
													<>
														<div className='upi-heading'>
															<div className='upi-caption'>pay using wallets</div>
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
																	<div>
																	<img src={option.img} alt={option.name} className='wallets-icon' />
																	<div className='wallets-name'>{option.text}</div>
																	</div>
																</li>
															))}
														</ul>
													</>
												)}

											</div>



											{!showOptions && selectedOption &&  (
												<div className='makePayment-wrapper'>
													<div className='GHVFh'>
														<div onClick={handleBackClick} className='backClick-icon'><BsArrowLeftCircle /></div>
														<div className='pay-info'>
															{selectedTab === 'wallets' 
															? selectedOption   // Just show the selected option for wallets
															: `Pay using ${selectedOption}`} {/* Show "Pay using" for other payment methods */}
														</div>
													</div>

													

													{/* Show Card Details after Next is clicked */}
													{selectedTab === 'card' && showCardDetails && (
														<div className='pay-info'>
															{/* <h3>Card Details</h3> */}
															<p><strong>Card Number:</strong> {cardNumber}</p>
															<p><strong>Name on Card:</strong> {cardName}</p>
															<p><strong>Expiry Date:</strong> {expiryMonth}/{expiryYear}</p>
															<p><strong>CVV:</strong> {cvv}</p>
														</div>
													)}

													
													{selectedTab === 'UPI' && (
														<div className='upi-inputs'>
															<div className='input-wrapper'>
																<input
																type="text"
																placeholder='Enter UPI Id'
																className='bank-details'
																value={upiId}
																onChange={(e) => setUpiId(e.target.value)} // Update UPI ID
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
													)}

													

													{selectedTab === 'netBanking' && (
														<div className='netbanking-confirmation'>
															Click the button below to proceed with <span>{selectedOption}</span>.
														</div>
													)}

													{selectedTab === 'wallets' && (
														<div className='wallet-info'>
															{paymentOptions.wallets.find(option => option.name === selectedOption)?.text || ''}
														</div>
													)}



													{paymentStatus === null && (
														<div className='make-payment' onClick={handleMakePayment}>make payment</div>
													)}

													

													<div className='shaj'>By clicking "Make Payment" you agree to the <span>terms and conditions</span>.</div>
												</div>
											)}
										</div>
									)}
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

						{/* NOTE */}
						<div className='note-wrapper'>
							<div className='gyFA'>
								<div className='note'>Note:</div>
								<div className='note-points'>
									<div>1.You can cancel the tickets 2D min(s) before the show. Refunds will be done according to <span>cancellation policy</span>.</div>
									<div>2. In case of Credit/Debit Card bookings, the Credit/Debit Card and Card holder must be present at the ticket counter while collecting the ticket(s).</div>
								</div>
							</div>
							<div className='copyright-images'>
								<div className='copyright'>&copy; Bigtree Entertainment Pvt. Ltd <span>Privacy Policy | Contact Us</span></div>
								<div className='copy-images-wrapper'>
									<div>As safe as it gets</div>
									<div className='copy-images'>
										<div><img src={mastercard} alt="" /></div>
										<div><img src={PCIDSS} alt="" /></div>
										<div><img src={safekey} alt="" /></div>
										<div><img src={entrust} alt="" /></div>
									</div>
								</div>
							</div>
						</div> 
					</>
				)}
			</div>
		</>
	);

};
export default Payment;


