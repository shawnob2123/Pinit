import * as React from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors, fonts, sizes, weights } from '../src/theme/theme';

// APP STACK
import HomeScreen from '../src/screens/App/Home/HomeScreen';
import AnabolicsScreen from '../src/screens/App/Anabolics/AnabolicsScreen';
import AnalyticsScreen from '../src/screens/App/Analytics/AnalyticsScreen';
import SettingScreen from '../src/screens/Settings/SettingScreen';
// SETTING STACK

import RemindersScreen from '../src/screens/Settings/RemindersScreen';
import UpgradeScreen from '../src/screens/Settings/UpgradeScreen';
import SupportScreen from '../src/screens/Settings/SupportScreen';
import PrivacyPolicyScreen from '../src/screens/Settings/PrivacyPolicyScreen';
// ANABOLICS STACK
import ViewAnabolicsScreen from '../src/screens/App/Anabolics/ViewAnabolicsScreen';
// EDIT PROFILE STACK
import EditProfileScreen from '../src/screens/Settings/EditProfile/EditProfileScreen';
import ResetPasswordScreen from '../src/screens/Settings/EditProfile/ResetPasswordScreen';
// CYCLE STACK
import AddCompoundScreen from '../src/screens/App/Home/AddCompoundScreen';


const CustomTabBarButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow,

      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: colors.primary,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>

  );
};

const Tab = createMaterialBottomTabNavigator();

// HOME BOTTOM TAB NAVIGATION
export default Tabs = ({ children }) => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: colors.tab,
        position: 'absolute',
        borderRadius: 15,
        paddingHorizontal: 15,
        height: 80,
        
      }}
      activeColor={colors.white}
      inactiveColor={colors.gray}
      shifting={true}
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Forum') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'HomeNav') {
            iconName = focused ? 'layers' : 'layers-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (route.name === 'AnabolicsTab') {
            iconName = focused ? 'barbell' : 'barbell-outline';
          }
          return <Ionicons name={iconName} size={24} color={colors.primary} />;
        },
      })}
    >
      <Tab.Screen
        name='HomeNav'
        options={{
          tabBarLabel: <Text style={styles.text}>Cycles</Text>,
        }}
        component={Home}
      />
      <Tab.Screen
        name='AnabolicsTab'
        options={{
          tabBarLabel: <Text style={styles.text}>Anabolics</Text>,
        }}
        component={Anabolics}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/add.png')}
              resizeMode='contain'
              style={{height: 25, width: 25}}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
          tabBarLabel: () => <Text>{''}</Text>,
        }}
        name='Add Compound'
        component={AddCompoundScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: <Text style={styles.text}>Stats</Text>,
        }}
        name='Analytics'
        component={AnalyticsScreen}
      />
      <Tab.Screen
        name='Settings'
        options={{
          tabBarLabel: <Text style={styles.text}>Settings</Text>,
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};
// HOME
const HomeStack = createNativeStackNavigator();
export const Home = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        
      }}
    >
      <HomeStack.Screen
        headerShown={false}
        name='Home'
        component={HomeScreen}
      />
    </HomeStack.Navigator>
  );
};

// SETTINGS

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
      <Stack.Screen name='Settings Nav' component={SettingScreen} />
      <Stack.Screen name='Edit Profile' component={EditProfile} />
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
      <AnabolicsStack.Screen name='Anabolics' component={AnabolicsScreen} />
      <AnabolicsStack.Screen
        screenOptions={{
          headerShown: true,
          headerTitle: '',
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
        name='View Anabolics'
        component={ViewAnabolicsScreen}
      />
    </AnabolicsStack.Navigator>
  );
};

const EditProfileStack = createNativeStackNavigator();
export const EditProfile = () => {
  return (
    <EditProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <EditProfileStack.Screen
        name='Edit Profile Stack'
        component={EditProfileScreen}
      />
      <EditProfileStack.Screen
        name='Reset Password'
        component={ResetPasswordScreen}
      />
    </EditProfileStack.Navigator>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.xsm,
    fontFamily: fonts.primary,
    fontWeight: weights.regular,
    color: colors.primary,
  },
  shadow: {
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
