import { Link } from 'expo-router';
import { Text, View } from 'react-native';
import styles from '../baseStyles';

export default function Page() {
    return (
        <View>
            <Text style={styles.title}>About page</Text>
            <Link href="/">Home Page</Link>
        </View>
    );
}
