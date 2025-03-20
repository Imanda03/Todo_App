import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/RouteNavigation'
import { colors } from './src/utils/color'
import { ToastProvider } from './src/context/ToastContext'
import { TaskProvider } from './src/context/TaskContext'

const App = () => {
  return (
    <SafeAreaProvider >
      <StatusBar
        animated={true}
        backgroundColor={colors.PRIMARY_BLUE}
        hidden={true}
      />
      <ToastProvider>
        <TaskProvider>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        </TaskProvider>
      </ToastProvider>
    </SafeAreaProvider>
  )
}

export default App