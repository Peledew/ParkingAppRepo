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

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'Home page',
          }}
        />

        <Drawer.Screen
          name="info" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Info',
            title: 'Info page',
          }}
        />

        <Drawer.Screen
          name="about" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'About',
            title: 'About page',
          }}
        />

        <Drawer.Screen
          name="+not-found" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: '',
            title: 'This page has not been found!',
            drawerItemStyle: { display: 'none' }
          }}
        />

        

      </Drawer>
    </GestureHandlerRootView>
  );
}

