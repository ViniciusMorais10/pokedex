import {  StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  // HOME
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  headerContent: {
    paddingHorizontal: 20,
    height: 240
  },
  menu:{
    height:45,
    width:'100%',
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  lbtitle: {
    marginTop: 20,
    fontFamily: 'Lexend Deca Regular',
    fontSize: 40,
    fontWeight: 'bold',
  },
  lbdescription: {
    marginTop:10,
    fontFamily: 'Lexend Deca Regular',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#747476'
  },
  headerIcon: {
    paddingHorizontal: 10,
  },
  headerContentInput:{
    backgroundColor:'#F2F2F2',
    height:60,
    width:'100%',
    marginTop:20,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  headerInput:{    
    marginHorizontal: 5,
    width: '100%',
    paddingVertical: 10,
    paddingStart: 10,
  },


});

export default Styles;