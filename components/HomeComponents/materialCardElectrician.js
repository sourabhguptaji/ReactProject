import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import {
    Card,
    CardTitle,
    CardContent,
    CardAction,
    CardButton,
    CardImage,
} from 'react-native-material-cards';

export default class MaterialCards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ height:"10%" }}>
                    <Card
                        mediaSource={{ uri: 'https://i.pinimg.com/originals/a1/b4/6b/a1b46b372bd26005566417376da6604a.jpg' }}
                        style={{ margin: 10, borderRadius: 20 }}
                    >
                        <CardTitle
                            subtitleAbove={false}
                            title="Munna Bhaiya"
                            subtitle="Ratings-****"
                        />
                        <CardAction separator={true} inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Call"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Chat"
                            />
                        </CardAction>
                    </Card>
                    <Card
                        mediaSource={{ uri: 'https://timesofindia.indiatimes.com/thumb/msid-74506962,width-800,height-600,resizemode-4/74506962.jpg?imglength=184584' }}
                        style={{ margin: 10, borderRadius: 20 }}
                    >
                        <CardTitle
                            subtitleAbove={false}
                            title="Pappu Bhaiya"
                            subtitle="Ratings-****"
                        />
                        <CardAction separator={true} inColumn={false}>
                            <CardButton
                                onPress={() => { }}
                                title="Call"
                            />
                            <CardButton
                                onPress={() => { }}
                                title="Chat"
                            />
                        </CardAction>
                    </Card>

                 </ScrollView >
             </View>
                );
            }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       justifyContent: 'flex-start',
       alignItems: 'stretch',
        backgroundColor: '#B0BEC5',
        borderColor: 'red'
    },
});
