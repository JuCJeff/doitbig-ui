/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import SignInPage from 'containers/SignInPage/Loadable';
import SignupPage from '../SignupPage';
import ProfilePage from '../ProfilePage';
import TracksPage from '../TracksPage';
import UpdatePage from '../EditProfilePage/Loadable';
import CoursePage from '../CoursePage/Loadable';
import CoursesPage from '../CoursesPage/Loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/course" component={CoursePage} />
        <Route exact path="/courses" component={CoursesPage} />
        <Route exact path="/tracks" component={TracksPage} />
        <Route exact path="/update" component={UpdatePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
