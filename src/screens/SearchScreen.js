import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from "../components/ResultsList";
import useResult from '../hooks/useResult';

const SearchScreen = ()=>{
    const [term, setTerm] = useState('');
    const [searchApi, errorMessages, results] = useResult();
    
    const filterResultsByPrice = (price) => {
        //price = $ || $$ || $$$
         return results.filter(result => {
            return result.price === price;
        });
    };

    return(
        <>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={()=>searchApi(term)}
                />
            {errorMessages ? <Text>{errorMessages}</Text> : null}
            
        <ScrollView>
            <ResultsList  results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList  results={filterResultsByPrice('$$')} title="Bit Pricer" />
            <ResultsList  results={filterResultsByPrice('$$$')} title="For Money Spender" />
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({

});

export default SearchScreen;