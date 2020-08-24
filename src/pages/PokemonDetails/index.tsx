
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, FlatList } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import PageHeader from '../../components/PageHeader';

import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { Pokemon } from '../../components/PokemonItem';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native'

interface PokemonProps {
    name: string
    abilities: habilidades[]

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
    };
};

const PokemonDetails: React.FC<PokemonProps> = ({ }) => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    const name = route.params.name
    const abilities = route.params.abilities
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

            <Text>{name}</Text>

            {
                abilities && abilities.map((item, i) => <Text key={i} >{item.ability.name}</Text>)

            }



        </View >
    );

}

export default PokemonDetails