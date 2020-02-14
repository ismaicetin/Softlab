import React, { createContext, useState  } from 'react';
import { http } from '../Services/axios'
export const DataContext = createContext();
 
 
  
const DataProvider = (props) => {
   
    const [Datalar, setDatalar] = useState([]); 
   
    

    const getNearValletta = (category) => {    
        var param =`near=valletta`;
        if(category.id) param+=`&query=${category.name}`
          
          http.get(`/venues/explore?${param}`).then(data=>{
            setDatalar(data.response.groups[0].items)  
          })
 
    }
 
    return (
        < DataContext.Provider value={
            {
                Datalar,
                setDatalar,
                getNearValletta, 
            }
        } >
            {props.children}
        </DataContext.Provider>
    );
};


export default DataProvider;