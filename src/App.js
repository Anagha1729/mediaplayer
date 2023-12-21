
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import History from './pages/History';
import { Routes,Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from'./Component/Footer';


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/'element={ <Landing/>}/>
      <Route path='/home'element={ <Home/>}/>
      <Route path='/watch-history'element={ <History/>}/>
       </Routes>
       <Footer/>
    </div>
  );
}

export default App;
