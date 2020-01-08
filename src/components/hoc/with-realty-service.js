import React from 'react';
import { RealtyServiceConsumer } from '../service-context';

const withRealtyService = (mapMethodsToProps) => (Wrapped) => {
  return (props) => {
    return (
      <RealtyServiceConsumer>
        {
          (realtyService) => {
            const serviceProps = mapMethodsToProps(realtyService);

            return (
              <Wrapped {...props} {...serviceProps} />
            );
          }
        }
      </RealtyServiceConsumer>
    );
  };
};

export default withRealtyService;
