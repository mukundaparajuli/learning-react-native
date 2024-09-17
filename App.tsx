import React, { useState } from 'react'
import { Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'

const App = () => {
  let [count, setCount] = useState(1);
  return (
    // <ScrollView>

    //   <View style={styles.container}>


    //   </View >
    // </ScrollView>
    <View style={{ margin: 5 }}>

      {/* flat list */}

      {/* <FlatList data={[
        { key: "Hello World1" },
        { key: "Hello World2" },
        { key: "Hello World3" },
        { key: "Hello World4" },
        { key: "Hello World5" },
        { key: "Hello World6" },
        { key: "Hello World7" },
        { key: "Hello World8" },
        { key: "Hello World9" },
        { key: "Hello World10" },
        { key: "Hello World11" },
        { key: "Hello World12" },
        { key: "Hello World13" },
        { key: "Hello World14" },
        { key: "Hello World15" },
        { key: "Hello World16" },
        { key: "Hello World17" },
        { key: "Hello World18" },
        { key: "Hello World19" },
        { key: "Hello World20" },
        { key: "Hello World21" },
      ]
      } renderItem={({ item }) => <Text style={styles.fourth}>{item.key}</Text>}>


      </FlatList> */}




      {/* SectionList */}
      <SectionList
        sections={[
          {
            title: "R",
            data: [
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
              'ram',
            ]
          },
          {
            title: 'S ',
            data: [
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam ',
              ' shyam '
            ]
          }
        ]}
        renderItem={({ item }) => <Text style={styles.data}>{item}</Text>}
        renderSectionHeader={({ section }) => <Text style={styles.title}>{section.title}</Text>}
      />
    </View>
  )

}

export default App

const styles = StyleSheet.create({
  container: {
    height: 1000,
    // flexDirection: 'column-reverse',
    // flexDirection: 'row-reverse',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
    // justifyContent: 'space-evenly'
  },
  first: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
  },
  second: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'steelblue',
    padding: 15,
    borderRadius: 10,
  },
  third: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
  },
  fourth: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 10,
    margin: 5
  },

  image: {
    height: 800,
    width: 400
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5
  },
  data: {
    fontSize: 32,

  }

})