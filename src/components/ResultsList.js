import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultDetail from "../components/ResultDetail";

const ResultsList = ({ title, results, navigation })=>{
    if (!results.length) {
        return null;
    }
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item })=>{
                    return (
                        <TouchableOpacity onPress={()=>{ navigation.navigate('ResultShow',{id:item.id})}}>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title:{
        marginLeft:15,
        marginBottom:5,
        fontSize:18,
        fontWeight:'bold'
    }
});

export default withNavigation(ResultsList);