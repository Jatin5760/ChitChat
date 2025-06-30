import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/auth.styles.js";


export default function Index() {
  return (
    <View style={styles.container}>

      <Link href={"/notifications"}>Feed Screen in Tabs</Link>



      {/* <Text style={styles.title}>Hello</Text> */}

      {/* <Image 
      source={require("../assets/images/icon.png")}
      style={{width:100, height:100}}/> */}

      {/* <Image 
      source={{uri: "https://images.unsplash.com/photo-1748392029321-58793571f850?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"}}
      style={{
        width: 200,
        height: 200,
        resizeMode: "cover"
      }}/>

      <Link href={"/notifications"}> Visit Notifications Screen</Link>
       */}
    
      {/* <TouchableOpacity onPress={() => alert("You touched")}>
        <Text>Touch Me</Text>
      </TouchableOpacity> */}

      {/* <Pressable onPress={()=> alert("You pressed me")}>
        <Text> Press Me</Text>
      </Pressable> */}
    </View>
  );
}

