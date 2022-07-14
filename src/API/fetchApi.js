import { useEffect, useState } from 'react'
import axios from 'axios';

export const baseUrl = {
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
    'X-RapidAPI-Key': '66e2f71542msh86aacdb40d16d6cp186ad1jsn7258579f0cbd',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

const useFetchApi=()=>{
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .request(baseUrl)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return [data]
}
export default useFetchApi

