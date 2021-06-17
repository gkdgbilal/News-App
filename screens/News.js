import React, {useState, useEffect} from "react";
import {View, StyleSheet, Text, Button, FlatList} from "react-native";
import NewsCard from "../components/NewsCard";
import newAPI from '../api/News'

const News = () => {

    const [news, setNews] = useState([])

    // const newsResponse = async () => {
    //     const response = await newAPI.get('top-headlines?country=us&apiKey=a790e673f1dc4c13a7051b9cf4d3fc39')
    //     console.log(response.data)
    // }

    function getNewsFromAPI() {
        newAPI
            .get('top-headlines?country=us&apiKey=a790e673f1dc4c13a7051b9cf4d3fc39')
            .then((response) => {
                setNews(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    if (!news) {
        return null

    }

    useEffect(() => {
        getNewsFromAPI()
    }, [])


    return (
        <View style={{backgroundColor: "#F4F5FB"}}>
            <FlatList
                data={news.articles}
                keyExtractor={(item, index) => 'key' + index}
                renderItem={({item}) => {
                    return <NewsCard item={item}/>
                }}
            />
        </View>
    )
}

export default News
