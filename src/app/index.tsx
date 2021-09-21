import React, { useState } from 'react';

import Splash from './screens/splash/index';
import Login from './screens/login/index';

const App = () => {
  const [switchView, setSwitchView] = useState('splash');

  const onPressSwitch = (view: string) => {
    setSwitchView(view);
  };

  let contentView = <Splash switchViewCustom={onPressSwitch} />;

  if (switchView !== 'splash') {
    contentView = <Login switchViewCustom={onPressSwitch} />;
  }
  return <>{contentView}</>;
};

export default App;
