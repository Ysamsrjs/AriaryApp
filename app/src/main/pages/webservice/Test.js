import React, { Component } from 'react';
import { ActivityIndicator, ListView, Text, View } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        />
      </View>
    );
  }
}
// 'use strict';
// import React from 'react';
// import {
//   AppRegistry,
//   Image,
//   ListView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// const API_KEY = '7waqfqbprs7pajbz28mqf6vz';
// const API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json';
// const PAGE_SIZE = 25;
// const PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE;
// const REQUEST_URL = API_URL + PARAMS;

// const Test = React.createClass({
//   getInitialState: function() {
//     return {
//       dataSource: new ListView.DataSource({
//         rowHasChanged: (row1, row2) => row1 !== row2,
//       }),
//       loaded: false,
//     };
//   },

//   componentDidMount: function() {
//     this.fetchData();
//   },

//   fetchData: function() {
//     fetch(REQUEST_URL)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
//           loaded: true,
//         });
//       })
//       .done();
//   },

//   render: function() {
//     if (!this.state.loaded) {
//       return this.renderLoadingView();
//     }

//     return (
//       <ListView
//         dataSource={this.state.dataSource}
//         renderRow={this.renderMovie}
//         style={styles.listView}
//       />
//     );
//   },

//   renderLoadingView: function() {
//     return (
//       <View style={styles.container}>
//         <Text>
//           Loading movies...
//         </Text>
//       </View>
//     );
//   },

//   renderMovie: function(movie) {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: movie.posters.thumbnail}}
//           style={styles.thumbnail}
//         />
//         <View style={styles.rightContainer}>
//           <Text style={styles.title}>{movie.title}</Text>
//           <Text style={styles.year}>{movie.year}</Text>
//         </View>
//       </View>
//     );
//   },
// });

// export default Test;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   rightContainer: {
//     flex: 1,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   year: {
//     textAlign: 'center',
//   },
//   thumbnail: {
//     width: 53,
//     height: 81,
//   },
//   listView: {
//     paddingTop: 20,
//     backgroundColor: '#F5FCFF',
//   },
// });
