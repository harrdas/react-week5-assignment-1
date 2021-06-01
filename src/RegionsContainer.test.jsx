import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  it('레스토랑 지역 목록이 그려진다', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [
        { id: 1, region: '서울' },
      ],
    }));

    const { getByText } = render(<RegionsContainer />);

    expect(getByText(/서울/)).not.toBeNull();
  });
});
