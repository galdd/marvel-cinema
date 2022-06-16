import { render } from '@testing-library/react';

import ClientUiShared from './client-ui-shared';

describe('ClientUiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientUiShared />);
    expect(baseElement).toBeTruthy();
  });
});
