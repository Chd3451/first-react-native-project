import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import StyledText from './StyledText.tsx';
import Constants from 'expo-constants';
import theme from '../theme.tsx';
import { Link, useLocation } from 'react-router-native';

// Define tipos o interfaces para las propiedades
interface AppBarTabProps {
  to: string;
  children: React.ReactNode;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 15,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary,
  },
});

const AppBarTab: React.FC<AppBarTabProps> = ({ children, to }) => {
  const { pathname } = useLocation();
  const active = pathname === to;

  const textStyles = [
    styles.text,
    active && styles.active,
  ];

  return (
    <Link to={to}>
        <TouchableWithoutFeedback>
            <StyledText fontWeight='bold' style={textStyles}>
                {children}
            </StyledText>
        </TouchableWithoutFeedback>
    </Link>

  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
        <AppBarTab to='/'>Repositories</AppBarTab>
        <AppBarTab to='/signin'>Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;

