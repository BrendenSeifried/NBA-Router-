import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('First test', () => {
  it('rendering Rick Sanchez', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.debug();

    const link = await screen.findByText('Main');
    userEvent.click(link);

    const testOne = await screen.findByText('Name: Rick Sanchez (Alive)');
    userEvent.click(testOne);

    const testThree = await screen.findByAltText(`Rick Sanchez`);
    expect(testThree).toBeInTheDocument();
  });
});
