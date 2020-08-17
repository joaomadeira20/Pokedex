
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api';

import PokemonItem,{Pokemon} from '../../components/PokemonItem'

import styles from './styles';
function PokemonList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [pokemons, setPokemons] = useState([])

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    useEffect(()=>{
        getPokemons()
    })

    async function getPokemons(){
        const response = await api.get('/pokemon/?limit=1000')
        
        console.log(response.data)
        setPokemons(response.data)
        console.log(pokemons)
    }
    return (
        <View style={styles.container}>
            <PageHeader
                title="Pokedex da rapaziada"
                headerRight={
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                }>
            </PageHeader>
            {isFiltersVisible && (
            <View style={styles.searchForm}>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />


                

                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
            )}

             <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                {pokemons.map((pokemon:Pokemon) => {
                    return (
                        <PokemonItem key={1} pokemon={pokemon} />
                    )
                })
                }
            </ScrollView> 

        </View>
    );

}

export default PokemonList