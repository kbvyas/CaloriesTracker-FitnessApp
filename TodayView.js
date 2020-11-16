import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import { Dimensions } from 'react-native';

import Exercise from './Exercise'
class TodayView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listActivities: {},
            totalActivity: 0.0,
            currentDate: new Date(new Date().toDateString())
        }
    }

    componentDidMount() {
        console.log("component did mount")
        this._navListener = this.props.navigation.addListener('focus', () => {
            this.getExercises();
        })

    }

    getExercises() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("x-access-token", this.props.tok);

        let requestOptions = {
            method: 'GET',
            headers: myHeaders
        };

        fetch('https://mysqlcs639.cs.wisc.edu/users/' + this.props.user, {
            method: 'GET',
            headers: {'x-access-token': this.props.tok }
        })
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                totalActivity: resp.goalDailyActivity
            })
        });

        fetch('https://mysqlcs639.cs.wisc.edu/activities' , requestOptions) 
           
        .then(response => response.json())
        .then(result => {
            this.setState({
                listActivities: result.activities
            });
        })

        
    }

    displayExercises(){
        let displayedExercise = [];

        for (let activity of Object.values(this.state.listActivities)) {
            let exerciseDate = new Date(activity.date)
            exerciseDate.setHours(0,0,0,0)
            if (exerciseDate.getTime() == this.state.currentDate.getTime()) {
                console.log(displayedExercise)
                displayedExercise.push(
                    <Exercise key = {activity.id} content={activity} continueToken={this.props.tok} newExercises={this.getExercises.bind(this)} show={false}/>
                )
            }
        }

        return displayedExercise;
    }

    displayStats() {
        let duration = 0;
        let calories = 0;

        for (let activity of Object.values(this.state.listActivities)) {
            let exerciseDate = new Date(activity.date)
            exerciseDate.setHours(0,0,0,0)
            if (exerciseDate.getTime() == this.state.currentDate.getTime()) {
                duration += activity.duration
                calories += activity.calories
            }
        }

        return (
            <Card>
            <Card.Title>Goals</Card.Title>
                <View style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text>
                        Activity duration:
                    </Text>
                    <Text>
                        {duration}/{this.state.totalActivity} min 
                    </Text>
                </View>
                <View style={{ marginLeft: 5, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Text>
                        Calories:
                    </Text>
                    <Text>
                        {calories} kCals
                    </Text>
                </View>    
            </Card>
        )
    }

    render() {
        return (
            <ScrollView style={styles.mainContainer} contentContainerStyle={{ flexGrow: 11, justifyContent:'center', alignItems: "center" }}>
                <View style={styles.space} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Icon name="id-badge" size={40} color= "#900" style={{ marginRight: 20}} />
                    {/* <Text style={styles.bigText}>It's a great day!</Text> */}
                </View>

                {this.displayStats()}

                <View style={styles.spaceSmall}></View>
                <Text> What's in for today</Text>
                <View style={styles.space} />
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                <Icon name="running" size={40} color= "#900" style={{ marginRight: 20}} />
                <Text style={{ textAlignVertical: "center", fontWeight: "700", fontSize: 20}}>Exercises</Text>
                </View>

                {this.displayExercises()}

                <View style={styles.spaceSmall}></View>
                <View style={styles.space} />
            </ScrollView>

        );
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

export default TodayView;

