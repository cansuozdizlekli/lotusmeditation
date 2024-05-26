import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const navigateToDetailPage = (categoryTitle) => {
    console.log("Navigating to detail page for category:", categoryTitle);
    navigation.navigate(categoryTitle);
    // navigation.navigate('Detail', { categoryTitle });
  };

  return (
    <View style={styles.homescreen}>
      <Text style={styles.greeting}>Good Morning</Text>

      <View style={styles.infoContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.dayCount}>Day 38</Text>
          <Text style={styles.message}>Every day is a step closer</Text>
          <Image
            source={require('/Users/cansuozdizlekli/AwesomeProject/assets/calendar.png')}
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.imageContainer}>
          <View style={styles.calendarYogaWoman}>
            <Image
              source={require('/Users/cansuozdizlekli/AwesomeProject/assets/yoga-woman-image.png')}
              style={{ width: 150, height: 150 }}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>

      <View style={styles.cardsContainer}>
        <Card image={require('/Users/cansuozdizlekli/AwesomeProject/assets/sleep.png')} title="Sleep" />
        <Card image={require('/Users/cansuozdizlekli/AwesomeProject/assets/healing.png')} title="Healing" />
        <Card image={require('/Users/cansuozdizlekli/AwesomeProject/assets/calm.png')} title="Calm" />
        <Card image={require('/Users/cansuozdizlekli/AwesomeProject/assets/relax.png')} title="Relax" />
      </View>

      <View style={styles.categoriesContainer}>
        <CategoryCard image={require('/Users/cansuozdizlekli/AwesomeProject/assets/yoga-card.png')} title="Yoga" navigateToDetailPage={navigateToDetailPage} />
        <CategoryCard image={require('/Users/cansuozdizlekli/AwesomeProject/assets/blog-card.png')} title="Blog" navigateToDetailPage={navigateToDetailPage} />
      </View>

      <View style={styles.categoriesContainer}>
        <CategoryCard image={require('/Users/cansuozdizlekli/AwesomeProject/assets/meditation-card.png')} title="Meditation" navigateToDetailPage={navigateToDetailPage} />
        <CategoryCard image={require('/Users/cansuozdizlekli/AwesomeProject/assets/breath-card.png')} title="Breath" navigateToDetailPage={navigateToDetailPage} />
      </View>


    </View>
  );
};

const Card = ({ image, title }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImageContainer}>
        <Image source={image} style={styles.cardImage} />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
  );
};

const CategoryCard = ({ image, title, navigateToDetailPage }) => {
  const handlePress = () => {
    navigateToDetailPage(title)
  };

  return (
    <TouchableOpacity style={styles.categoryCard} onPress={handlePress}>
      <Image source={image} style={styles.categoryImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  homescreen: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  greeting: {
    fontSize: 32,
    paddingTop: 70,
    marginLeft: 20,
    width: 150,
    fontWeight: "600",
    lineHeight: 30
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 20,
    paddingVertical: 10,
    paddingTop: 10,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10
  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    marginLeft: 20,
  },
  calendarYogaWoman: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  dayCount: {
    fontSize: 16,
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
  },

  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  calendarIcon: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },

  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  cardImageContainer: {
    backgroundColor: "#F5F5F5",
    paddingTop: 20,
    paddingBottom: 20,
    padding: 6,
    borderRadius: 15,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    margin: 2,

  },
  cardImage: {
    width: 32,
    height: 32,
    margin: 10
  },
  cardTitle: {
    fontSize: 13,
    marginTop: 5,
    fontWeight: "400"
  },

  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  categoryCard: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Görüntüyü kapsayacak şekilde sığdır
  },
  categoryTitle: {
    position: 'absolute',
    top: 8,
    left: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },


});

export default HomeScreen;
