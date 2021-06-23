import React from 'react'
import { View, Text ,StyleSheet,TextInput, ScrollView, ImageBackground ,Image, TouchableOpacity} from 'react-native'
import { EvilIcons } from '@expo/vector-icons'; 
import {Card,Appbar, Divider} from 'react-native-paper'

    export default function HomeWork({navigation}) {
        const Addassignment=() =>{
            navigation.navigate('Addassignment')
        }
        const Addnotes = () => {
            navigation.navigate('Addnotes')
        }
        const Addvideos=()=>{
            navigation.navigate('Addvideos')
        }
        const Addlabmanuals=()=>{
            navigation.navigate('Addlabmanuals')
        }
        const Addpapers=()=>{
            navigation.navigate('Addpapers')
        }
        
        
       

    return (
        <View style = {{flex:1}}>
            <View style={{height:100,width:360,backgroundColor:'#4682b4',borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
        <Image source ={require('../assets/isoimg2.jpg')}
        style={{width:50,height:50,borderRadius:360,marginLeft:10,marginTop:40}} />
        <Text style={{marginLeft:70,fontWeight:'bold',fontSize:23,marginTop:-37,color:'#F8F8F8'}}>Learning Material</Text>
        </View>
        <Card style = {styles.card}>
             <EvilIcons name="search" size={24} color="black" style={{marginLeft:5,marginTop:7}}/>   
          <TextInput style = {{textAlign:'auto',marginLeft:30,marginTop:-24}}  placeholder = {'Search Here'}>   
           </TextInput>
         
        </Card>  

           <ScrollView>
               <TouchableOpacity onPress={Addassignment}>
             <Card style = {styles.card1}>
                 <Text style = {{fontSize:24,color:'black'}}>  Add Assignments </Text>
             </Card>
             </TouchableOpacity>

            <Divider style={{marginTop:20}}/>
            <TouchableOpacity onPress={Addnotes}>
             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}>  Add Notes </Text>
             </Card>
             </TouchableOpacity>

             <Divider style={{marginTop:20}}/>
            <TouchableOpacity onPress={Addvideos}>
            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Add Videos </Text>
             </Card>
             </TouchableOpacity>

             <Divider style={{marginTop:20}}/>
            <TouchableOpacity onPress={Addlabmanuals}>
            <Card style = {styles.card1}>
            <Text style = {{fontSize:24}}>  Add Lab-Manuals </Text>
            </Card>
            </TouchableOpacity>

            <Divider style={{marginTop:20}}/>
            <TouchableOpacity onPress={Addpapers}>
             <Card style = {styles.card1}>
             <Text style = {{fontSize:24}}>  Add Question Papers </Text>
            </Card>
            </TouchableOpacity>

           </ScrollView>

           
       </View>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        height:35,
        width:320,
       
        backgroundColor:'white',
        
     //   alignContent:'center',
     //   alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
    card1:{
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#B8D3EA',
        marginTop:20,
        marginLeft:10,
        marginRight:20,
        height:80,
        width:340,   
        shadowOffset:{width:100,height:100},
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },
})