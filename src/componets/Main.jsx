import React from 'react'
import { Text, View } from 'react-native'
import RepositoryList from './RepositoryList.tsx'
import AppBar from './AppBar.tsx'
import { Redirect, Route, NativeRouter } from 'react-router-native'

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <NativeRouter>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin' exact>
          <Text>Working on it</Text>
        </Route>
        <Redirect to='/' />
      </NativeRouter>
    </View>
  )
}

export default Main