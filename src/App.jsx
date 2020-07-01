import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../__fixture__/data'; // TODO : API 통신 구현 완료 후 삭제 예정

import { setInitRegions } from './action';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setInitRegions(regions));
  }, []);

  return (
    <div>
      <RegionsContainer />
    </div>
  );
}
