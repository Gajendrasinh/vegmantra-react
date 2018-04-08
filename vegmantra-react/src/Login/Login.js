import React from "react";
import { View, TextInput, TouchableOpacity,StyleSheet, Image, Dimensions, ImageBackground, Platform} from 'react-native';

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1
} from "native-base";

import { StackNavigator } from "react-navigation";
import Signup from "./Signup.js";

const { width, height } = Dimensions.get("window");

const background = require("../img/BGwithmask.jpg");
const mark = require("../img/intro-green-veg.png");
const lockIcon = require("../img/login1_lock.png");
const personIcon = require("../img/Mail-icon.png");

export default class Login extends React.Component {
  componentDidMount() {
    if (this.props.navigation.state.params !== undefined) {
      Alert.alert("USER found", this.props.navigation.state.params.name);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.background} resizeMode="cover">
            <View style={styles.logo}>
            <Image source={mark} style={styles.mark} resizeMode="contain" />
             </View>

             <View style={styles.wrapper}>
             <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
              <Icon style={{ fontSize: 20, color: 'white' }} name="mail" />
              </View>
              <TextInput
                placeholder="Email Address"
                placeholderTextColor="#FFF"
                style={styles.input}
              />
            </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
              <Icon style={{ fontSize: 20, color: 'white' }}  name="lock" />
              </View>
              <TextInput
                placeholderTextColor="#FFF"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
              />
            </View>
             <TouchableOpacity activeOpacity={.5}>
              <View>
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1}>
              <Button
                full
                primary
                style={{ marginTop: 10 }}
               style={styles.button}
                 onPress={() => this.props.navigation.navigate("Home")}>
                <Text style={styles.buttonText}>LOGIN </Text>
              </Button>
            </TouchableOpacity>


            <TouchableOpacity activeOpacity={.5}>
             <View>
               <Text style={styles.newText}> New On Veg?</Text>
             </View>
           </TouchableOpacity>


            <TouchableOpacity activeOpacity={.5}>
              <Button
                full
                primary
                style={{ marginTop: 10 }}
               style={styles.signupWrap} onPress={() => this.props.navigation.navigate("Signup")}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </Button>
            </TouchableOpacity>
            </View>
            <View>
                <View style={{alignSelf:'center',position:'absolute',borderBottomColor:'white',borderBottomWidth:1,height:'50%',width:'90%'}}>
                  <Text style={{alignSelf:'center',paddingHorizontal:10,color:'white'}}>Your text here</Text>
                </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor:'#000',
    },
    logo: {
        top:3,
        left:0,
        width: 350,
        height: 100,
        alignItems: 'center',
    },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
  },
  mark: {
    width: 400,
    height: 150,
    flex: 1,
  },
  background: {
    width,
    height,
  },
  wrapper: {
    paddingVertical: 30,
    paddingLeft:20,
    paddingRight:20,
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC"
  },
  iconWrap: {
    paddingHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 20,
    width: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    fontSize:15,
  },
  button: {
    backgroundColor: "#a7c740",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  forgotPasswordText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
  },
  newText: {
    color: "#D8D8D8",
    backgroundColor: "transparent",
    textAlign: "center",
    paddingRight: 15,
    fontSize:20,
  },
  signupWrap: {
    //backgroundColor: "transparent",
    backgroundColor: "black",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
});
