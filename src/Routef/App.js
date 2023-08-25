import React from 'react';
import '../food/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import Cart from './Cart';
import Footer from '../food/Footer';
import Team from './Team';
import Comment from './Comment';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, Routes} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Aos from 'aos';
import 'aos/dist/aos.css';




function App () {
  React.useEffect(() =>{
    Aos.init()
  }, [])
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Head />,
  //   },
  //   {
  //     path: "/Cart",
  //     element: <Cart />,
  //   },
  //   {
  //     path: "/Team",
  //     element: <Team />,
  //   },
  //   {
  //     path: "/Location",
  //     element: <Location />,
  //   },
  //   {
  //     path: "/Comment",
  //     element: <Comment />,
  //   },
  //   {
  //     path: "/",
  //     element: <Footer />
  //   }
  // ])
  
  

    
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Cart/' element={<Cart />} />
      <Route path='Team/' element={<Team />} />
      <Route path='Footer/' element={<Footer />} />
      <Route path='Comment/' element={<Comment />} />
    

    </Routes>
  
    
   
    
    
  );
};

export default App;
