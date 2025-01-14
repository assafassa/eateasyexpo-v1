import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import { colors } from "../../constants/colors";

const TabsLayout = React.memo(() => {
  const TabIcon = ({ icon, color, name, focused }) => {
    const iconColor = focused ? colors.green : colors.burgundy;
    const textColor = focused ? colors.green : colors.burgundy;

    return (
      <View className="flex items-center justify-center py-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={iconColor}
          className="w-8 h-8"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: textColor }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.background.offwhite,
            height: 100,
            paddingTop:20,
            alignItems: "center",
            justifyContent: "center",
          }, // Customize background color
          // tabBarActiveTintColor: colors.green,
          // tabBarInactiveTintColor: colors.burgundy,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
                name="cart"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="recipes"
          options={{
            title: "Recipes",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.recipes}
                color={color}
                name="recipes"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
});

export default TabsLayout;
