import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

export default function RadioButton({options,onPress}) {
    const [value, setValue] = useState(null);

    const handlePress = (selected) => {
        setValue(selected);
        onPress(selected);
    }

  return (
    <>
    {
    options.map((option) => (
    <View key={option.value} style={styles.buttonContainer}>
        <Text style={styles.label}>{option.label}</Text>
        <Pressable style={styles.circle} onPress={() => handlePress(option.value)} >
            {value === option.value && <View style={styles.checkedCircle} />}
        </Pressable>
    </View>
    ))}
    </>
  );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
    },
    label: {
        marginRight: 10,
    },
    circle: {
        height: 28,
        width: 28,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkedCircle: {
        width: 15,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#000',
    }
})
