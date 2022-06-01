import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    areas: [{ id: 1, name: '서울' }],
  }));

  const { getByText } = render((
    <App />
  ));

  describe('제목 표시', () => {
    it('제목이 보인다', () => {
      expect(getByText(/지역/)).not.toBeNull();
      expect(getByText(/카테고리/)).not.toBeNull();
    });
  });
});
