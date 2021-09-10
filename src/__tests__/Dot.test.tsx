/* eslint-disable @typescript-eslint/unbound-method */
import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';

import { Dot } from '../components/Dot';

describe('Indicator', () => {
  it('Snapshot Test', () => {
    const { toJSON } = render(
      <Dot key={`simple_carousel_indicator_key_${0}`} index={3} currentIndex={0} lastIndex={5} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
