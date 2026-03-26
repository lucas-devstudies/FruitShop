import { View, Text } from "react-native";
import {styles} from './styles.js'
import { SafeAreaView } from "react-native-safe-area-context";

export function Navbar(){
    return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>FRUITSHOP</Text>
      </View>
    </SafeAreaView>
  );
}