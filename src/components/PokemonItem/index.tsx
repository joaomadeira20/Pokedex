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
    images: []
    name: string
    url?: string
    id?: number
    abilities?: habilidades[]
    moves?: []
    stats: estatisticas[]
    types: typao[]
    image2:string

}

interface stat {
    name: string
}

interface estatisticas {
    base_stat: number,
    effort: number,
    stat: stat
}

interface ability {
    name: string, url: string
}

interface habilidades {
    type: ability
}

interface type {
    name: string, url: string, slot: string
}

interface typao {
    type: type
}
export interface PokemonItemProps {
    images: []
    name: string
    url?: string
    id?: number
    abilities?: habilidades[]
    moves?: []
    stats: estatisticas[]
    types: typao[]
    image2:string


}


const PokemonItem: React.FC<PokemonItemProps> = ({ name, images, types, abilities, image2, stats}) => {
    function toUpperCase(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const { navigate } = useNavigation()

    //console.log(typeof(types))
    return (
        <View style={styles.container} >

            <RectButton onPress={() => navigate('PokemonDetails', { name, abilities, images, image2, stats,types })}>
                { images &&<Image style={styles.avatar} source={{ uri: images.front_default }} />}
                <Text style={styles.name}>{toUpperCase(name)}</Text>
                <View style={styles.typesContainer}>
                    {
                        
                        types && types.map((item, i) => <Text style={styles.typeItem} key={i} >{item.type.name} {''}</Text>)

                    }
                </View>


            </RectButton>



        </View>

    )
}

export default PokemonItem