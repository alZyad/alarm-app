import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import AlarmView from "../components/Alarm"

export class Alarm {
    time: string;
    repeat: boolean;
    days: Array<boolean>;
    id: number;

    constructor(id:number, time: string, repeat: boolean, days: Array<boolean>) {
        this.id = id;
        this.time = time;
        this.repeat = repeat;
        this.days = days;
    }
}

export default function Home(){

    var alarms = [new Alarm(0,"1240", true, [true]), new Alarm(1,"1245", true, [true]) ]

    return (
        <View>
            {alarms.map(alarm => {
                const AlarmViewProps = {
                    alarm: alarm,
                    key: alarm.id
                }
                return(<AlarmView {...AlarmViewProps} />)
            })}
        </View>
    )
}