import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import Couch from './Couch';
import Dots from './Dots';
import './index.css';
import Partners from './Partners';
import Table from './Table';
import Lamp from './Lamp';


function App(){
    return(
        <div>
            <div className='nav--couch'>
            <Navbar />
        <Couch />
        <Dots />

        <div>
        <Partners />
        </div>

        <Table />
        <Lamp />
        
            </div>

        
    
        </div>
       
    )

}
  // ========================================
  ReactDOM.render(<App />, document.getElementById("root"))
  
  