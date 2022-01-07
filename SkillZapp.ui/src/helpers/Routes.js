import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Classes from '../views/Classes';
import Students from '../views/Students';
import SingleClass from '../views/SingleClass';
import SingleStudent from '../views/SingleStudent';
import Assessments from '../views/Assessments';
import TakeAssessment from '../views/TakeAssessment';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  // eslint-disable-next-line no-confusing-arrow
  const routeChecker = (taco) => user ? (
    <Component {...taco} user={user} />
  ) : (
    <Redirect to={{ pathname: '/', state: { from: taco.location } }} />
  );
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any,
};

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          // user={user}
          component={() => <Home user={user} />}
        />
        <Route
          exact
          path='/Classes'
          // user={user}
          component={() => <Classes user={user} />}
        />
        <Route
          exact
          path='/Classes/:teacherName/:gradeLevelDescription/:id'
          user={user}
          component={() => <SingleClass user={user} />}
        />
        <Route
          exact
          path='/Students'
          user={user}
          component={() => <Students user={user} />}
        />
        <Route
          exact
          path='/Students/:studentName/:teacherName/:id'
          user={user}
          component={() => <SingleStudent user={user} />}
        />
        <Route
          exact
          path='/Assessments'
          user={user}
          component={() => <Assessments user={user} />}
        />
        <Route
          exact
          path='/TakeAssessment/:rubricId/:standardId/:classNameId/:id'
          user={user}
          component={() => <TakeAssessment user={user} />}
        />
        <Route path='*' component={Home} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
};

export default Routes;
