import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button: any = (props: any) => {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : undefined}
    >
      {props.children}
    </button>
  );
};

export const OutlineButton = (props: any) => {
  return (
    <Button
      className={`btn-outline ${props.className}`}
      onClick={props.onClick ? () => props.onClick() : null}
    >
      {props.children}
    </Button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
