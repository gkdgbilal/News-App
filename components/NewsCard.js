import React from "react";
import {View, StyleSheet, Text, Image, Dimensions} from "react-native";
import ImagedCarouselCard from "react-native-imaged-carousel-card";

const {width, height} = Dimensions.get('window')

const NewsCard = ({item}) => {
    return (
        <View style={styles.cardView}>
            <Text style={styles.title}>
                {item.title}
            </Text>
            <Text style={styles.author}>
                {item.publishedAt}
            </Text>
            {/*<Image*/}
            {/*    style={styles.image}*/}
            {/*    source={{uri: item.urlToImage}}*/}
            {/*/>*/}
            <ImagedCarouselCard
                text={item.author}
                style={styles.image}
                source={{
                    uri: item.urlToImage,
                }}
            />
            <Text style={styles.description}>
                {item.description}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        backgroundColor: "#596289",
        margin: width * 0.03,
        borderRadius: width * 0.05,
        shadowColor: "#000",
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical: width * 0.03,
        color: "#F4F5FB",
        fontSize: 20,
        fontWeight: "bold",
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: "gray",
        fontSize: 18,
    },
    image: {
        width: "auto",
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02,
    },
    author: {
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: "gray",
    },
})

export default NewsCard
