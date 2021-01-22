import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
export default class BookTransaction extends React.Component{
    render(){
        return(
            <View style = {[Styles.HeaderDesign]}>
                <View style = {{backgroundColor:"black",width:"100%",}}>
                <Text style = {{fontSize:50,color:"white",marginLeft:"39%"}}>
                    Book Transaction
                </Text>
                </View>
                
            </View>

        )
    }
}

var Styles = StyleSheet.create({
    HeaderDesign:{
        backgroundColor:"yellow",
        flex:1,
        alignItems:"center",

    }

});