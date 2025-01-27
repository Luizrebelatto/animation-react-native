import React from "react";
import { View, StyleSheet } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

export default function NewtonPendulum(){
    return(
        <View style={{ alignItems: "center", marginTop: 60 }}>
            <View style={styles.bar}>
                <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                    <View style={styles.wrapperLine}>
                        <View style={styles.line}/>
                        <Ionicons name="bowling-ball-outline" size={40} color="#999B9B"/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    bar: {
        width: "80%",
        height: 30,
        borderRadius: 10,
        backgroundColor: '#999B9B'
    },
    line: {
        width: 2,
        height: 200,
        backgroundColor: '#999B9B'

    },
    wrapperLine: {
        flexDirection: 'column',
        height: 300,
        alignItems: 'center',
    }
})
