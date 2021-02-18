// components/Task.stories.js
import * as React from "react";
import { View } from "react-native";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import Button from "../Button";
export const button = {
  backgroundColor: "black",
  textColor: "white",
  buttonText: "buttonText",
  changeLink: console.log("change link"),
};

export const actions = {
  changeLink: action("changeLink"),
};
storiesOf("Button", module)
  .addDecorator((story) => <View>{story()}</View>)
  .add("default", () => <Button button={button} {...actions} />)
  .add("clicked", () => (
    <Button button={{ ...button, state: "BUTTON_CLICKED" }} {...actions} />
  ));
