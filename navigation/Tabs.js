import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, sizes, weights } from '../src/theme/theme';

// APP STACK
import CalendarScreen from '../src/screens/App/Calendar/CalendarScreen';
import CycleScreen from '../src/screens/App/Cycle/CycleScreen';
import AnabolicsScreen from '../src/screens/App/Anabolics/AnabolicsScreen';
import SettingScreen from '../src/screens/Settings/SettingScreen';
// SETTING STACK
import EditProfileScreen from '../src/screens/Settings/EditProfileScreen';
import RemindersScreen from '../src/screens/Settings/RemindersScreen';
import UpgradeScreen from '../src/screens/Settings/UpgradeScreen';
import SupportScreen from '../src/screens/Settings/SupportScreen';
import PrivacyPolicyScreen from '../src/screens/Settings/PrivacyPolicyScreen';
// ANABOLICS STACK
import ViewAnabolicsScreen from '../src/screens/App/Anabolics/ViewAnabolicsScreen';




const Tab = createMaterialBottomTabNavigator();

export default Tabs = ({children}) => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.tab,
        position: 'absolute',
        borderRadius: 10,
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

          if (route.name === 'Forum') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Cycles') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'AnabolicsTab') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          }
          return <Ionicons name={iconName} size={24} color={colors.primary} />;
        },
      })}>
      <Tab.Screen
        name="Cycles"
        options={{
          tabBarLabel: <Text style={styles.text}>Cycles</Text>,
        }}
        component={CycleScreen}
      />
      {/* <Tab.Screen
        name="Forum"
        options={{
          tabBarLabel: <Text style={styles.text}>Forum</Text>,
        }}
        component={CalendarScreen}
      /> */}
      <Tab.Screen
        name="AnabolicsTab"
        options={{
          tabBarLabel: <Text style={styles.text}>Anabolics</Text>,
        }}
        component={Anabolics}
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
      <Stack.Screen name="Settings Nav" component={SettingScreen} />
      <Stack.Screen name='Edit Profile' component={EditProfileScreen} />
      <Stack.Screen name='Reminders' component={RemindersScreen} />
      <Stack.Screen name='Support' component={SupportScreen} />
      <Stack.Screen name='Upgrade' component={UpgradeScreen} />
      <Stack.Screen name='Privacy Policy' component={PrivacyPolicyScreen} />
    </Stack.Navigator>
  );
};

const AnabolicsStack = createNativeStackNavigator();
export const Anabolics = () => { 
  return (
    <AnabolicsStack.Navigator
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
      <AnabolicsStack.Screen name="Anabolics" component={AnabolicsScreen} />
      <AnabolicsStack.Screen
        screenOptions={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.background,
          }
        }}
        name='View Anabolics' component={ViewAnabolicsScreen} />
    </AnabolicsStack.Navigator>
  );
}
  

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.sm,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    color: colors.primary,
  },
});
