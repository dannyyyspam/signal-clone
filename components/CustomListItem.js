import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: "https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png",
        }}
      />
      <ListItem.Content>
        <ListItem.Title styles={{ fontWeight: "800" }}>
          Signal Clone Chat
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test Subtitle This is a test Subtitle This is a test
          Subtitle This is a test Subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
