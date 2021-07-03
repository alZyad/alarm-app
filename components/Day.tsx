import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
export default (props: {day: string, key: number, isDayPress: any, setIsDayPress: any}) => {

    
    const handleDayPress = () => {
        var isPressNew = props.isDayPress;
        isPressNew = (!props.isDayPress);
        props.setIsDayPress(isPressNew);
    }

    return (
    <Pressable style= {props.isDayPress ? styles.btnPress : styles.btnNormal} onPress={handleDayPress}>
        <Text style={props.isDayPress ? styles.btnTextPress : styles.btnTextNormal}>{props.day}</Text>
    </Pressable>
    )
}

const primaryColor = "#CA2E55";
const secondaryColor = "#333";

const styles = StyleSheet.create({
    btnNormal: {
        borderColor: primaryColor,
        backgroundColor: secondaryColor,
        color: primaryColor,
        borderWidth: 1,
        margin : 2,
        borderRadius: 25,
        width: 25,
        height: 25,
        justifyContent: "center",
    },
    btnPress: {
        borderColor: secondaryColor,
        backgroundColor: primaryColor,
        color: secondaryColor,
        borderWidth: 1,
        margin : 2,
        borderRadius: 25,
        width: 25,
        height: 25,
        justifyContent: "center",
    },
    btnTextNormal: {
        fontSize: 9,
        color: primaryColor,
        alignSelf: "center",
    },
    btnTextPress: {
        fontSize: 9,
        color: secondaryColor,
        alignSelf: "center",
    },
})