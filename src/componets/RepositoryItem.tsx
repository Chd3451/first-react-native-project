import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats.tsx';
import theme from '../theme.tsx';

interface RepositoryItemProps {
  id: string;
  ownerAvatarUrl: string;
  fullName: string;
  description?: string; // Propiedad opcional
  language: string;
  stargazersCount: number;
  forksCount: number;
  reviewCount: number;
  ratingAverage: number;
  // Otras propiedades
}

const RepositoryItemHeader: React.FC<RepositoryItemProps> = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1 }}>
      <StyledText fontWeight='bold'>{fullName}</StyledText>
      <StyledText color='secondary'>{description}</StyledText>
      <StyledText style={styles.language}>{language}</StyledText>
    </View>
  </View>
);

const RepositoryItem: React.FC<RepositoryItemProps> = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats
      stargazersCount={props.stargazersCount}
      forksCount={props.forksCount}
      reviewCount={props.reviewCount}
      ratingAverage={props.ratingAverage}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  language: {
    padding: 4,
    color: theme.colors.textPrimary, // Cambié 'white' a 'textPrimary' para que coincida con el tema
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
});

export default RepositoryItem;
