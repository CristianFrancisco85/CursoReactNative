import React from 'react'
import { ContadorScreen } from './src/screens/ContadorScreen'
//import { HolaMundoScreen } from './src/screens/HolaMundoScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';

const App = () => {

  return (
    
    <View style={styles.container} >
      {/*<HolaMundoScreen></HolaMundoScreen>*/}
      {/*<ContadorScreen></ContadorScreen>*/}
      {/*<BoxObjectModelScreen></BoxObjectModelScreen>*/}
      {/*<DimensionesScreen></DimensionesScreen>*/}
      {/*<PositionScreen></PositionScreen>*/}
      {/*<FlexScreen></FlexScreen>*/}
      <TareaScreen></TareaScreen>
    </View>
    
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App