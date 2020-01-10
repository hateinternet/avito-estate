import React from 'react';
import { Link } from 'react-router-dom';

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
      <Link className="error-indicator__link" to="/">
        go to main page
      </Link>
    </div>
  );
};
