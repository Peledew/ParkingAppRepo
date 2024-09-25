import { Pressable, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>Info Page</Text>
      <Link href="/about">About</Link>
      <Link href="/">Home</Link>
    </View>
  );
}
