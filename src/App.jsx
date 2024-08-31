import React from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Login from '../src/pages/login';
import Home from '../src/pages/home';
// import RegionSelection from './components/citySelection/regionselection';
// import ViewAllCities from './components/citySelection/viewallcities';
import AboutMovies from './components/aboutmovie/AboutMovie';

function App() {
  return(
    <>
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/home" component={Home}/>
        {/* <Route path="/regionselection" component={RegionSelection}/> */}
        {/* <Route  path="/viewallcities" element={<ViewAllCities/>}/> */}
        <Route path="/aboutmovies" component={AboutMovies}/>
      </Switch>
    </Router>
    </>
  );
}
export default App;




// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './pages/login';
// import Home from './pages/home';
// import RegionSelection from './components/citySelection/regionselection';
// import ViewAllCities from './components/citySelection/viewallcities';
// import AboutMovies from './components/aboutmovie/AboutMovie';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/regionselection" element={<RegionSelection />} />
//         <Route path="/viewallcities" element={<ViewAllCities />} />
//         <Route path="/aboutmovies" element={<AboutMovies />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
