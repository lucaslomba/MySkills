import React from "react";
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export function SkillCard({skill}){
    return(
        <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={.7}
        >
            <Text style={styles.textSkill}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textSkill: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonSkill: {
        marginVertical: 10,
        backgroundColor: '#1f1e25',
        padding: 10,
        borderRadius: 7,
        alignItems: 'center'
    }
})