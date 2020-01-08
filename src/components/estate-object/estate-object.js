import React from 'react';
import { Link } from 'react-router-dom';

import Icon from '../icon';
import Gallery from '../gallery';
import { compose } from '../../utils';
import { withRealtyService, withLoading } from '../hoc';

import './estate-object.scss';

const EstateObject = (props) => {
  const { address, title, price, description, sellerName, images } = props.data;

  return (
    <div className="estate-object">
      <div className="estate-object__header">
        <Link className="estate-object__backward" to="/">
          <Icon name={'back'}/>
        </Link>
        <h2 className="estate-object__title">{title}</h2>
      </div>
      <Gallery images={images} />
      <div className="estate-object__info">
        <div className="estate-object__price">{price}</div>
        <div className="estate-object__address">{address}</div>
        <div className="estate-object__description">{description}</div>
        <div className="estate-object__sellerName">{sellerName}</div>
      </div>
    </div>
  );
}

const mapMethodsToProps = (realtyService) => {
  return {
    getData: realtyService.getItem,
  };
};

export default compose(
  withRealtyService(mapMethodsToProps),
  withLoading(),
)(EstateObject);
