import React, { ReactNode } from 'react'
import { View, Image, Text } from 'react-native'
import styles from './styles'
import { BorderlessButton } from 'react-native-gesture-handler'


import backIcon from '../../assets/images/icons/back.png'
import { useNavigation } from '@react-navigation/native'

interface PageHeaderProps {
    title: string
    headerRight?: ReactNode
    n?: string
    m?:string
}
const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight, n,m }) => {
    const { navigate } = useNavigation()
    function handleGoBack() {
        navigate('Landing')
    }

    return (
        
        <View style={styles.container} >
            {n && <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                {/* <Image source={logoImg} resizeMode="contain" /> */}
            </View>}
            
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {m && headerRight}
            </View>   
            {children}
        </View>
    )
}

export default PageHeader