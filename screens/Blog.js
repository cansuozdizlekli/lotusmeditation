import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const BlogScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    toggleExpansion()
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 20, marginBottom: -10, marginTop: 10 }}>Blog</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer} nestedScrollEnabled={true}>
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="The Importance of Breath Control"
            description="Breath control, or pranayama, is a crucial aspect of yoga. Techniques like Ujjayi breath and Alternate Nostril Breathing help regulate the nervous system, improve focus, and enhance the flow of energy. Incorporating breath control into your practice can deepen your yoga experience and improve overall health."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="The Benefits of Daily Meditation"
            description="Meditation is not just a practice but a way of life that can profoundly improve your mental and physical well-being. Incorporating meditation into your daily routine can reduce stress, improve concentration, and enhance emotional health. By dedicating just a few minutes each day to mindfulness, you can experience a clearer mind, better sleep, and a deeper sense of peace. Discover how daily meditation can transform your life, one breath at a time."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Meditation for Better Sleep "
            description="If you struggle with sleep, meditation can be a powerful tool to help you unwind and prepare for restful sleep. Practicing meditation before bedtime can calm your mind and body, making it easier to fall asleep and stay asleep. Techniques such as guided sleep meditations, body scans, and mindful breathing can promote relaxation and reduce insomnia. Create a peaceful bedtime routine that includes meditation to enhance your sleep quality."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Yoga Poses for Stress Relief"
            description="Certain yoga poses are particularly effective for relieving stress. Try poses like Forward Bend, Legs-Up-The-Wall, and Corpse Pose to calm your mind and relax your body. These poses help reduce tension and promote a sense of peace and relaxation.."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Creating a Yoga Routine at Home"
            description="Creating a home yoga routine is convenient and effective. Choose a quiet space, set a regular practice time, and use online classes or apps for guidance. Start with short sessions and gradually increase the duration. Consistency and dedication are key to developing a successful home practice."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Embracing Positive Emotions"
            description="Meditation encourages the cultivation of positive emotions such as gratitude, compassion, and joy. Mindfulness meditation, in particular, helps increase awareness and appreciation for the present moment. By focusing on positive thoughts and feelings during meditation, you can enhance your emotional health and foster a more optimistic outlook on life."
            onPress={handleCardPress}
          />
          <Card
            image={require('/Users/cansuozdizlekli/AwesomeProject/assets/getstarted-image.png')}
            title="Meditation for Managing Stress"
            description="Meditation is a powerful tool for managing stress. By focusing on the breath and being present in the moment, meditation helps calm the mind and reduce the effects of stress. Regular practice can lower cortisol levels, improve mood, and enhance overall well-being. Even a few minutes of daily meditation can make a significant difference in how you handle stress."
            onPress={handleCardPress}
          />

        </View>
      </ScrollView>
    </View>
  );
};

const Card = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(true); // Buradaki değeri false olarak ayarladık.

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const navigation = useNavigation();
  const handleDetailPress = () => {
    toggleExpansion()
  };

  return (
    <TouchableOpacity style={[styles.card, expanded ? styles.expandedCard : null]} onPress={toggleExpansion}>
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={[styles.cardDescription, expanded ? styles.expandedDescription : null]}>{description}</Text>
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
    backgroundColor: '#fff',
  },
  scrollContainer: {},
  cardContainer: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#F5F5F5',
    padding: 20,
    marginVertical: 10,
    borderRadius: 16,
    elevation: 3,
    flexDirection: 'row',
    marginHorizontal: 15,
    minHeight: 100,
  },
  expandedCard: {
    height: 'auto',
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
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    marginVertical: 10,
    marginLeft: 10,
    fontWeight: '300',
    fontSize: 14,
    overflow: 'hidden',
    lineHeight: 20,
  },
  expandedDescription: {
    maxHeight: 150,
  },
  detailButton: {
    position: 'absolute',
    top: 160,
    right: -80,
  },
});

export default BlogScreen;