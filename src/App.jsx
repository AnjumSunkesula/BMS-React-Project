import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Login from '../src/pages/login';
import Home from '../src/pages/home';
import AboutMovies from './components/aboutmovie/AboutMovie';
import SeeAll from './pages/see all/seeAll'
import BookTickets from './pages/ticket booking/ticketBooking';
import AddFoods from './pages/food&beverages/food&beverages';
import Payment from './pages/payment/payment';

function App() {

  // city visibility in header of involved components

  const [selectedCity, setSelectedCity] = useState(                // Retrieve selectedCity from localStorage, or default to 'Select City'
    () => localStorage.getItem('selectedCity') || 'select city'
  );                                                                //when u go to another page the selected city should be displayed instead of'select city'.thats why using useEffect and useState

  useEffect(() => {                                                 //Using useEffect to store the selectedCity in localStorage whenever it changes
    localStorage.setItem('selectedCity', selectedCity);
  }, [selectedCity]);

  // STATE FOR TICKET TYPE

  const [selectedTicketType, setSelectedTicketType] = useState('m-ticket'); //In the AddFoods component, when the user selects a ticket type, the handleSelection function is called, which updates the state in the parent component.The Payment component receives the selectedTicketType as a prop and displays it.

  const handleTicketSelection = (ticketType) => {
    setSelectedTicketType(ticketType); // Update the ticket type
  };


  return(
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>

        <Route exact path="/home"> 
          <Home selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> {/* Pass selectedCity and setSelectedCity to Home */}
        </Route>

        <Route  path="/aboutmovies"> 
          <AboutMovies selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> {/* Pass selectedCity and setSelectedCity to AboutMovies */}
        </Route>

        <Route  path="/seeall"> 
          <SeeAll selectedCity={selectedCity} setSelectedCity={setSelectedCity} /> {/* Pass selectedCity and setSelectedCity to AboutMovies */}
        </Route>

        <Route path="/booktickets">
          <BookTickets selectedCity={selectedCity} /> {/* Pass selectedCity to BookTickets */}
        </Route>

        <Route path="/addfoods">
          <AddFoods selectedTicketType={selectedTicketType} /> {/* Pass selectedCity to BookTickets */}
        </Route>

        <Route path="/payment">
          <Payment selectedTicketType={selectedTicketType}/> {/* Pass selectedCity to BookTickets */}
        </Route>

      </Switch>
    </Router>
    </>
  );
}
export default App;




