// components/Task.js
import * as React from "react";
import { SafeAreaView, View, Button, StyleSheet, Image } from "react-native";

export default function ImageComponent({ button: { ImageSrc } }) {
  return (
    <SafeAreaView>
      <View>
        <Image ImageSrc />
      </View>
    </SafeAreaView>
  );
}
