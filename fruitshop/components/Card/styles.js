import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        width:180,
        padding:20,
        backgroundColor:'#fff',
        borderRadius:10,
        shadowColor: '#000',
        elevation:5,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.2, 
        shadowRadius: 10,
    },
    title:{
        marginTop:8,
        fontWeight:600,
        fontSize:18,
    },
    weigth:{
        color:'#000000b7'
    },
    price:{
        fontSize:18,
        marginTop:4,
        color:'#126825',
        fontWeight:700,
    },
});