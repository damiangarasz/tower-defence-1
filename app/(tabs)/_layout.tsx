import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import { Image, ImageBackground, Text } from "react-native";
import "../globals.css";

export default function RootLayout() {
  const TabIcons = ({ focused, title, icon }: any) => {
    return (
      <>
        <ImageBackground
          source={images.highlight}
          className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 justify-center item-center rounded-full overflow-hidden"
        >
          <Image source={icon} tintColor={"#151312"} className="size-5" />
          <Text>{title}</Text>
        </ImageBackground>
      </>
    );
  };
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Bookmarks",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.save} title="Save" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcons focused={focused} icon={icons.person} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
