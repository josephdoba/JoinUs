import {Button} from '@rneui/base';
import {useThemeMode} from '@rneui/themed';
import React, {useState} from 'react';

const ThemeSetter = () => {
  const {mode, setMode} = useThemeMode();

  return <Button onPress={() => setMode('dark')} title={mode} />;
};

export default ThemeSetter;
