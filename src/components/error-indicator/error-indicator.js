import React from 'react';

import Icon from '../icon';
import './error-indicator.scss';

export default () => {
  return (
    <div className="error-indicator">
      <div className="error-indicator__icon">
        <Icon name="ghost" />
      </div>
      <div className="error-indicator__text">
        something has gone terribly wrong
      </div>
    </div>
  );
};
