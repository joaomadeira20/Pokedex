
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import PageHeader from '../../components/PageHeader'

import styles from './styles';
function PokemonList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false)

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible)
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
                <Text style={styles.label}>Matéria</Text>
                <TextInput style={styles.input} placeholder="Qual o nome ?" placeholderTextColor="#c1bccc" />


                

                <RectButton style={styles.submitButton}>
                    <Text style={styles.submitButtonText}>Filtrar</Text>
                </RectButton>
            </View>
            )}

            {/* <ScrollView style={styles.teacherList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}>
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)} />
                    )
                })
                }
            </ScrollView> */}

        </View>
    );

}

export default PokemonList