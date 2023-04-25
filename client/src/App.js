import style from './App.module.css';
import { LandingPage, Home, DetailsPage, CreatePage } from './views';
import { Route, useLocation } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import { useDispatch } from 'react-redux';
import { setWidthDevice } from './redux/actions/actions';
import axios from 'axios';


axios.defaults.baseURL = 'https://easy-cook-back.vercel.app/'


function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  window.addEventListener("resize", function() {
    dispatch(setWidthDevice(window.innerWidth))
  });

  
  return (
    <div id={style.AbsoluteContainer}>
      <Route exact path="/loading" render={()=><Loading/>}/>

      <Route exact path="/" component={LandingPage}/>   {/*con ese metodo NO se le pude pasar props al componente*/}
      <Route exact path="/home" render={()=><Home/>} /> {/*con ese metodo se le pude pasar props al componente*/}
      <Route  path="/details" render={()=><DetailsPage location={location.pathname.substring(9)}/>} />
      <Route exact path="/create" render={()=><CreatePage/>}/>
      {/* {location.pathname !== "/" && <p className='footer'>By CTroubles</p>} */}
    </div>
  );
}

export default App;
