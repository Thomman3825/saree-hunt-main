import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { useEffect, useState } from 'react';
import SareeList from './Components/Body/Sarees';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [ sarees, setSarees] = useState([])
  useEffect(()=>{
    fetch('/db.json')
                    .then(response => response.json())
                    .then(data => setSarees(data))
                    .catch( err => console.log("Error getting saree deets", err));
  },[])
  return (
    <div className="App">
     <Header/>
      <SareeList sarees={sarees}></SareeList>
     <Footer/>
    </div>
  );
}

export default App;
