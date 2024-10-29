import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabLayout from '../app/(drawer)/(tabs)/_layout';

export default function HomePage() {
  const insets = useSafeAreaInsets(); // Get safe area insets

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
    >
      <Text>Top-level pagee</Text>
    </View>
  );
}
