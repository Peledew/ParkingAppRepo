/* import { Tabs } from 'expo-router';

export default function Layout() {
  return <Tabs />;
} */

/*
import { Stack } from 'expo-router';

export default function Layout() {
  return <Stack />;
}
  */

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import TabLayout from './(tabs)/_layout';
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Drawer>
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Home page',
            }}
           
          />
          <Drawer.Screen
            name="info"
            options={{
              drawerLabel: 'Info',
              title: 'Info page',
            }}
          />
          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'About',
              title: 'About page',
            }}
          />
          <Drawer.Screen
            name="+not-found"
            options={{
              drawerLabel: '',
              title: 'This page has not been found!',
              drawerItemStyle: { display: 'none' },
            }}
          />

          <Drawer.Screen
            name="(tabs)"
            options={{
              drawerLabel: 'tabs',
              title: 'Tabs',
              // drawerItemStyle: { display: 'none' },
            }}
          />
        </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
