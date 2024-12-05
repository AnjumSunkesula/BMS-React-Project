import './login.css';
import React from 'react';
import Logo from '../assets/loginpage-images/main-logo.png'
// import Logo from '../assets/loginpage-images/bookmyshow-logo-vector.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useState, useEffect} from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


function InputGroup({ name, label, value, onChange, error, type= "text", toggleVisibility, children}) {
	// state to track whether the input is focused
	const [isFocused, setIsFocused] = useState(false);

	// handle input focus event
	const handleFocus = () => {
		setIsFocused(true);
	};

	// handle input blur event
	const handleBlur = () => {
		setIsFocused(false);  //handleBlur Function: This function sets the isFocused state to false when the input loses focus.

	};
	/*the blur event is an event triggered when an input field loses focus. This event is part of the focus-related events in JavaScript, 
    which also include focus, focusin, and focusout.This typically happens when the user clicks outside the input field or switches to another input field.
    When the input field loses focus, handleBlur is triggered.handleBlur sets isFocused to false, which typically affects the styling or behavior of the input field (e.g., label position).*/




	// check if the input has any value
	const hasValue = value.trim() !== '';

	// update focus state based on the input value
	useEffect(() => {
		if (hasValue) {
			setIsFocused(true);
		}
	}, [value]);


	return(
		<div className='input-group'>
			{children}
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange} //handles input changes
				onFocus={handleFocus} //sets focus state to true when focused
				onBlur={handleBlur}  //sets focus state to false when blurred //onBlur Prop: Attaches the handleBlur function to the blur event of the input field.
				id={name}
				placeholder=''
			/>
			<label htmlFor={name} className={isFocused || hasValue  ? 'focused' : ''}>{label}</label>
			{toggleVisibility && <span className='Io-eye' onClick={toggleVisibility}>{type === "password" ? <IoEye /> : <IoMdEyeOff /> }</span>}
			{error && <div className='error-message'>{error}</div>} 
		</div>
		//displays error message if present
	);

}

function Login() {


    const history = useHistory();

    const homePage = () => {
      history.push("/Home")
    };

    // state to store form data
    const [formData ,setFormData] =useState({
      firstName : "" ,
      lastName : "" ,
      email : "" ,
      password : "",
      confirmPassword : ""
    });


    // state to store form validation errors
    const [formErrors, setFormErrors] = useState({});
	const [visiblePassword, setVisiblePassword] = useState(false);
	const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false);


	
    // handle input change events
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData, [name] : value
      });

    };
	
	const togglePasswordVisibility = () => {
        setVisiblePassword(!visiblePassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setVisibleConfirmPassword(!visibleConfirmPassword);
    };
	

    const isValidPassword = (password) => {
        const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /[0-9]/;
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;
        return(
          password.length >= 8 &&
          symbolRegex.test(password) &&
          numberRegex.test(password) &&
          upperCaseRegex.test(password) &&
          lowerCaseRegex.test(password) 
        );
    };
	
	

    // handle for submission
    const handleSubmit = (e) => {

		e.preventDefault(); // to prevent the default form submission


        // Store form data in local storage
        localStorage.setItem('formData', JSON.stringify(formData));
        history.push('/payment'); //can pass the formdata to payment
		history.push('/home');


        const validationErrors = {};		
		
		// validation logic 
        // first name validation
        if (!formData.firstName.trim()) {
          validationErrors.firstName = "First Name is required";
        }



        // last name validation
        if (!formData.lastName.trim()) {
          validationErrors.lastName = "Last Name is required";
        }


        // email validation
        if(!formData.email.trim()){
          validationErrors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
          validationErrors.email = "The Email Entered is not Valid!";
        }




        // password validation
        if(!formData.password.trim()){
          validationErrors.password = "Password is required";
        }else if(!isValidPassword(formData.password)) {
          validationErrors.password = "Password should be atleast 8 char long and contain atleast one symbol, one number, one uppercase letter and one lowercase letter.";
        }




        // confirm password validation
        if(formData.confirmPassword !== formData.password) {
          validationErrors.confirmPassword = "Password must match!";
        }




        setFormErrors(validationErrors); //set validation errors


        if(Object.keys(validationErrors).length === 0) {
          console.log('Form Submitted Successfully');
		  homePage();
        }else{
          console.log('Form Submission Failed!', validationErrors);
        }



        
    };

//     return(
//     <>
//     <div className='container'>
// 		<div className='sign-up'>
// 			<h1 className='title'>Create Your <span>book<span className='my'>my</span>show</span> Account</h1>
// 			<form onSubmit={handleSubmit}>
//             <InputGroup
//                 name="firstName"
//                 label="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 error={formErrors.firstName}
//             />
//             <InputGroup
//                 name="lastName"
//                 label="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 error={formErrors.lastName}
//             />
//             <InputGroup
//                 name="email"
//                 label="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 error={formErrors.email}
//             />
//             <InputGroup
//                 name="password"
//                 label="Password"
// 				type={visiblePassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 error={formErrors.password}
// 				toggleVisibility={togglePasswordVisibility}
//             />
//             <InputGroup
//                 name="confirmPassword"
//                 label="Confirm Password"
// 				type={visibleConfirmPassword ? "text" : "password"}
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 error={formErrors.confirmPassword}
// 				toggleVisibility={toggleConfirmPasswordVisibility}
//             />
//             <button type='submit' className='submit-button'>
// 				Sign Up
// 			</button>
//         </form>
				
// 			<div className='divider'>
// 			<hr />
// 			<h2 className='h2-divider'>OR</h2>
// 			</div>
// 		<div className='google-login'>
// 			<GoogleLogin 
// 				onSuccess={credentialResponse => {
// 				const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
// 				console.log(credentialResponseDecoded);
// 				homePage();
// 				}}
// 				onError={() => {
// 				console.log('Login Failed');
// 				}}
// 			/>;      
// 			</div>
// 		</div>

// 		<div className='section-image'>
// 			<section>
// 			<p className='paragraph'>Watch At Your Convenience</p >
// 			</section>
// 		</div>
//      </div>  
//     </>
//   );
  return(
	<>
		<div className='container'>
			<div className='login-container'>
				<div className='bms-display'>
					<div>
					    <img src={Logo} alt="" />
						<div>create an account</div>
					    <div className='login-wrapper'>already have an account? LOgin</div>

					</div>
			    </div>
				<div className='register-container'>
					<form onSubmit={handleSubmit}>
					    <div className='formDetails-wrapper'>
							<div className='names'>
								<div className='NiaPi'>
									<InputGroup
										name="firstName"
										label="First Name"
										value={formData.firstName}
										onChange={handleChange}
										error={formErrors.firstName}
									/>
								</div>
								<div className='NiaPi'>
									<InputGroup
										name="lastName"
										label="Last Name"
										value={formData.lastName}
										onChange={handleChange}
										error={formErrors.lastName}
									>
									    <FontAwesomeIcon icon={faUser}/>
									</InputGroup>
								</div>
							</div>
							<div>
								<InputGroup
									name="email"
									label="Email"
									value={formData.email}
									onChange={handleChange}
									error={formErrors.email}
								/>
							</div>
							<div>
								<InputGroup
									name="dateOfBirth"
									label="Date Of Birth"
									value={formData.email}
									onChange={handleChange}
									error={formErrors.email}
								/>
							</div>
							<div  className='passwords'>
								<div className='NiaPi'>
									<InputGroup
										name="password"
										label="Password"
										type={visiblePassword ? "text" : "password"}
										value={formData.password}
										onChange={handleChange}
										error={formErrors.password}
										// toggleVisibility={togglePasswordVisibility}
									/>
								</div>
								<div className='NiaPi'>
									<InputGroup
										name="confirmPassword"
										label="Confirm Password"
										type={visibleConfirmPassword ? "text" : "password"}
										value={formData.confirmPassword}
										onChange={handleChange}
										error={formErrors.confirmPassword}
										// toggleVisibility={toggleConfirmPasswordVisibility}
									/>
								</div>
							</div>
					    </div>
					</form>
					<div className='register-button'>
						create your account
					</div>
					<div className='divider'>
			            <hr />
			            <h2 className='h2-divider'>OR</h2>
			        </div>
		            <div className='google-login'>
						<GoogleLogin 
							onSuccess={credentialResponse => {
							const credentialResponseDecoded = jwtDecode(credentialResponse.credential)
							console.log(credentialResponseDecoded);
							homePage();
							}}
							onError={() => {
							console.log('Login Failed');
							}}
						/>;      
				    </div>
				</div>
			</div>
		</div>
	 
	</>
  )
};
export default Login