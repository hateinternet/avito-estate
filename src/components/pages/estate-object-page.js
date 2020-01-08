import React from 'react';
import { withRouter } from 'react-router-dom';

import EstateObject from '../estate-object';

const EstateObjectPage = ({ match }) => <EstateObject fetchParams={match.params.id}/>;

export default withRouter(EstateObjectPage);
