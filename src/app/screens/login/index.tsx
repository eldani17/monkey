import React from 'react';
import { SafeAreaView, Image, Button } from 'react-native';
import logo from '@assets/logo.png';
import topLogin from '@assets/topLogin.png';

import styles from './styles';

interface props {
  switchViewCustom: (view: string) => void;
}

function Login({ switchViewCustom }: props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={topLogin} style={styles.imageTopLogin} />
      <Image source={logo} style={styles.imageLogo} />
      <Button onPress={() => switchViewCustom('splash')} title="Ir a Splash" />
    </SafeAreaView>
  );
}

export default Login;
