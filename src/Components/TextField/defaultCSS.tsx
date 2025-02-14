import {StyleSheet} from 'react-native';
import {getStyles as getDefaultStyles} from '../Styles/defaultCSS';
import {FontConfigType} from '../../Contexts/FontContext';

export const getStyles = (fontConfig: FontConfigType) => {
  const styles = getDefaultStyles(fontConfig);

  const stylesheet = StyleSheet.create({
    input: {
      height: 50,
      padding: 15,
      borderWidth: 0.5,
      padding: 10,
      gap: 15,
      ...styles.border,
    },
    placeholder: {
      color: '#305070',
      fontSize: styles.textNormal.fontSize,
      fontFamily: styles.textNormal.fontFamily,
    },
    backgroundColor: {backgroundColor: 'black'},
  });
  return stylesheet;
};
