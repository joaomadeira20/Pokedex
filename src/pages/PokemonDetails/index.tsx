
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
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }
    function toUpperCase(str: string) {
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
                {images && <Image style={styles.avatar} source={{ uri: images.other["official-artwork"].front_default }} />}
                
            </View>




            {
                abilities && abilities.map((item, i) => <Text key={i} >{item.ability.name}</Text>)

            }

            {
                stats && stats.map((item, i) => <Text key={i} >{item.stat.name} - {item.base_stat}</Text>)

            }
            <View style={styles.typesContainer}>


                {
                    types && types.map((item, i) => <Text key={i} style={[styles.typeItem, getBackgroundColor(item.type.name)]} >{item.type.name} </Text>)
                }
            </View>
        </View >
    );

}

export default PokemonDetails