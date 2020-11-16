// DOES NOT WORK YET.... AVOID THIS

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5' ;
import { Dimensions } from 'react-native';
import DatePicker from 'react-native-datepicker'
import moment from 'moment'
import { Header } from 'react-native/Libraries/NewAppScreen';


class ExercisesView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listActivities:{},
            nameExercise: "",
            dateExercise: "",
            durationExercise: "",
            caloriesExercise: ""
        }
    }

    

    componentDidMount() {
        
    }

   

    render() {
        return <></>
    }
}

const styles = StyleSheet.create({
    
});

export default ExercisesView;