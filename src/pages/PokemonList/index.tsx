
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton, FlatList } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native'
import PokemonItem, { Pokemon } from '../../components/PokemonItem'

import styles from './styles';
function PokemonList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)
    const [pokemons, setPokemons] = useState([])

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    async function getPokemons() {
        const response = await api.get('/pokemon/?limit=2000')
        // console.log(response.data)
        setPokemons(response.data.results)
        const array = response.data.results
         array.forEach(async(pokemon: Pokemon) => {
            const id = pokemon.url.split('pokemon/')
            const id2 = id[1].split('/')
            pokemon.id = parseInt(id2[0])
            
            const response2 = await api.get(`https://pokeapi.co/api/v2/pokemon/${id2[0]}`)
            console.log(response2.data.sprites)
            pokemon.link = response2.data.sprites.front_default


        });
        



        // const response2 = await api.get('/pokemon/2')

        // console.log(response2.data.sprites.other["official-artwork"])
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

            {/* <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                

                {pokemons.map((pokemon: Pokemon, i) => {
                    return (
                        <PokemonItem key={i} name={pokemon.name} url={pokemon.url} />
                    )
                })
                }
            </ScrollView> */}

            <FlatList numColumns={2} data={(pokemons)}
                keyExtractor={(pokemons: Pokemon, i) => `${i}`}
                renderItem={({ item }) => <PokemonItem url={item.url} name={item.name} link={item.link}
                ></PokemonItem>}>

            </FlatList>

        </View>
    );

}

export default PokemonList