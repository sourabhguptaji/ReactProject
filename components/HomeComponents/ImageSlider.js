import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { SliderBox } from "react-native-image-slider-box";

export default class ImageSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                "https://blog.grabon.in/wp-content/uploads/2018/10/Diwali-Offers-On-Electronics.jpg",
                "https://cdn.shopify.com/s/files/1/2459/1583/articles/Blog_Cover_31914c9e-72e8-4852-ae24-f549493d5d18.jpg?v=1542801283",
                "https://img.freepik.com/free-vector/special-offer-final-sale-banner-red-background-illustration_275806-121.jpg?size=626&ext=jpg&ga=GA1.2.1913179976.1611964800",
                "https://1.bp.blogspot.com/-bP5ND1dFhpk/XmnlF3kogiI/AAAAAAAAA-E/rsyyFWOlpIYzaJvl90o3D8aS2escpxmFgCLcBGAsYHQ/s1600/02.jpg",
               
            ]
        };
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <SliderBox
                   
                    images={this.state.images}
                    sliderBoxHeight={200}
                    onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#FFEE58"
                    inactiveDotColor="#90A4AE"
                    paginationBoxVerticalPadding={20}
                    autoplay
                    circleLoop
                    resizeMethod={'resize'}
                    resizeMode={'cover'}
                    paginationBoxStyle={{
                        position: "absolute",
                        bottom: 0,
                        padding: 0,
                        alignItems: "center",
                        alignSelf: "center",
                        justifyContent: "center",
                        paddingVertical: 10
                    }}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 0,
                        padding: 0,
                        margin: 0,
                        backgroundColor: "rgba(128, 128, 128, 0.92)"
                    }}
                    ImageComponentStyle={{ borderRadius: 15, width: '97%', marginTop: 5 }}
                    imageLoadingColor="#2196F3"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});