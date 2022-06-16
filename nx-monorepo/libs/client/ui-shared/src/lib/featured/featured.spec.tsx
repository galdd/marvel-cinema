import { render } from '@testing-library/react';

import Featured from './featured';

describe('Featured', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Featured />);
    expect(baseElement).toBeTruthy();
  });
});
