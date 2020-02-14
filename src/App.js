import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import './App.css'; 
import ContentComponent from './Components/Layout/Content';
import SidebarComponent from './Components/Layout/Sidebar';  

import DataProvider from './Context/DataContext';


function App() {
    var sidebarLocalStorage = localStorage.getItem("expertoCrmSidebar");
    const [isOpen, setOpen] = useState(sidebarLocalStorage === 'true') 
    const toggle = () => {
        localStorage.setItem("expertoCrmSidebar", !isOpen)
        setOpen(!isOpen)
    }
 
    return (


        <DataProvider>  
            <div className="App d-flex w-100 flex-column" style={{ height: "100vh" }}> 
                <div className="d-flex flex-row" style={{ flex: "1 0 auto" }}>
                    <SidebarComponent isOpen={isOpen} toggle={toggle} />
                    <ContentComponent />
                </div>
            </div>
        </DataProvider>
    );
}

export default App;
