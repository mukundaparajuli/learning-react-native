import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/photo.png")} style={styles.imageStyle}>
        <View style={styles.overlay} />
        <Text style={styles.textStyle}>Hi I am inside the image background</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: 400,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  textStyle: {
    fontSize: 44,
    color: 'white',
    zIndex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
  },
});








// import React, { useState } from 'react'
// import { Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native'

// const App = () => {
//   // let [count, setCount] = useState(1);
//   const [text, setText] = useState('');
//   return (
//     <View style={{ flex: 1, gap: 45 }}>
//       {/* // <ScrollView>

//     //   <View style={styles.container}>


//     //   </View >
//     // </ScrollView> */}

//       {/* flat list */}

//       {/* <FlatList data={[
//         { key: "Hello World1" },
//         { key: "Hello World2" },
//         { key: "Hello World3" },
//         { key: "Hello World4" },
//         { key: "Hello World5" },
//         { key: "Hello World6" },
//         { key: "Hello World7" },
//         { key: "Hello World8" },
//         { key: "Hello World9" },
//         { key: "Hello World10" },
//         { key: "Hello World11" },
//         { key: "Hello World12" },
//         { key: "Hello World13" },
//         { key: "Hello World14" },
//         { key: "Hello World15" },
//         { key: "Hello World16" },
//         { key: "Hello World17" },
//         { key: "Hello World18" },
//         { key: "Hello World19" },
//         { key: "Hello World20" },
//         { key: "Hello World21" },
//       ]
//       } renderItem={({ item }) => <Text style={styles.fourth}>{item.key}</Text>}>


//       </FlatList> */}




//       {/* SectionList */}
//       {/* <SectionList
//         sections={[
//           {
//             title: "R",
//             data: [
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//               'ram',
//             ]
//           },
//           {
//             title: 'S ',
//             data: [
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam ',
//               ' shyam '
//             ]
//           }
//         ]}
//         renderItem={({ item }) => <Text style={styles.data}>{item}</Text>}
//         renderSectionHeader={({ section }) => <Text style={styles.title}>{section.title}</Text>}
//       /> */}



//       {/* Text Input */}


//       <TextInput onChangeText={(newText) => setText(newText)}
//         defaultValue={text}
//         placeholder='Enter your text here!'
//         style={styles.inputStyle}
//       />

//       <Text style={styles.textStyle}>{text}</Text>




//     </View>
//   )

// }

// export default App

// const styles = StyleSheet.create({
//   // container: {
//   //   height: 1000,
//   //   // flexDirection: 'column-reverse',
//   //   // flexDirection: 'row-reverse',
//   //   flexDirection: 'column',
//   //   alignItems: 'center',
//   //   justifyContent: 'space-around'
//   //   // justifyContent: 'space-evenly'
//   // },
//   // first: {
//   //   fontSize: 24,
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   backgroundColor: 'red',
//   //   padding: 15,
//   //   borderRadius: 10,
//   // },
//   // second: {
//   //   fontSize: 24,
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   backgroundColor: 'steelblue',
//   //   padding: 15,
//   //   borderRadius: 10,
//   // },
//   // third: {
//   //   fontSize: 24,
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   backgroundColor: 'green',
//   //   padding: 15,
//   //   borderRadius: 10,
//   // },
//   // fourth: {
//   //   fontSize: 24,
//   //   color: 'white',
//   //   fontWeight: 'bold',
//   //   backgroundColor: 'gray',
//   //   padding: 15,
//   //   borderRadius: 10,
//   //   margin: 5
//   // },

//   // image: {
//   //   height: 800,
//   //   width: 400
//   // },
//   // title: {
//   //   fontSize: 32,
//   //   fontWeight: 'bold',
//   //   color: 'black',
//   //   backgroundColor: 'lightgray',
//   //   padding: 10,
//   //   borderRadius: 5
//   // },
//   // data: {
//   //   fontSize: 32,

//   // }


//   inputStyle: {
//     borderColor: 'black',
//     backgroundColor: 'white',
//     borderStyle: 'solid',
//     borderWidth: 2,
//     borderRadius: 4,
//     padding: 5,
//     fontSize: 22,
//   },
//   textStyle: {
//     fontSize: 24,
//     color: 'black',
//     fontWeight: 'bold'
//   }





// })