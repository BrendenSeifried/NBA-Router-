import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Main from './Main';

describe('linky stuffs', () => {
  it('selects link then goes to character details page', async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    screen.debug();

    const testOne = await screen.findByText('Name: Rick Sanchez (Alive)');
    expect(testOne).toBeInTheDocument();
  });
});
