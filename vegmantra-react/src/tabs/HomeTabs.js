import React from "react";
import { AppRegistry, View, StatusBar, Image, StyleSheet,ListView } from "react-native";
import { NavigationActions } from "react-navigation";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  List,
  ListItem,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  InputGroup,
  Item,
  Tab,
  Tabs,
  Footer,
  FooterTab,
  Label,Thumbnail
} from "native-base";
import HomeScreen from "../HomeScreen";

const discount = require("../img/icon/discount_64.png");

export default class HomeTabs extends React.Component {

  constructor() {
   super();
   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
   this.state = {
     dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2']),
   };
 }

  render() {
    return (
      <Container>
      <Content padder>
        <Card>
          <CardItem>
            <Image source={discount} style={styles.personIcon} resizeMode="contain"/>
          <Body >
            <Text style={styles.discount}> Amazing Discount coupons</Text>
            <Text style={styles.discount} note> get discount at 29 veg place</Text>
            <Text style={styles.discount} note> by just showing vegmantra code</Text>
          </Body>
          <Right>
             <Icon name="arrow-forward" />
          </Right>
          </CardItem>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Popular Searches</Text>
          <CardItem>
          <ListView
          horizontal={true}
          style={{flex:1}}
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <View>
                <Card>
                  <CardItem cardBody>
                      <Image source={discount} style={styles.personIcon} resizeMode="contain"/>
                  </CardItem>
                  <CardItem>
                    <Left>
                      <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                      </Button>
                    </Left>
                    <Body>
                      <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 {rowData}</Text>
                      </Button>
                    </Body>
                    <Right>
                      <Text>11h ago</Text>
                    </Right>
                  </CardItem>
                  </Card>
                </View>
            }
            />
          </CardItem>
        </Card>
        <Button
          full
          rounded
          dark
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("Chat")}
        >
          <Text>Chat With People</Text>
        </Button>
        <Button
          full
          rounded
          primary
          style={{ marginTop: 10 }}
          onPress={() => this.props.navigation.navigate("ProfileScreen")}
        >
          <Text>Goto Profiles</Text>
        </Button>
      </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
  },
  icon: {
    width: 300,
    height: 300,
    alignSelf: 'center',
  },cardTitle: {
    textAlign: "center",
  },
  personIcon:{
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  hadtitle: {
     fontSize:11,
  },
  discount:{
    width:300,
    textAlign: "left",
  },
  Righticon:{
    width: 30,
    height: 30,
    alignSelf: 'center',
  }
});
