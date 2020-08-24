
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native'
import PokemonItem, { Pokemon } from '../../components/PokemonItem'

import styles from './styles';

function PokemonList({ }) {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [pokemons, setPokemons] = useState([])
    const { navigate } = useNavigation()

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    async function getPokemons() {
        const response = await api.get('/pokemon/?limit=5')
        // console.log(response.data)

        const array = response.data.results
        array.forEach(async (pokemon: Pokemon) => {
            // let id = pokemon.url.split('pokemon/')
            // const id2 = id[1].split('/')
            const response2 = await api.get(`/pokemon/${pokemon.name}`)
            // pokemon.id = parseInt(id2[0])
            pokemon.images = response2.data.sprites
            pokemon.abilities = response2.data.abilities
            pokemon.moves = response2.data.moves
            pokemon.stats = response2.data.stats
            pokemon.types = response2.data.types
            pokemon.image2 = response2.data.sprites.other["official-artwork"].front_default
             console.log(pokemon.image2)
            setPokemons(array)

        });


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



            <FlatList data={(pokemons)}
                keyExtractor={(pokemons: Pokemon, i) => `${i}`}
                numColumns={2}
                renderItem={({ item }) => <PokemonItem name={item.name} images={item.images} types={item.types} abilities={item.abilities} image2={item.image2} stats={item.stats}
                ></PokemonItem>}>
            </FlatList>


        </View >
    );

}

export default PokemonList