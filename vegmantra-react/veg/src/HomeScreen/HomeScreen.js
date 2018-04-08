import React from "react";
import { StatusBar, StyleSheet, Image } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Tab, Tabs
} from "native-base";
import TabsScreenNavigator from "../tabs/index.js";

import ScrollableTabView, { ScrollableTabBar ,ScrollableTab } from 'react-native-scrollable-tab-view';

const Home = require("../img/icon/Home_64.png");
const Map = require("../img/icon/Map_64.png");

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor:'orange'}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Text style={styles.hadtitle}>SELECTED LOCATION</Text>
          </Body>
          <Right>
              <Button
              transparent
                  onPress={() => this.props.navigation.navigate("MapsScreen")}
              ><Image onPress={() => this.props.navigation.navigate("MapsScreen")} source={Map} style={styles.Righticon}/>
              </Button>

          </Right>
        </Header>
        <TabsScreenNavigator />
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  hadtitle: {
     fontSize:11,
  },
  Righticon:{
    width: 30,
    height: 30,
    alignSelf: 'center',
  }
});
