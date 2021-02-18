// components/Task.stories.js
import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import Images from "../Images";
export const button = {
  ImageSrc: "image",
};

storiesOf("Images", module)
  .addDecorator((story) => <View>{story()}</View>)
  .add("default", () => <Images ImageSrc={ImageSrc} {...actions} />);
