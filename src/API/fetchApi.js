import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': '2eecbe3b4fmsh381c197c39364fap15cbc4jsn79cf65438095',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

export const fetchApi=()=>{
  axios.request(options).then(function (response) {
    console.log(response.data);
    return response.data
  }).catch(function (error) {
    console.error(error);
  });
  
}

