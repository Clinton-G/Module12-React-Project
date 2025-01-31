import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store/Store'
import Home from './Home';
import Login from './LoginUser';
import ShoppingCart from './ShoppingCart';
import OrderHistory from './OrderHistory';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const App = () => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/order-history" element={<OrderHistory />} />
          </Routes>
        </Router>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
