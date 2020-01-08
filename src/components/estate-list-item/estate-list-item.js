import React from 'react';
import { Link } from 'react-router-dom';

import './estate-list-item.scss';

const EstateListItem = (props) => {
  const { id, address, title, previewImage, price } = props;

  return (
    <div className="estate-list-item">
      <Link className="estate-list-item__wrap-link" to={`/${id}`}>
        <img className="estate-list-item__image" src={previewImage} alt="preview" />
        <div className="estate-list-item__content">
          <div className="estate-list-item__title">{title}</div>
          <div className="estate-list-item__price">{price}</div>
          <div className="estate-list-item__address">{address}</div>
        </div>
      </Link>
    </div>
  );
}

export default EstateListItem;
