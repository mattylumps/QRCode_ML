import React from 'react';
import { Button } from 'react-native-paper';
import {getStyles}from './defaultCSS';
import { useFontContext } from '../../Contexts/FontContext';

type props = {
  light: boolean;

};

function Index(props) {
  const { selectedFontConfig } = useFontContext();
  const styles = getStyles(selectedFontConfig);
  const { onPress, title = 'Heeelo', isActive = true, light, icon = "", loading = false, dark= !light, disabled=false } = props;
  const combinestyles = [styles.button, (light ? styles.light : styles.dark)];

  return (
   <Button  {...props} labelStyle={[styles.icon, styles.text, (disabled ? styles.disabled : styles.opacityNormal)]} icon={icon} compact={true} dark mode="contained-tonal"  onPress={onPress} contentStyle={[styles.dimensions, ...combinestyles]}>
      {title}
   </Button>
  );
};

export default Index;
