import logo from './logo.svg';
import './App.css';
import './index.css'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Gallery from './Pages/Gallery/Gallery';
import {ThemeProvider}  from '@material-ui/styles';
import theme from './Components/ui/Theme'
import NavBar from './Components/NavBar/navbar'
import {connect , dispatch} from 'react-redux'
import Events from './Pages/FullEvents/Events'
import Link from 'react-scroll'
import Contact from './Pages/Contact/Contact'
import GalleryWindow from './Components/GalleryWindow/GalleryWindow'
import disableScroll from 'disable-scroll';
import { useEffect } from 'react';
import AboutModern from './Pages/AboutModern/AboutModern'



const App = (props) => {



  return (
      <ThemeProvider theme = {theme}>
          <link rel="stylesheet" href="https://use.typekit.net/rwb1nck.css"></link>
            <div style = {{display : 'flex' , flexDirection : 'column' }}>
              <Home></Home>
              <AboutModern></AboutModern>
              <Gallery></Gallery>
              <Events></Events>
              <Contact></Contact>
            </div>       
      </ThemeProvider>   
  );
}


const mapStateToProps = (state) => {
  return {
      tab : state.flow.tab,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      ChangeTab: (newTab) => dispatch({type : 'ChangeTab' , newTab : newTab}),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)



