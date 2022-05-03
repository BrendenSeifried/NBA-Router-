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

// describe('linky stuffs', () => {
//   it('selects link then goes to character details page', async () => {
//     render(
//       <MemoryRouter>
//         <App />
//       </MemoryRouter>
//     );
//     screen.getByText(/loading/i);
//     screen.debug();

//     const link = await screen.findByText('Name: Rick Sanchez (Alive)');
//     userEvent.click(link);

//     await screen.findByAltText('image of character');
//   });
// });
