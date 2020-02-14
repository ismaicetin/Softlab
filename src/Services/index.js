import { http } from './axios'
 

function getFoursquareCategory() {
    return http.get("/venues/categories")
}

function getLocationsNearValletta(id) {
    return http.get(`/bolge/${id}`)
}
  
export default  {
    getFoursquareCategory,
    getLocationsNearValletta 
};
 