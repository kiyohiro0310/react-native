import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={{ padding: 50, flexDirection: "row", width: "80%", height: 300, justifyContent: 'space-between', alignItems: 'stretch' }}>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "yellow",
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
      {/* <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goals...</Text>
      </View> */}
    </View>
  );
}

// const styles = StyleSheet.create({
//   appContainer: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between"
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#cccccc',
//     width: '80%',
//     marginRight: 8,
//     padding: 8
//   }
// });
