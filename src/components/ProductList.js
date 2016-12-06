import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { productFetch } from '../actions';
import ListItem from './ListItem';

class ProductList extends Component {
  componentWillMount() {
    this.props.productFetch();

    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ products }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(products);
  }

  renderRow(product) {
    return <ListItem product={product} />;
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  const products = _.map(state.products, (val, uid) => {
    return { ...val, uid };
  });

  return { products };
};

export default connect(mapStateToProps, { productFetch })(ProductList);
