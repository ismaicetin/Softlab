import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
// import DashboardDefaultPages from './Pages/DashboardDefaultPages' 
import DetailPage from './Pages/DetailPage'
   


export default props => ( 
      <Switch>  
        <Route exact path="/"      component={DetailPage} />  
      </Switch> 
)
