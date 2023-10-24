import React from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import theme from '../theme.tsx';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter: {
    textAlign: 'center'
  }
})
interface StyledTextProps {
  align?: 'center';
  color?: 'primary' | 'secondary';
  fontSize?: 'subheading';
  fontWeight?:'normal' | 'bold';
  style?: StyleProp<TextStyle>; // Usar StyleProp para tipos de estilo
  children: React.ReactNode;
}

const StyledText: React.FC<StyledTextProps> = ({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    align === 'center' && styles.textAlignCenter,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default StyledText;