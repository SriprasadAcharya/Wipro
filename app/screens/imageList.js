import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {imageListApi} from '../redux/actions';
import axios from 'axios';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageString: '',
    };
  }

  componentDidMount() {
    // this.props.imageListApi();
    const that = this;
    axios
      .get('https://picsum.photos/list')
      .then(function (response) {
        console.warn('RESPONSE', response.data[0].author_url);
        that.setState({imageString: response.data[0].author_url});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    console.warn('imageString', this.state.imageString);
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: this.state.imageString}} />
      </View>
    );
  }
}

function mappStateToProps(state) {
  return {
    loader: state.loaderReducer,
    imageListArray: state.imageListArray,
  };
}
export default connect(mappStateToProps, {imageListApi})(ImageList);

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
