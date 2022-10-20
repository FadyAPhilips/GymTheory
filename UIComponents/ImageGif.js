import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const Img = (props) => {

    const styles = StyleSheet.create({
        container: {
            borderRadius: props.size / 5,
            margin: 10,
            overflow: 'hidden',
            width: props.size,
            height: props.size,


        },
        img: {
            width: props.size,
            height: props.size,
            // borderRadius: props.size / 5,
            // borderWidth: 3,
            // borderColor: 'blue',
            // overlayColor: 'rgba(255,0,255,0)',
        }
    });

    const imgSource = "https://d205bpvrqc9yn1.cloudfront.net/" + props.imgSource + ".gif"

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgSource }}
                style={styles.img}
            />
        </View>
    )

}

export default Img;