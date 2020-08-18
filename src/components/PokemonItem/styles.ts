import { StyleSheet } from 'react-native'
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#e6e6',
        borderRadius: 8,
        marginBottom: 16,
        overflow: 'hidden',
        width: 137,
        height: 75
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16
    },
    name: {
        fontFamily: 'Archivo_700Bold',
        color: '#32264d',
        fontSize: 20
    },
    url: {
        fontFamily: 'Poppins_400Regular',
        color: '#6a6180',
        fontSize: 12,
        marginTop: 4
    },
    
})

export default styles