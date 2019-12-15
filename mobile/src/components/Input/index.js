import React, { forwardRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import { Container, TextInput } from './styles';

import colors from '~/styles/colors';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color={colors.white} />}
      <TextInput {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: PropTypes.string,
};

Input.defaultProps = {
  style: {},
  icon: null,
};

export default forwardRef(Input);
