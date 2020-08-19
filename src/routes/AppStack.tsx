import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import PokemonList from '../pages/PokemonList'
import PokemonDetails from '../pages/PokemonDetails'



const { Navigator, Screen } = createStackNavigator()

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                
                    <Screen name="Landing" component={PokemonList} />
                    <Screen name="PokemonDetails" component={PokemonDetails} />
                    
                
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack