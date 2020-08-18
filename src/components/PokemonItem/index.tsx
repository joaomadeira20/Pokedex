import React, { useState } from 'react'
import { View, Image, Text, Linking } from 'react-native'
import styles from './styles'
import { RectButton } from 'react-native-gesture-handler'
import heartOutLineIcon from '../../assets/images/icons/heart-outline.png'
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Pokemon {


    name: string
    url: string
    id: number
    link:string
}
export interface PokemonItemProps {
    name: string
    url: string
    link:string
}
const PokemonItem: React.FC<PokemonItemProps> = ({ name, url, link }) => {

    return (
        <View style={styles.container}>

            {/* <Image style={styles.avatar} source={{ uri: teacher.avatar }} /> */}

            <View style={styles.profileInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.url}>{url}</Text>
                <Image style={styles.avatar} source={{uri:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"}} />
            </View>


        </View>

    )
}

export default PokemonItem