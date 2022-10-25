import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, sizes, weights } from '../src/theme/theme';

// APP STACK
import CalendarScreen from '../src/screens/App/Calendar/CalendarScreen';
import CycleScreen from '../src/screens/App/Cycle/CycleScreen';
import ProductScreen from '../src/screens/App/Products/ProductScreen';
import SettingScreen from '../src/screens/Settings/SettingScreen';
// SETTING STACK
import EditProfileScreen from '../src/screens/Settings/EditProfileScreen';
import FAQScreen from '../src/screens/Settings/FAQScreen';
import UpgradeScreen from '../src/screens/Settings/UpgradeScreen';
import SupportScreen from '../src/screens/Settings/SupportScreen';




const Tab = createMaterialBottomTabNavigator();

export default Tabs = ({children}) => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.primary,
        position: 'absolute',
        borderRadius: 25,
        paddingHorizontal: 25,
        height: 80,
      }}
      activeColor={colors.white}
      inactiveColor={colors.gray}
      shifting={true}
      labeled={true}
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Cycles') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'Products') {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          }
          return <Ionicons name={iconName} size={24} color={colors.white} />;
        },
      })}>
      <Tab.Screen
        name="Cycles"
        options={{
          tabBarLabel: <Text style={styles.text}>Cycles</Text>,
        }}
        component={CycleScreen}
      />
      <Tab.Screen
        name="Calendar"
        options={{
          tabBarLabel: <Text style={styles.text}>Calendar</Text>,
        }}
        component={CalendarScreen}
      />
      <Tab.Screen
        name="Products"
        options={{
          tabBarLabel: <Text style={styles.text}>Products</Text>,
        }}
        component={ProductScreen}
      />
      <Tab.Screen name="Settings"
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
        }}
        component={Settings} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
export const Settings = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: 'transparent',
          elevation: 0,
          shadowOpacity: 0,
          
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name='Edit Profile' component={EditProfileScreen} />
      <Stack.Screen name='FAQ' component={FAQScreen} />
      <Stack.Screen name='Support' component={SupportScreen} />
      <Stack.Screen name='Upgrade' component={UpgradeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    color: colors.white,
  },
});
