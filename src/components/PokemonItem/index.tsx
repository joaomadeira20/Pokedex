import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import styles from './styles'
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Pokemon {
    image: string
    name: string
    url: string
    abilities: []
    moves: []
    stats: []
    types: []
    // id: number

}
export interface PokemonItemProps {
    name: string
    image: string
    types: string[]

}
const PokemonItem: React.FC<PokemonItemProps> = ({ name, image, types }) => {


    return (
        <View style={styles.container}>
            
            
            <Image style={styles.avatar} source={{ uri: image }} />
            <Text style={styles.name}>{name}</Text>


        </View>

    )
}

export default PokemonItem