import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";

const CategoryButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButtonContainer}>
    <Text style={styles.categoryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const handlePress = () => {
  return;
};

export default function Categories() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>All Categories</Text>

      <View style={styles.gridStyling}>
        <CategoryButton title={"Books"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Authors"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Podcasts"} onPress={handlePress}></CategoryButton>
        <CategoryButton
          title={"Songs"}
          onPress={handlePress}
        ></CategoryButton>
        <CategoryButton
          title={"Albums"}
          onPress={handlePress}
        ></CategoryButton>
        <CategoryButton
          title={"Bands"}
          onPress={handlePress}
        ></CategoryButton>
        <CategoryButton title={"Movies"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"TV"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Websites"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Eat"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Drink"} onPress={handlePress}></CategoryButton>
        <CategoryButton title={"Misc."} onPress={handlePress}></CategoryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 20,
  },
  categoryButtonContainer: {
    //margin: 1,
    width: 110,
    height: 110,
    alignSelf: "center",
    marginVertical: 10,
    elevation: 1,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 20,
    //paddingHorizontal: 12,
  },
  categoryButtonText: {
    fontSize: 20,
    color: "#000",
    alignSelf: "center",
  },
  gridStyling: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "90%",
    alignSelf: "center",
  },
});
