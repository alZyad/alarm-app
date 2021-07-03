import React, { useState } from 'react'
import { View, Text, Switch, StyleSheet, Pressable } from 'react-native'
import Day from "../components/Day"

export default (props: {alarm: any, key: number}) => {
    const [activated, setActivated] = useState(false);
    const week = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
    const [allWeek, setallWeek] = useState(false);

    return (
        <View style={styles.alarm}>

            <View style={styles.textContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.text}>
                        {props.alarm.time.slice(0,2)+":"+props.alarm.time.slice(2)}
                    </Text>
                    <Pressable onPress={()=>{setallWeek(!allWeek);  }} style={styles.repeatPressable}>
                        <Text style={styles.pressableText}>{allWeek ? "Repeat all week" : "Don't repeat"}</Text>
                    </Pressable>
                </View>
                <View style={styles.week}>
                    {week.map((day, index)=>
                            <Day day={day} key={index} />
                        )}
                </View>
            </View>
            <Switch thumbColor="#CA2E55" onValueChange={()=>{setActivated(!activated)}} value={activated} style={styles.switch}/>
        </View>
    )
}


const styles = StyleSheet.create({
    alarm : {
        flexDirection: "row",
        width: "90vw",
        backgroundColor: "#333",
        padding: 20,
        margin: 20,
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