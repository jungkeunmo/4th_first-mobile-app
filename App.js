import { View, Text, StyleSheet, Button } from "react-native";

const App = () => {
  const buttonClickHandler = () => {
    alert("why Click me?");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapperTop}>
          <Button onPress={() => buttonClickHandler()} title="CLICK TO ME!"/>
      </View>
      <View style={styles.wrapperBottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  wrapperTop: {
    width: "100%",
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },

  wrapperBottom: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
  }
});

export default App;