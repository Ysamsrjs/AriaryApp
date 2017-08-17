import {StyleSheet} from 'react-native'
const drawerCss = StyleSheet.create({
    headerImage: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    viewHeader:{
        backgroundColor: '#00C853',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textHeader:{
        fontSize:50,
        color:'white',
        justifyContent: 'center',
        alignItems: 'center',
        width:'100%',

    }
});
export default drawerCss;