import React from 'react';

import { compose } from '../../utils';
import { withRealtyService, withLoading } from '../hoc';
import EstateListItem from '../estate-list-item';

import './estate-list.scss';

const EstateList = ({ data: items }) => {

  if (items.length < 1) {
    return <div>empty list</div>;
  }

  return (
    <div className="estate-list">
      <div className="estate-list__header">
        <h2 className="estate-list__title">Все предложения</h2>
      </div>
      <div className="estate-list__content">
        {
          items.map(item => (
            <React.Fragment key={item.id}>
              <EstateListItem {...item} />
            </React.Fragment>
          ))
        }
      </div>
    </div>
  );
}

const mapMethodsToProps = (realtyService) => {
  return {
    getData: realtyService.getAllItems,
  };
};

export default compose(
  withRealtyService(mapMethodsToProps),
  withLoading(),
)(EstateList);
