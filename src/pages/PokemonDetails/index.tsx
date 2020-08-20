
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
    
    
}
type ParamList = {
    Detail: {
      name: string;
    };
  };

const PokemonDetails : React.FC<PokemonProps> = ({    }) => {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>();
    console.log(route.params)
    const name = route.params.name
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
            
            

        </View >
    );

}

export default PokemonDetails