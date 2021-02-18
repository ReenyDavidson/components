import * as React from "react";
import { SafeAreaView, View, Button, StyleSheet } from "react-native";


export default function ButtonComponent({
  button: { backgroundColor, textColor, buttonText },
  changeLink,
}) {
  return (
    <SafeAreaView>
      <View>
        <Button
          backgroundColor={styles.backGround}
          textColor={styles.textcolor}
        />
      </View>
    </SafeAreaView>
  );
}

ButtonComponent.propTypes = {
  button: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }),
  changeLink: PropTypes.func,
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: "black",
  },

  textcolor: {
    color: "white",
  },
});
