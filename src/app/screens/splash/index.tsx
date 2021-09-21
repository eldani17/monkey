import React from 'react';
import { SafeAreaView, Image, ImageBackground, Button } from 'react-native';
import logo from '@assets/logo.png';
import background from '@assets/background.png';

import styles from './styles';

function Splash({ switchViewCustom }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Image source={logo} />
      </ImageBackground>
      <Button onPress={() => switchViewCustom('login')} title="Ir a Login" />
    </SafeAreaView>
  );
}

export default Splash;
