import React from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Guest() {
    return (

         <ImageBackground style = {{width:'100%',height:'100%',flex:1}} backgroundColor='black'>     
            
          <ImageBackground style = {{width:'100%',height:'100%',flex:1}}  backgroundColor='white'>
              <TouchableOpacity>
              <Image style={{height:30,width:30,marginLeft:8,marginTop:40}}
               source = {require('../assets/backarrow.png')} />
                </TouchableOpacity>
              <TouchableOpacity>
             <Text style={styles.guest}>Guest</Text>
             </TouchableOpacity>
              <ScrollView horizontal = {true}>      
              <View style = {styles.card}> 
              <Image style={{height:150,width:180,borderRadius:15,marginTop:-50,marginLeft:-50}}
               source = {require('../assets/isoimg1.jpg')} />
               <Text style={styles.colg}> About us </Text>
              </View>

                     
              <View style = {styles.card}> 
              <Image style={{height:150,width:180,borderRadius:15,marginTop:-50,marginLeft:-50}}
               source = {require('../assets/isoimg2.jpg')} />
                <Text style={styles.course}>  Courses </Text>
              </View>

                    
              <View style = {styles.card}> 
              <Image style={{height:150,width:180,borderRadius:15,marginTop:-50,marginLeft:-50}}
               source = {require('../assets/isoimg3.jpg')} />
                <Text style={styles.admsn}>Admission Process </Text>
              </View>

                    
              <View style = {styles.card}> 
              <Image style={{height:150,width:180,borderRadius:15,marginTop:-50,marginLeft:-50}}
               source = {require('../assets/Course.jpg')} />
                <Text style={styles.Contact}>     Contact </Text>
              </View>
              </ScrollView>
             
             
          </ImageBackground>
          
           
            <View style = {{flex:1}}>
           
           <View style = {styles.card1} >
           
            <ScrollView style = {{flex:1}}>
            <View style = {styles.card2}>
             <Image style = {{height:170, width:300,flex:1,marginLeft:-10,marginRight:-9,borderRadius:10,}} source = {require('../assets/vb3.jpg')} /> 
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:170, width:300,flex:1,marginLeft:-10,marginRight:-9,borderRadius:10}} source = {require('../assets/vb2.jpg')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:170, width:300,flex:1,marginLeft:-10,marginRight:-9,borderRadius:10}} source = {require('../assets/vb4.jpg')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:170, width:280,flex:1,marginLeft:-10,marginRight:-9,borderRadius:10}} source = {require('../assets/vb5.jpg')} />
            </View>

            <View style = {styles.card2}>
            <Image style =  {{height:170, width:280,flex:1,marginLeft:-10,marginRight:-9,borderRadius:10}} source = {require('../assets/vb1.jpg')} />
            </View>

            </ScrollView>

           </View>

            </View>
            </ImageBackground>
    )
}

const styles = StyleSheet.create({

    card:{
        borderRadius:15,
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'stretch',
        marginTop:15,
        marginLeft:15,
        marginRight:20,
        height:140,
        width:180,
        padding:50,
        backgroundColor:'#BFE2F5',
        alignContent:'center',
        
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
            
    },

    card1:{
      
        borderRadius:30,
        flexDirection:'column',
        justifyContent:'space-between',
         marginTop:-28,
        
         marginRight:1,
        height:500,
        width:360,
        padding:30,
        backgroundColor:'#7BB5C7',
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,

    },

    card2:{
        borderRadius:10,
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
       marginLeft:1,
        height:170,
        width:260,
        padding:10,
        backgroundColor:'grey',
        alignContent:'center',
        alignItems:'center',
        elevation:3,
        shadowOffset:{width:100,height:100},
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:2,
        fontSize:19,
    },
    colg:{
        color:'#4682b4',
        fontWeight:'bold',
    },
    course:{
        color:'#4682b4',
        fontWeight:'bold',
    },
    admsn:{
        color:'#4682b4',
        fontWeight:'bold',
    },
    Contact:{
        color:'#4682b4',
        fontWeight:'bold',
    },
    guest:{
        marginLeft:16,
        fontSize:25,
        marginTop:20,
        fontWeight:'bold',
        color:'black',
    }
})
