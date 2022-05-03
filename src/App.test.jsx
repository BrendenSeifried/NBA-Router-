import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('First test', () => {
  it('rendering Rick Sanchez', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);
    screen.debug();

    const testOne = await screen.findByText('Name: Rick Sanchez (Alive)');
    expect(testOne).toBeInTheDocument();
  });
});
