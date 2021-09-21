import React from 'react';
import { SafeAreaView, Image, ImageBackground, Button } from 'react-native';
import logo from '@assets/logo.png';
import background from '@assets/background.png';

import styles from './styles';

interface props {
  switchViewCustom: (view: string) => void;
}

function Splash({ switchViewCustom }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.imageBackground}>
        <Image source={logo} />
        <Button onPress={() => switchViewCustom('login')} title="Ir a Login" />
      </ImageBackground>
    </SafeAreaView>
  );
}

export default Splash;
