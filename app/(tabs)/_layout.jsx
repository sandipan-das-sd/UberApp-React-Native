import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabIcon = ({ name, color, focused }) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Icon
        name={name} // 'home' for the home icon
        size={24}
        color={focused ? color : 'gray'} // Change color based on focus
      />
      <Text style={{ color: focused ? color : 'gray' }}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name='home'
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name='home' 
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        
      </Tabs>
    </>
  );
};

export default TabsLayout;
