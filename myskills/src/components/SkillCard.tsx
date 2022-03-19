import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
    skillName: string;
}

export function SkillCard({skillName, ...rest} : SkillCardProps){
    return(
        <TouchableOpacity 
            style={styles.buttonSkill}
            activeOpacity={.7}
            {...rest}
        >
            <Text style={styles.textSkill}>
                {skillName}
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