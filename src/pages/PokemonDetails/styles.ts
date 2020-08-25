import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profile:{
        alignItems:"center",
        justifyContent:"center"
    },
    avatar: {
        width: 200,
        height: 200,
    },
    name:{
        fontSize:20,
        
    },
    typesContainer: {
        
        flexDirection: 'row',
        
        

    },
    typeItem: {
        backgroundColor: '#68a0cf',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        padding:5,
        margin:0,
        
    },
    gross:{
        backgroundColor:'#008000'
    }
})

export default styles;