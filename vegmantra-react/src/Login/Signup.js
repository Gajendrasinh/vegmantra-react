import React from "react";
import { View, TextInput, TouchableOpacity,StyleSheet, Image, Dimensions, Platform, Footer} from 'react-native';

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
import Login from "./Login.js";

const { width, height } = Dimensions.get("window");

const background = require("../img/BGwithmask.jpg");
const fbicon = require("../img/BGwithmask.jpg");
const googleicon = require("../img/BGwithmask.jpg");

export default class Signup extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header style={{backgroundColor:'orange'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="close" />
          </Button>
        </Left>
        <Body>
          <Title>SIGN UP</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContain}>
          <View style={styles.wrapper}>

            <View style={styles.inputWrap}>
               <View style={styles.iconWrap}>
                 <Icon name="person" />
               </View>
               <TextInput
                 placeholder="Name"
                 placeholderTextColor="black"
                 style={styles.input}
               />
             </View>
             <View style={styles.inputWrap}>
                <View style={styles.iconWrap}>
                <Icon name="mail" />
                </View>
                <TextInput
                  placeholder="Email Address"
                  placeholderTextColor="black"
                  style={styles.input}
                />
              </View>
            <View style={styles.inputWrap}>
              <View style={styles.iconWrap}>
                  <Icon name="lock" />
              </View>
              <TextInput
                placeholderTextColor="black"
                placeholder="Password"
                style={styles.input}
                secureTextEntry
              />
            </View>

            <TouchableOpacity activeOpacity={.5}>
              <Button
                full
                primary
                style={{ marginTop: 10 }}
                style={styles.button}
                onPress={() => this.props.navigation.navigate("Login")}>
                <Text style={styles.buttonText}>SIGN UP</Text>
              </Button>
            </TouchableOpacity>
            <View style={styles.social}>
                <Button
                  onPress={this.onFacebookButtonClick}
                  iconLeft
                  bordered
                  activeOpacity={0.5}
                  style={styles.fbBtn} >
                  <Icon style={{ fontSize: 20, color: 'gray' }} name="logo-facebook" />
                  <Text
                    uppercase={false}
                    style={{
                    fontSize: 18, fontWeight: '500', backgroundColor: 'blue', paddingLeft: width / 30,
                  }}
                  >Facebook
                </Text>
              </Button>
              <Button
                iconLeft
                bordered
                activeOpacity={0.5}
                style={styles.googleBtn}>
                  <Icon style={{ fontSize: 20, color: 'gray' }} name="logo-google" />
                  <Text uppercase={false} style={{fontSize: 18, flex: 1, textAlign: 'center', fontWeight: '500', color: 'black', paddingLeft: width / 50,}}> Google </Text>
                </Button>
              </View>
            </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
        backgroundColor:'#f1f1f1',
    },
  markWrap: {
    flex: 1,
    paddingVertical: 30,
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
    paddingHorizontal: 15,
    fontSize:20,
  },
  button: {
    backgroundColor: "#a7c740",
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  fbBtn: {
      width: (width * 37) / 100,
      height: height / 14,
      borderColor: 'red',
      marginLeft: width / 13,
  },
  googleBtn:{
    width: (width * 37) / 100,
    height: height / 14,
    borderColor: 'red',
    marginLeft: width / 13,
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
