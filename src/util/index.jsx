import axios from 'axios'


const productionUrl = 'https://jobportalapi-5pen.onrender.com'

export const customFetch = axios.create({
    baseURL: productionUrl,

})
export  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };