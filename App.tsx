import { View, Text, StyleSheet,  } from 'react-native'
import React from 'react'
import { ThemeContext } from './src/context/ThemeContext'
import {useState} from "react"
import { Switch } from 'react-native'
import { myColors } from './src/styles/Colors'
import MyKeyboard from './src/components/MyKeyboard'
import { SafeAreaView } from 'react-native'

const App = () => {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider value={theme} >
    <SafeAreaView style={theme === "light"?styles.container:[styles.container,{backgroundColor:'black'}]}>
      <Switch
      style={{marginTop:30}}
      value={theme==='light'}
      onValueChange={()=>setTheme(theme=== 'light'?"dark":"light")}
      />
      <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
  )
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:myColors.light,
    alignItems:"center",
    justifyContent:"flex-start",
  }
})

export default App