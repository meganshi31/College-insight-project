import React from 'react'
import {  Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default function Login({navigation}) {
    return (
        <ImageBackground  style = {{width:'100%',height:'100%',flex:1}}  source  = {require('../assets/deepsea.jpg')}  >
            <Text style={styles.title}>CollegeInsight</Text>
          <View  style = {styles.card} >
          <Text style={styles.collname}> CollegeInsight </Text>
                   {/* <TouchableOpacity style = {styles.logbut}>
                    <Text style={styles.logs}> Login </Text>
                    <Text style={styles.ges}> Guest </Text>
                </TouchableOpacity> */}
             <TextInput   placeholderTextColor='#10416A' style = {styles.textinput} placeholder = 'Username' />
             <TextInput    placeholderTextColor='#10416A'style = {styles.textinput} placeholder = 'Password' />
             <TouchableOpacity style = {styles.btn}>
                    <Text style={styles.tex}> Login </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.text} >
                    <Text style={styles.guestclick} >Enter as a guest Click here </Text>
                </TouchableOpacity>
                
        </View> 
        </ImageBackground>
    )
} 
const styles = StyleSheet.create({
     
    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:90 ,
        marginLeft:10,
        marginRight:10,
        height:400,
        width:340,
        padding:50,
        backgroundColor:'white',
        marginBottom:20,
        alignContent:'center',
        alignItems:'center',
        elevation:2,
        shadowOffset:{width:50,height:50},
        shadowColor:'#000',
        shadowOpacity:0.1,
        // shadowRadius:2,
        fontSize:19,
            
    },
   
    textinput:{
        width:290,
        height:1,
        borderBottomColor:'black',
        borderBottomWidth:2,
        flex:1,
        marginTop:60
    },
     
    btn:{
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#C55B41',
        marginTop:30,
         
    },

    text:{
        fontSize:10,
        marginTop:30,
        color:'lightseagreen',
       
    },
    tex:{
        color:'white',
    },
    collname:{
        marginTop:-10,
        marginLeft: 5,
        fontSize:25,
        fontWeight:'bold',
        color:'#042428',
    },
    title:{
        fontSize:56,
        marginTop:40,
        marginLeft:5,
        fontStyle:'italic',
        fontWeight:'bold',
        color:'#4CA1AF',
    }


   
})
