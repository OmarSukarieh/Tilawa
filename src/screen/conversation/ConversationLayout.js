import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from './auth/Login';
import Register from './auth/Register';
import ChatScreen from './chat/ChatScreen';
import TypingScreen from './chat/TypingScreen';

import { useChatContext } from '../../context/ChatContext';

const ConversationLayout = () => {
  const { userTeacherData } = useChatContext();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!userTeacherData ? (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Stack.Screen name="ChatScreen" component={ChatScreen} />
          <Stack.Screen name="TypingScreen" component={TypingScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ConversationLayout;
