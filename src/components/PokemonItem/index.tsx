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
    abilities?: habilidades[]
    moves?: []
    stats?: []
    types: typao[]

}

interface ability{
    name:string,  url:string
}

interface habilidades{
    type:ability
}

interface type{
    name:string,  url:string, slot:string
}

interface typao{
    type:type
}
export interface PokemonItemProps {
    image: string
    name: string
    url?: string
    id?: number
    abilities?: habilidades[]
    moves?: []
    stats?: []
    types: typao[]
    
}

const PokemonItem: React.FC<PokemonItemProps> = ({ name, image, types, abilities}) => {
    const { navigate } = useNavigation()
    
    //console.log(typeof(types))
    return (
        <View style={styles.container} >

            <RectButton onPress={() => navigate('PokemonDetails', {name, abilities})}>
            <Image style={styles.avatar} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>

            
             { 
                types && types.map((item, i)=><Text key={i} style={styles.name}>{item.type.name}</Text>)
                   
             }  
           
            
            </RectButton>
            


        </View>

    )
}

export default PokemonItem