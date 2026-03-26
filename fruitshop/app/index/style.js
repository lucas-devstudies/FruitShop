import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#ebebeb',
  },
  rowItems: {
    display:'flex',
    alignItems:'flex-start',
    flexDirection:'row',
    marginTop: 50,
    gap:20,
    height:90,
    paddingRight:20,
    paddingLeft:20,
    overflow:'hidden',
 
  },
  cardNews:{
    width:120,
    marginTop:20,
    textAlign:'center',
    paddingTop:10,
    paddingBottom:10,
    fontWeight:600,
    borderRadius:10,
    color:'#fff',
    backgroundColor:'#126825',
    marginLeft:20,
    
  },
  rowFruits:{
    display:'flex',
    flexDirection:'row',
    gap:20,
    paddingTop:20,
    paddingBottom:20,
    marginLeft:20,
    paddingRight:20
  },
  title:{
    marginLeft:20,
    fontWeight:700,
  }
});