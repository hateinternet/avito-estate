import React from 'react';

import sprite from './sprite.svg';
import './icon.scss';

export default class Icon extends React.Component {

  render() {
    const { name, width, height } = this.props;

    return (
      <svg
        width={width}
        height={height}
        className={`icon icon-${name}`}>
          <use xlinkHref={`${sprite}#icon-${name}`} />
      </svg>
    );
  }
}
