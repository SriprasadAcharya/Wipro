import React from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';
import {connect} from 'react-redux';
import {imageListApi} from '../redux/actions';
import axios from 'axios';

class ImageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageListArray: ''
    }
    // this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  componentDidMount() {
    this.props.imageListApi();
    axios.get('https://picsum.photos/list')
  .then(function (response) {
    console.log(response[0].author_url);
    this.setState({imageListArray: response[0].author_url})
    // return response
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    // console.log('this.props.actorListArray', this.props.imageListArray);
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{uri: imageListArray}}
        />
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
    height: 300,
  },
});
