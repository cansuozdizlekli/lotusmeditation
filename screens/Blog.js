import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const BlogScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate('DetailScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginTop: 10 }}>Good morning</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer} nestedScrollEnabled={true}>
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Good morning"
            description="Feeling like you're constantly banging your head against a wall for whatever reason can prevent you from feeling strong and secure all the time. However, learning to self-heal is a powerful step toward breaking down those walls and rediscovering your inner peace."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Self-healing"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            onPress={handleCardPress}
          />
          {/* Diğer kartlar buraya eklenebilir */}
        </View>
      </ScrollView>
    </View>
  );
};

const Card = ({ image, title, description }) => {
  const navigation = useNavigation();

  const handleDetailPress = () => {
    navigation.navigate('DetailScreen');
  };

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
        <TouchableOpacity onPress={handleDetailPress} style={styles.detailButton}>
          <Ionicons name="arrow-forward-outline" size={24} color="#9EC0BF" />
        </TouchableOpacity>
      </View>
      <Image source={image} style={styles.cardImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Ekranın arka plan rengi
  },
  scrollContainer: {
  },
  cardContainer: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#F5F5F5', // Kartın arka plan rengi
    padding: 20,
    marginVertical: 10,
    borderRadius: 16, // Kartın köşe yarıçapı
    elevation: 3,
    flexDirection: 'row',
    marginHorizontal: 15,
    height: 150,
  },
  cardImage: {
    width: 120,
    height: 125,
  },
  cardContent: {
    flex: 1,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F1C3AC',
    marginHorizontal: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 10,
    fontWeight: "300",
    fontSize: 14,
    marginBottom: 40
  },
  detailButton: {
    marginTop: -30,
    marginLeft: 10,
  },
});

export default BlogScreen;
