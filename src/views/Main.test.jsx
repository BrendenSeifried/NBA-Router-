import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('linky stuffs', () => {
  it('selects link then goes to character details page', () => {
    render(<Main />);
    screen.getByText(/loading/i);
    screen.debug();
  });
});
