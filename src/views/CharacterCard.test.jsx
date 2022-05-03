import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('linky stuffs', () => {
  it('selects link then goes to character details page', async () => {
    render(
      <MemoryRouter initialEntires={['/character/1']}>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    screen.debug();

    const link = await screen.findByText('Name: Rick Sanchez (Alive)');
    userEvent.click(link);

    await screen.findByAltText('image of character');
  });
});
