import React, { useEffect, useState ,useContext,} from 'react'; 
import { DataContext } from "../../Context/DataContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
 
import Services from '../../Services'

function SideBar({ isOpen, toggle }) {
  const DataContexts = useContext(DataContext); 
  const [list, setList] = useState([]);
  useEffect(() => {
    Services.getFoursquareCategory().then(data => {
      setList(data.response.categories)
      // console.log(data.response.categories)
    })
  }, []);


  function getList(arr) {
    if (arr.length > 0) {
      return(<ul>
        { arr.map(item => {
        return (<li key={item.id} >
          <p onClick={()=>{ DataContexts.getNearValletta(item ) }}> {item.name}</p>  
          {getList(item.categories)}
          </li>)
      })}
       </ul>
    )
    }
  }

  return (
    <div className={`sidebar ${isOpen ? "hower" : "active"}`}   >
      {getList(list)}
 


      <div className="toggle">
        <FontAwesomeIcon icon={isOpen ? faAngleDoubleRight : faAngleDoubleLeft} className="icon" onClick={toggle} />
      </div>
    </div>
  );
}

 
export default SideBar;
 