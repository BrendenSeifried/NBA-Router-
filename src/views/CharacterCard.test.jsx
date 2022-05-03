import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('linky stuffs', () => {
  it('selects link then goes to character details page', async () => {
    render(
      <MemoryRouter initialEntries={['/char/1']}>
        <App />
      </MemoryRouter>
    );

    await waitForElementToBeRemoved(screen.getByText('Loading'));
    const test = await screen.findByAltText(`Rick Sanchez`);
    console.log(test);
  });
});
