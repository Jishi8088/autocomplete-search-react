import React from 'react';
import classNames from 'classnames';

import Icon from '../Icon/Icon';

const GithubLoginButton = ({ button, style }) => {
  const authState = Math.random().toString(36).slice(2);
  sessionStorage.setItem('authState', authState);

  return (
    <div></div>
  );
};

export default GithubLoginButton;
