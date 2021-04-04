import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class CardList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items:[]
        }
    }
    componentDidMount() {
        this.getDataFromAPI()
    }
    getDataFromAPI = async () => {
        const endpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
        const res = await fetch(endpoint)
        const data = await res.json()
        this.setState({ items:data })
    }

    _renderItem = ({ item, index }) => {
        let { cardText, card, cardImage}= styles
        return (
            <TouchableOpacity style={card}>
                <Image style={cardImage} source={{ uri: 'https://blog.grabon.in/wp-content/uploads/2018/10/Diwali-Offers-On-Electronics.jpg' }} />

                <Text style={cardText}>card Title</Text>
            </TouchableOpacity>
            )
    }
    render() {
        let { container, loader} = styles
        let { items } = this.state
        if (items.length === 0) {
            return (
                <View style={loader}>
                    <ActivityIndicator size= "large"/>
                </View>
                )
        }
        return (
            < FlatList
                style={container}
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this._renderItem}
            />
           
            
            )

    }

} const styles = StyleSheet.create({
    container: {
        marginTop: 40
    },
    cardText: {
        fontSize: 30
    },
    card: {
        backgroundColor: "#fff",
        marginBottom: 10,
        marginLeft: '2%',
        width: "96%",
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: {
            width: 3,
            height:3
        }
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    loader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})