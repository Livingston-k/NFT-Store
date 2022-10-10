import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import COLORS from '../../const/colors';
const OnboardingScreen = ({navigation}) => {
  return (<SafeAreaView style={{ backgroundColor:COLORS.black,flex:1 }}>
    <StatusBar barStyle='light-content'/>
<View style={style.ImgBg}>
  <Image style={{ height:250,width:180,marginTop:70 }} source={require('../../assets/nft.png')}/>
</View>
<View style={{ paddingHorizontal:20,marginTop:50,justifyContent:'space-between' }}>
      <Text style={style.title}>Collecting best</Text>
      <Text style={style.title}>NFT Crypto Art</Text>
      <TouchableOpacity onPress={()=>navigation.replace("HomeScreen")} activeOpacity={0.7} style={style.btn}><Text style={{ color:COLORS.black,fontWeight:'bold' }}>Start</Text></TouchableOpacity>

</View>
  </SafeAreaView>)
};

const style = StyleSheet.create({
  ImgBg:{
     height:320,
     width:220,
     backgroundColor:COLORS.violet,
     marginTop:70,
     marginHorizontal:20,
     borderRadius:40,
     paddingHorizontal:20,
     overflow:'hidden'

  },
  title:{
    color:COLORS.white,
    fontSize:25,
    fontWeight:'bold',
    marginTop:20
  },
  btn:{
    height:50,
    width:150,
    backgroundColor:COLORS.white,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    marginTop:40
  }
});

export default OnboardingScreen;
