import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

import uuidV4 from 'uuid/v4'
import { colors } from '../theme';


class AddCity extends React.Component {
    state = {
        city:'',
        country:''
    }
    onChangeText=(key,value)=>{
        this.setState({
            [key]:value
        })

    }

    submit=()=>{

    }
    
    render() {
        return (
            <View style={styles.container}>
            <Text style = {styles.heading}>Cities App</Text>
            <TextInput
                placeholder = 'City Name'
                value = {this.state.city}
                onChangeText = {val=>this.onChangeText('city',val)}
                style = {styles.input}
            />
            <TextInput
                placeholder = 'Country Name'
                value = {this.state.city}
                onChangeText = {val=>this.onChangeText('city',val)}
                style = {styles.input}
                
            />
            <TouchableOpacity onPress = {this.submit}>
                <View style = {styles.button}>
                    <Text style = {styles.buttonText}>Add City</Text>
                </View>
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        backgroundColor:'white',
        margin:10,
        paddingHorizontal:10,
        height:50
    },
    button:{
        backgroundColor:'#666',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        margin:10

    },
    buttonText:{
        color:'white'
    },
    container:{
        backgroundColor:colors.primary,
        flex:1,
        justifyContent:'center'
    },
    heading:{
        fontSize:30,
        textAlign:'center',
        margin:10,
        color:'white'
    }
})

export default AddCity;