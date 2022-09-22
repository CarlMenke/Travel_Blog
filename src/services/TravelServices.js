import client from "./";
import axios from 'axios'

const TRAVEL_API_KEY = '6952e17ea8msh66339be48864269p16bd4fjsnd41b8cd43ce1'

export const getDetailsById = async (id) => {

  const hotelOptions = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/get-details',
    params: {
      id: id,
      currency: 'USD',
      locale: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': TRAVEL_API_KEY,
      'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
    }
  };
    const response = await axios.get('https://hotels4.p.rapidapi.com/properties/get-details', hotelOptions);

    return response.data;
}

export const getInformationByName = async (place) => {
  try{
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v2/search',
        params: {query: place, locale: 'en_US', currency: 'USD'},
        headers: {
          'X-RapidAPI-Key': TRAVEL_API_KEY,
          'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
      };

      const response = await axios.get('https://hotels4.p.rapidapi.com/locations/v2/search', options);

      return (response.data.suggestions[1].entities)

    }catch (error){
      throw error
    }
}

export const getAllPosts = async () => {
  try{
      const response = await axios.get('http://localhost:3001/api/allPosts');

      return (response.data)

    }catch (error){
      throw error
    }
}

export const createPost = async (options) => {
  try{
    const response = await axios.post('http://localhost:3001/api/createPost', {...options})

    return response.data
  }catch(error){
    throw error
  }
}

export const changeLikes = async (bool,postId) => {
  try{

    const response = await axios.put('http://localhost:3001/api/updateLikes', {bool:bool, postId:postId})

    return response.data

  }catch(error){
    throw error
  }
}


