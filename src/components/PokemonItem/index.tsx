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
    stats: estatisticas[]
    types: typao[]
    images: other[]

}
interface other {
    url: string
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
    image: string
    name: string
    url?: string
    id?: number
    abilities?: habilidades[]
    moves?: []
    stats: estatisticas[]
    types: typao[]
    images: other[]


}


const PokemonItem: React.FC<PokemonItemProps> = ({ name, images,image, types, abilities, stats}) => {
    function toUpperCase(str:string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function getBackgroundColor(name:string){
        console.log(name)
            if(name==='grass'){
                return {
                    backgroundColor:'#008000'
                }
            }
            else if(name==='poison'){
                return{
                    backgroundColor:'#993399'
                }
            }
            else if(name==='fire'){
                return{
                    backgroundColor:'#FF0000'
                }
            }
            
        
    }
    const { navigate } = useNavigation()

    //console.log(typeof(types))
    return (
        <View style={styles.container} >

            <RectButton onPress={() => navigate('PokemonDetails', { name, abilities, image, images, stats,types })}>
                <Image style={styles.avatar} source={{ uri: image }} />
                <Text style={styles.name}>{toUpperCase(name)}</Text>
                <View style={styles.typesContainer}>
                    {
                        
                        types && types.map((item, i) => <Text style={[styles.typeItem, getBackgroundColor(item.type.name)]} key={i} >{item.type.name} {''}</Text>)

                    }
                </View>


            </RectButton>



        </View>

    )
}

export default PokemonItem