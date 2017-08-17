
import React, { Component, PropTypes} from 'react';
import { TouchableOpacity,StatusBar,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class NavBarItem extends Component {
  render() {
    const { iconName, onPress } = this.props;
    return (
      <View>
        <StatusBar hidden={true}/>
        <TouchableOpacity
          style={{ paddingHorizontal: 20 }}
          onPress={() => onPress()}>
          <Icon name={iconName} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

NavBarItem.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default NavBarItem;