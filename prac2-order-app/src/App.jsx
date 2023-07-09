import React from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { useRecoilValue } from 'recoil';
import { ShowCartModalAtom } from './recoil/ShowCartModalAtom';

function App() {
  const showCartModal = useRecoilValue(ShowCartModalAtom);

  return (
    <>
      {showCartModal.isShow && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
