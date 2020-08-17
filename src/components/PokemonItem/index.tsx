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
    id:number

}
export interface PokemonItemProps {
    name: string
    url: string
    
}
const PokemonItem: React.FC<PokemonItemProps> = ({ name, url }) => {

    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                {/* <Image style={styles.avatar} source={{ uri: teacher.avatar }} /> */}

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.subject}>{url}</Text>
                </View>
            </View>

        </View>
        
    )
}

export default PokemonItem