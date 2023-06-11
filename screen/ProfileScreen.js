import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar
          rounded
          source={require('../images/profile2.png')}
          size="xlarge"
          containerStyle={styles.avatarContainer}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>User</Text>
          <Text style={styles.stats}>Followers: 1000 | Following: 500 | Friends: 200</Text>
        </View>
      </View>
      <Card containerStyle={styles.cardContainer}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Card.Divider />
        <Text style={styles.description}>
          Halo! Mohon Maaf untuk halaman profile masih tahap pengembangan.
          Terima kasih atas pengertiannya hehe.
        </Text>
      </Card>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Buat Resep Baru</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatarContainer: {
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  stats: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  cardContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#ff4500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ProfileScreen;
