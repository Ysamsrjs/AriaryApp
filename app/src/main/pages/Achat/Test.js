import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var SampleApp = React.createClass({

  getInitialState: function() {
        return {
            componentSelected: 'One'
        }
    },

  changeComponent: function(component) {
    this.setState({
        componentSelected: component    
    })
  },

  renderComponent: function(component) {
        if(component == 'One') {
        return <ComponentOne changeComponent={this.changeComponent} />
      } else if(component == 'Two') {
        return <ComponentTwo changeComponent={this.changeComponent} />
      } else if(component == 'Three') {
        return <ComponentThree changeComponent={this.changeComponent} />
      }
  },

  render: function() {
    return (
      <View style={styles.container}>
        {this.renderComponent(this.state.componentSelected)}
      </View>
    );
  }
});

var ComponentOne = React.createClass({
    render: function() {
    return (
        <View style={{backgroundColor: 'red', paddingTop:60, flex:1}}>
        <Text style={{color: 'white', marginBottom:150, fontSize:20}}>Hello From Component One</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('Two') } style={styles.button}><Text>Two</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}><Text>Three</Text></TouchableHighlight>
      </View>
    )
  }
})

var ComponentTwo = React.createClass({
    render: function() {
    return (
        <View style={{backgroundColor: 'orange', paddingTop:60, flex:1}}>
        <Text style={{color: 'white', marginBottom:150, fontSize:20}}>Hello From Component Two</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('One') } style={styles.button}><Text>One</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Three') } style={styles.button}><Text>Three</Text></TouchableHighlight>
      </View>
    )
  }
})


var ComponentThree = React.createClass({
    render: function() {
    return (
        <View style={{backgroundColor: 'purple', paddingTop:60, flex:1}}>
        <Text style={{color: 'white', marginBottom:150, fontSize:20}}>Hello From Component Three</Text>
        <TouchableHighlight onPress={() => this.props.changeComponent('One') } style={styles.button}><Text>One</Text></TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.changeComponent('Two') } style={styles.button}><Text>Two</Text></TouchableHighlight>
      </View>
    )
  }
})

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed'
  }
});

export default SampleApp;