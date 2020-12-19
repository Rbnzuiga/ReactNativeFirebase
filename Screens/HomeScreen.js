
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container2}>
        
               <Text style = {styles.container}>Videojuegos</Text>
            
         
                <Image style={styles.imagesize}
                    source={require('../assets/hZelda.png')}
                />



        </View>

    )
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 200,
        fontSize: 50,
    },

    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      
    },

    imagesize: {
        width: 500,
        height: 500,
    },
})
