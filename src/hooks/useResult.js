import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default ()=>{

const [results, setResults] = useState([]); 
    const [errorMessages, setErrorMessages] = useState('');

    const searchApi = async (searchTerm)=>{
        console.log('Hi there');
    try{
            
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        
        });

        setResults(response.data.businesses);
    } catch (err){
        setErrorMessages(`Something went wrong ${err}`);
    }
    }

useEffect(()=>{
    searchApi('pasta');
}, []);

return [searchApi, errorMessages, results ];
}