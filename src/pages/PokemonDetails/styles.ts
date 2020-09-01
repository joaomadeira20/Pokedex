import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#CCC',
        flex:1
    },

    name: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#68a0cf'


    },
    typesContainer: {

        flexDirection: 'row',



    },
    typeItem: {
        backgroundColor: '#68a0cf',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 5,
        margin: 0,

    },

    information: {

        alignItems: 'flex-start',
        flex:1,
        flexDirection: 'row',



    },
    viewTeste:{
        backgroundColor:'#68a0cf',
        flex:1.3
    },
    containerImage: {
        flex: 1,
    },
    avatar: {
        width: 200,
        height: 185,

        marginLeft: 6,


    },
    avatar2: {
       
       width:100,
       height:100,
       
        marginLeft: 6,


    },
    imageItem:{
        width: 100,
        height: 100,
        
    },
    imageItems:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    containerInfo: {

        fontSize: 15,
        flex: 1,


    },
    abilitesTitle: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: '#ccc',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',

    },
    textItem: {
        backgroundColor: '#ccc',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        flex: 1,
        textAlign: 'center'
    },
    textTypeItem: {
        backgroundColor: '#ccc',
        borderRadius: 15,
        padding:5,
        borderWidth: 2,
        borderColor: '#fff',
        
        textAlign:'center'
        
    },
    statusItems: {
        flexDirection: 'column'
    },
    abilitesItems: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    atkDef:{
        flexDirection:'row'
    },
    main:{
        flexDirection:'row'
    },
    speed:{
        flexDirection:'row'
    },
    types:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    evolutionImages:{
        flexDirection:'row'
    },
    hpName: {
        textAlign: 'center',
        color: '#FF0000',
        fontWeight: 'bold'
    },

})

export default styles;