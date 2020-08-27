
import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { Pokemon } from '../../components/PokemonItem';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'


interface PokemonProps {
    name: string
    abilities: habilidades[]
    stats: estatisticas[]
    image: string
    images: other
    types: typao[]
}



interface ability {
    name: string, url: string
}

interface habilidades {
    ability: ability
}

interface stat {
    name: string
}

interface estatisticas {
    base_stat: number,
    effort: number,
    stat: stat
}
interface type {
    name: string, url: string, slot: string
}

interface typao {
    type: type
}
interface other {
    other: oficialatw
}
interface oficialatw {
    'official-artwork': front
}
interface front {
    front_default: string
}
type ParamList = {
    Detail: {
        name: string;
        abilities: habilidades[];
        stats: estatisticas[];
        image: string
        images: other
        types: typao[]
    };
};
const PokemonDetails: React.FC<PokemonProps> = ({ }) => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const name = route.params.name
    const abilities = route.params.abilities
    const stats = route.params.stats
    const image = route.params.image
    const images = route.params.images
    const types = route.params.types
    let hp = 0
    let attack = 0
    let defense = 0
    let special_attack = 0
    let special_defense = 0
    let speed = 0
    if (stats) stats.map((item, i) => {
        if (item.stat.name === 'hp') {
            hp = item.base_stat
        }
        else if (item.stat.name === 'attack') {
            attack = item.base_stat
        }
        else if (item.stat.name === 'defense') {
            defense = item.base_stat
        }
        else if (item.stat.name === 'special-attack') {
            special_attack = item.base_stat
        }
        else if (item.stat.name === 'special-defense') {
            special_defense = item.base_stat
        }
        else if (item.stat.name === 'speed') {
            speed = item.base_stat
        }

    })
    // console.log(hp, attack, defense, special_attack, special_defense, speed)
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }
    function toUpperCase(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    function getBackgroundColor(name: string) {
        console.log(name)
        if (name === 'grass') {
            return {
                backgroundColor: '#008000'
            }
        }
        else if (name === 'poison') {
            return {
                backgroundColor: '#993399'
            }
        }
        else if (name === 'fire') {
            return {
                backgroundColor: '#FF0000'
            }
        }
    }
    function getTitleTypes(){
        console.log(types.length)
        return types.length >1 ?  'Tipos' : 'Tipo'
    }
    return (
        <View>
            <PageHeader
                title="Pokedex da rapaziada"
                n='eae'
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }>
            </PageHeader>
            <View style={styles.profile}>
                <Text style={styles.name}>{toUpperCase(name)}</Text>
                <View style={styles.information}>
                    <View style={styles.containerInfo}>
                        <View>
                            <Text style={styles.abilitesTitle}>Status </Text>
                            <View style={styles.statusItems}>
                                <View style={styles.atkDef}>
                                    <Text style={styles.textItem}>Ataque: {attack}</Text>
                                    <Text style={styles.textItem}>Defesa: {defense}</Text>
                                </View>
                                <View style={styles.main}>
                                    <Text style={styles.textItem}>Ataque ult: {special_attack}</Text>
                                    <Text style={styles.textItem}>Defesa ult: {special_defense}</Text>
                                </View>
                                <View style={styles.speed}>
                                    <Text style={styles.textItem}>Velocidade: {speed}</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.abilitesTitle}>Habilidades </Text>
                            <View style={styles.abilitesItems}>
                                {
                                    abilities && abilities.map((item, i) => <Text key={i} style={styles.textItem} >{item.ability.name}</Text>)
                                }
                            </View>
                        </View>


                        <View>
                            <Text style={styles.abilitesTitle}>{getTitleTypes()}</Text>
                            <View style={styles.types}>
                                {
                                    types && types.map((item, i) => <Text key={i} style={[styles.textItem, getBackgroundColor(item.type.name)]} >{item.type.name} </Text>)
                                }
                            </View>

                        </View>
                    </View>
                    <View style={styles.containerImage}>
                        {images && <Image style={styles.avatar} source={{ uri: images.other["official-artwork"].front_default }} />}
                        <Text style={styles.hpName}>HP: {hp}</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

export default PokemonDetails