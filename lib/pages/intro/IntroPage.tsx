import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';

const IntroPage = (): React.JSX.Element => {
  return (
    <View style={styles.parent}>
      <Image style={styles.logo} source={require('../../../images/tweet-profile-photo.png')} />
      <Text>Somba Na Tshombo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    parent : {
        flex:1,
        backgroundColor: "whrite",
        justifyContent: 'center', // Centrer horizontalement
        alignItems: 'center', // Centrer verticalement
        padding: 30,
    },
    logo : {
        height:150,
        width:150,
    },
    text : {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    button : {
        backgroundColor: '',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width:100
    },
})

export default IntroPage;
