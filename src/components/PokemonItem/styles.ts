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
        width: 200,
        height: 200,
        alignItems:'center',
        justifyContent:'center'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24
    },
    avatar: {
        width: 100,
        height: 100,
        
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