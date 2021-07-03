import React from 'react'
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
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
        <View style={styles.home}>
            <View style={styles.alarmsView}>
                {alarms.map(alarm => {
                    const AlarmViewProps = {
                        alarm: alarm,
                        key: alarm.id
                    }
                    return(<AlarmView {...AlarmViewProps} />)
                })}
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={()=>null} style={styles.TouchableOpacityStyle} >
                       <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}}
                       style={styles.FloatingButtonStyle} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    home: {
        flexDirection: "column",
        padding: 20,
        height: "100%",
        width: "100%",
        justifyContent: "space-between"
    },
    alarmsView : {

    },
    TouchableOpacityStyle:{
      width: 50,
      height: 50,
      alignSelf: 'flex-end',
    },
   
    FloatingButtonStyle: {
   
      resizeMode: 'contain',
      width: 50,
      height: 50,
    }
  });