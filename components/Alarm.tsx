import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, Pressable } from 'react-native'
import Day from "../components/Day"

export default (props: {alarm: any, key: number}) => {
    const [activated, setActivated] = useState(false);
    const week = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const [allWeek, setallWeek] = useState(false);

    const handleAllWeek = () => {
        if(allWeek){
            setallWeek(false);
            setIsMoPress(false);
            setIsTuPress(false);
            setIsWePress(false);
            setIsThPress(false);
            setIsFrPress(false);
            setIsSaPress(false);
            setIsSuPress(false);
        } else {
            setallWeek(true);
            setIsMoPress(true);
            setIsTuPress(true);
            setIsWePress(true);
            setIsThPress(true);
            setIsFrPress(true);
            setIsSaPress(true);
            setIsSuPress(true);
        }
    };
    const [ isMoPress, setIsMoPress ] = React.useState(false);
    const [ isTuPress, setIsTuPress ] = React.useState(false);
    const [ isWePress, setIsWePress ] = React.useState(false);
    const [ isThPress, setIsThPress ] = React.useState(false);
    const [ isFrPress, setIsFrPress ] = React.useState(false);
    const [ isSaPress, setIsSaPress ] = React.useState(false);
    const [ isSuPress, setIsSuPress ] = React.useState(false);
    return (
        <View style={styles.alarm}>

            <View style={styles.textContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>
                        {props.alarm.time.slice(0,2)+":"+props.alarm.time.slice(2)}
                    </Text>
                    <Pressable onPress={handleAllWeek} style={styles.repeatPressable}>
                        <Text style={styles.pressableText}>{allWeek ? "Don't repeat" : "Repeat all week"}</Text>
                    </Pressable>
                </View>
                <View style={styles.week}>
                    <Day day={"Mo"} key={0} isDayPress={isMoPress} setIsDayPress={setIsMoPress} />
                    <Day day={"Tu"} key={1} isDayPress={isTuPress} setIsDayPress={setIsTuPress}/>
                    <Day day={"We"} key={2} isDayPress={isWePress} setIsDayPress={setIsWePress}/>
                    <Day day={"Th"} key={3} isDayPress={isThPress} setIsDayPress={setIsThPress}/>
                    <Day day={"Fr"} key={4} isDayPress={isFrPress} setIsDayPress={setIsFrPress}/>
                    <Day day={"Sa"} key={5} isDayPress={isSaPress} setIsDayPress={setIsSaPress}/>
                    <Day day={"Su"} key={6} isDayPress={isSuPress} setIsDayPress={setIsSuPress}/>
                </View>
            </View>
            <Switch thumbColor={activated?"#fff":"#000"} trackColor={{true: 'red', false: 'grey'}}
                    onValueChange={()=>{setActivated(!activated)}} value={activated} style={styles.switch}
            />
 
        </View>
    )
}


const styles = StyleSheet.create({
    alarm : {
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#333",
        padding: 20,
        marginVertical: 20,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },
    textContainer : {
        display: "flex",
        flex: 14,
    },
    contentContainer : {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    text : {
        fontSize: 30,
        height: 30,
        textAlignVertical: "center",
    },
    repeatPressable : {
        marginHorizontal: 10,
        backgroundColor: "#CA2E55",
        borderRadius: 50,
        justifyContent: "center",
        height: 15,
        paddingHorizontal: 5,
    },
    pressableText: {
        fontSize: 9,
        color: "#333",
        height: 9,
    },
    week : {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignContent: "stretch",
    },
    day : {
        textAlign: "center",
        fontSize: 12,
        height: 12,
        fontWeight: "800",
        color: "#333",

    },
    switch : {
        flex : 2,
    }
})