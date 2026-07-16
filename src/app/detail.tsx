import { useLocalSearchParams } from "expo-router";

import {
    Image,

    SafeAreaView,

    StyleSheet,

    Text,

    View,
} from "react-native";



export default function DetailScreen() {

  const { name, artist, price, image } = useLocalSearchParams();



  return (

    <SafeAreaView style={styles.container}>

      <Image

        source={{ uri: image as string }}

        style={styles.image}

      />



      <View style={styles.content}>

        <Text style={styles.name}>{name}</Text>



        <Text style={styles.artist}>{artist}</Text>



        <Text style={styles.price}>

          ฿ {price}

        </Text>

      </View>

    </SafeAreaView>

  );

}



const styles = StyleSheet.create({

    container: {

      flex: 1,

      backgroundColor: "#fff",

    },

  

    image: {

      width: "100%",

      height: 320,

      resizeMode: "contain",

    },

  

    content: {

      padding: 20,

    },

  

    name: {

      fontSize: 24,

      fontWeight: "bold",

      marginBottom: 10,

    },



    artist: {

        fontSize: 18,

        color: "#666",

     marginBottom: 12,

    },



    price: {

        fontSize: 24,

        fontWeight: "bold",

        color: "#2563EB",

    },

});