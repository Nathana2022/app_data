import React from 'react';
import {Image} from 'react-native';
import {Text, TouchableOpacity, View} from 'react-native';

const IntroPage = (): React.JSX.Element => {
  return (
    <View>
      <Image source={require('../../../images/tweet-profile-photo.png')} />
      <Text>Somba Na Tshombo</Text>
      <TouchableOpacity>
        <Text>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IntroPage;
