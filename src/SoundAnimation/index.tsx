import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MotiView } from "@motify/components";
import AntDesign from '@expo/vector-icons/AntDesign';

import { Easing } from 'react-native-reanimated';

export default function SoundAnimation() {
    const [isAnimating, setIsAnimating] = React.useState(false);

    const handlePress = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false)
        }, 3000)
    }

    return (
        <View style={styles.wrapper}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                {isAnimating ? 
                    [...Array(3).keys()].map(index => {
                        return (
                            <MotiView
                                from={{ opacity: 0.7 , scale: 1 }}
                                animate={{ opacity: 0, scale: 4 }}
                                key={index}
                                transition={{
                                    type: 'timing',
                                    duration: 2000,
                                    easing: Easing.out(Easing.ease),
                                    delay: index * 200,
                                    loop: true,
                                    repeatReverse: false, 
                                }}    
                                style={[StyleSheet.absoluteFillObject, styles.dot]}
                            />
                        )
                    })
                : null}
                <AntDesign name="sound" size={150} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    dot: {
        width: 200,
        height: 200,
        borderRadius: 200,
        backgroundColor: 'blue'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#CDD7FD'
    },
    button: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#4B6BE7",
        alignItems: 'center',
        justifyContent: 'center'
    },
})