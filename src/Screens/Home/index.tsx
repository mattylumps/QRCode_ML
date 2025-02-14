// src/Screens/Home/index.tsx

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ColorblindProvider} from '../../Contexts/ColorblindContext';
import ColorblindFilter from '../../Components/ColorblindFilter';

import AuthProvider from '../../Components/Authentication/AuthProvider';

import WelcomeToSeal from '../WelcomeToSeal';
import Login from '../Login';

import Settings from '../Settings';

import PersonalPage from '../PersonalPage';
import AccountSignUp from '../AccountSignUp';
import HowSealWorks from '../HowSEALWorks';
import WebCamFeed from '../../Components/WebCamFeed';
import Break from '../Break';
import BottomNav from '../../Features/BottomNavigation';
import ColorblindSettings from '../ColorblindSettings';

const Stack = createNativeStackNavigator();

const Index = () => {
  return (
    <>
     <AuthProvider>
      <Stack.Navigator
        initialRouteName="WebCamFeed"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={WelcomeToSeal} />
        <Stack.Screen
          name="ColorblindSettings"
          component={ColorblindSettings}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Personal" component={PersonalPage} />
        <Stack.Screen name="AccountSignUp" component={AccountSignUp} />
        {/* the "Main "screen below renders the bottom Nav which wraps the relevant pages it is included on */}
        <Stack.Screen name="Main" component={BottomNav} />
        <Stack.Screen name="HowSealWorks" component={HowSealWorks} />
        {/* Commented for testing, uncomment to enable break screen*/}
        <Stack.Screen name="Break" component={Break} />
        {/* Commented for testing, to enable camera feed uncomment this */}
        {/* <Stack.Screen name="WebCamFeed" component={WebCamFeed}  /> */}
      </Stack.Navigator>
      <ColorblindFilter />
      </AuthProvider>
    </>
  );
};

export default Index;

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import WelcomeToSeal from '../WelcomeToSeal';
// import Login from '../Login';
// import PersonalPage from '../PersonalPage';
// import AccountSignUp from '../AccountSignUp';
// import HowSealWorks from '../HowSEALWorks';
// import Achievements from '../Achievements';

// // Account signup is currently being used as a placeholder for the profile page
// // This is present in the StackNavigators file which has been created to handle the navigation
// // between the different pages (Home and Profile)

// const Stack = createNativeStackNavigator();

// const Index = ({navigate}) => {
//   return (

//       <Stack.Navigator initialRouteName={WelcomeToSeal} screenOptions={{
//         headerShown: false
//       }}>
//         <Stack.Screen name="Welcome" component={WelcomeToSeal}  />
//         <Stack.Screen name="Login" component={Login}  />
//         <Stack.Screen name="Personal" component={PersonalPage}  />
//         <Stack.Screen name="AccountSignUp" component={AccountSignUp}  />
//         {/* the "Main "screen below renders the bottom Nav which wraps the relevant pages it is included on */}
//         <Stack.Screen name="Main" component={BottomNav}  />
//         <Stack.Screen name="HowSealWorks" component={HowSealWorks}  />
//         <Stack.Screen name="Achievements" component={Achievements}  />

//       </Stack.Navigator>

//   );
// };

// export default Index;
