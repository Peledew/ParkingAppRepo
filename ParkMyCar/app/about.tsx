import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import styles from '../styles/baseStyles';

export default function Page() {
  return (
    <View>
      <Text style={styles.title}>This is about page</Text>
    </View>
  );
}
