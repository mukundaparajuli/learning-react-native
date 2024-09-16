import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const App = () => {
  let [count, setCount] = useState(1);
  return (
    <View>
      <Text style={{ fontSize: 30 }}>
        {count}
      </Text>
      <Button title='Press Here' onPress={() => { setCount(count++) }} />
    </View>
  )
}

export default App
