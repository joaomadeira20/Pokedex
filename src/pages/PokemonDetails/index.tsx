
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
    image:string

}

interface ability {
    name: string, url: string
}

interface habilidades {
    ability: ability
}

type ParamList = {
    Detail: {
        name: string;
        abilities: habilidades[];
        image:string
    };
};

const PokemonDetails: React.FC<PokemonProps> = ({ }) => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const name = route.params.name
    const abilities = route.params.abilities
    const image = route.params.image
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    return (
        <View>
            <PageHeader
                title="Pokedex da rapaziada"
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }>
            </PageHeader>
            <View style={styles.profile}>
                <Text>{name}</Text>
                <Image style={styles.avatar} source={{uri:image}} />
            </View>


            <Text>{name}</Text>

            {
                abilities && abilities.map((item, i) => <Text key={i} >{item.ability.name}</Text>)

            }



        </View >
    );

}

export default PokemonDetails