import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import { Dimensions } from 'react-native';

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            date: "",
            name: "",
            duration: "",
            calories: "",
            
        }
    }

  render() {
  
    return (
      <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent: 'center', alignItems: "center" }}>
        <View style={styles.space} />
        <Card>
          <Card.Title>{this.props.content.name}</Card.Title>
          <View style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text>
              Date:
            </Text>
            <Text>
              {this.props.content.date}
            </Text>
          </View>
          <View style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text>
              Calories Burned:
            </Text>
            <Text>
              {this.props.content.calories}
            </Text>
          </View>
          <View style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
            <Text>
              Duration:
            </Text>
            <Text>
              {this.props.content.duration} min
            </Text>
          </View>
        </Card>
        <View style={styles.space} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    scrollView: {
        height: Dimensions.get('window').height
      },
      mainContainer: {
        flex: 1
      },
      scrollViewContainer: {},
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      bigText: {
        fontSize: 32,
        fontWeight: "700",
        marginBottom: 5
      },
      spaceSmall: {
        width: 20,
        height: 10,
      },
      space: {
        width: 20,
        height: 20,
      },
      spaceHorizontal: {
        display: "flex",
        width: 20
      },
      buttonInline: {
        display: "flex"
      },
      input: {
        width: 200,
        padding: 10,
        margin: 5,
        height: 40,
        borderColor: '#c9392c',
        borderWidth: 1
      },
      inputInline: {
        flexDirection: "row",
        display: "flex",
        width: 200,
        padding: 10,
        margin: 5,
        height: 40,
        borderColor: '#c9392c',
        borderWidth: 1
      }
    });

    export default Exercise;

