import React, { Component } from 'react'
import { RefreshControl, StyleSheet, Image, ActivityIndicator, View, Text, ListView } from 'react-native'
class HttpExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false,
        }
    }

    _onRefresh() {
        this.setState({ refreshing: true });
        this.fetchData();
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        fetch('http://appschoolmada.herokuapp.com/MobileCategorieListe')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2, r3) => r1 !== r2 !== r3 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
        });
    }

    renderMovie(data) {
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: 'http://appschoolmada.herokuapp.com/Outil/images/' + data.image + ".png" }}
                    style={styles.thumbnail}
                />
                <Text style={styles.title}>{data.idcategorie}</Text>
                <Text style={styles.year}>{data.designation}</Text>
            </View>
        );
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator />
                    <Text>Loading...</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderMovie}
                />
            </View>
        );
    }
}

export default HttpExample

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    rightContainer: {
        flex: 1,
    },
    title: {
        textAlign: 'left',
        padding: 10,
    },
    year: {
        padding: 10,
        textAlign: 'left',
    },
    thumbnail: {
        width: 50,
        height: 50,
    },
    listView: {
        paddingTop: 20,
        backgroundColor: '#F5FCFF',
    },
});
