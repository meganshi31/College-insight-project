import React,{useState} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity, TextInput , Button} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 


export default function Addpapers({navigation}){
  const HomeWork = () => {
    navigation.navigate('HomeWork')
}   
    return(
     
     <View style={styles.bg}>
            <TouchableOpacity onPress={HomeWork}>
            <Image style={{height:30,width:30,marginLeft:10,marginTop:30}}
            source={require('../assets/backarrow.png')} />
            </TouchableOpacity>
            <Text style={{marginTop:-28,fontWeight:'bold',fontSize:20,marginLeft:90}}> Add Question Papers</Text>
            <View style={{flexDirection:'row',marginLeft:20}}>
            <TextInput
            style={{marginTop:40,marginLeft:30,height:24,width:70,borderWidth:1,borderColor:'lightgrey',fontSize:15,backgroundColor:'#ECECEC'}}
            placeholder="Year" placeholderTextColor='grey' textAlign='center' />
            <TextInput
            style={{marginTop:40,marginLeft:60,height:24,width:145,backgroundColor:'#ECECEC',borderWidth:1,borderColor:'lightgrey'}}
            placeholder="Branch" textAlign='center'  />
            </View>
          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:40,marginLeft:20,fontSize:18,color:'black',fontWeight:'bold'}}>Subject Code :</Text>
            <TextInput keyboardType='numeric' textAlign='center'
            style={{width:80,height:20,borderBottomWidth:1,fontSize:15,marginTop:40,marginLeft:20,borderBottomColor:'grey'}} />
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={{marginTop:20,marginLeft:20,fontSize:18,color:'black',fontWeight:'bold'}}>Topic : </Text>
            <TextInput style={{width:200,height:20,borderBottomWidth:1,marginTop:21,marginLeft:20,borderBottomColor:'grey'}} />
          </View>
         
        <View style={{flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity>
          <Text style={{height:30,width:120,backgroundColor:'#6296C6',fontSize:15,fontWeight:'bold',borderRadius:5,marginTop:40,marginLeft:-10,color:'white',fontSize:17,textAlign:'center',paddingRight:3,paddingBottom:3}}>
          <EvilIcons name="paperclip" size={30} color="white"/>
            Attach File
          </Text>
          </TouchableOpacity>

          <TouchableOpacity>
          <Text style={{height:30,width:100,backgroundColor:'#6296C6',fontSize:15,fontWeight:'bold',borderRadius:5,marginTop:40,marginLeft:30,fontSize:17,color:'white',padding:2,textAlign:'center',paddingTop:5}}>
            Upload
          </Text> 
          </TouchableOpacity>
          </View>
        
        <Text style={{marginTop:25,fontSize:17,marginLeft:7,color:'grey'}}>
          Uploaded Documents :
        </Text>

        
         
        
        </View>

   
    );
}
   

const styles=StyleSheet.create({
 
  
});