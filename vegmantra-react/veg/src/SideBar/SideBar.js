import React from "react";
import { View, AppRegistry, StyleSheet, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Left, Body, Right, Thumbnail,
  Icon
} from "native-base";
const staticRoute = ["My Favorite Listing", "Blog posts", "VM for Business", "Sign Out"];

const log = require("../img/VM_logo_side.png");
const heart = require("../img/icon/Heart_menu_64.png");
const blog = require("../img/icon/Blog_32.png");
const handshake = require("../img/icon/hand-shake_64.png");
const singout = require("../img/icon/sign_out_32.png");
const edit = require("../img/icon/edit_64.png");

const routes = [{icon:heart, name:"My Favorite Listing",navi:''}, {icon:blog, name:"Blog posts",navi:''}, {icon:handshake, name:"VM for Business",navi:''}, {icon:singout, name:"Sign Out",navi:'Login'}];

export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Image
                square
                resizeMode="contain"
                style={{
                  height: 50,
                  width: 150,
                }}
                source={log}
              />
          </ListItem>
            <ListItem avatar onPress={() => this.props.navigation.navigate('Profile')}>
              <Left>
                <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik <Image source={edit} style={styles.edit} resizeMode="contain"/></Text>
                <Text note>0 Reviews, 0 Picture</Text>
              </Body>
              <Right>
                 <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 2 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  noBorder
                  onPress={() => this.props.navigation.navigate('Login')}
                >
                <Image source={data.icon} style={styles.lefticon} resizeMode="contain"/>
                  <Text>{data.name}</Text>
                </ListItem>
              );
            }}/>
            <List>
            <ListItem noBorder><Text> Send Feed back</Text>
            </ListItem>
            <ListItem noBorder><Text> Rate us on Play store</Text>
            </ListItem>
            <ListItem noBorder><Text> About</Text>
            </ListItem>
            <ListItem noBorder><Text> Terms of use</Text>
            </ListItem>
            </List>
        </Content>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex:1,
        // backgroundColor:'#f1f1f1',
    },
    edit:{
      width:20,
      height:15,
    },
    lefticon: {
      width:45,
      height:24,
    }
});
