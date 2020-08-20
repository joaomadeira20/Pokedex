import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
export interface Pokemon {
    image: string
    name: string
    url?: string
    id?: number
    abilities?: []
    moves?: []
    stats?: []
    types: typao[]

}
interface type{
    name:string,  url:string, slot:string
}
interface slott{
     slot:string
}
interface typao{
    slot:slott
}
export interface PokemonItemProps {
    image: string
    name: string
    url?: string
    id?: number
    abilities?: []
    moves?: []
    stats?: []
    types: typao[]
    
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, image, types }) => {
    const { navigate } = useNavigation()
    //console.log(typeof(types))
    return (
        <View style={styles.container} >

            <RectButton onPress={() => navigate('PokemonDetails', {name})}>
            <Image style={styles.avatar} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>

            
             {/* { console.log(types.forEach((e:type)=>e.slot))}  */}
           
            
            </RectButton>
            


        </View>

    )
}

export default PokemonItem