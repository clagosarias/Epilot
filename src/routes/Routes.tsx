import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes as ReactRoutes } from 'react-router-dom';

const SearchPage = lazy(() => import('../pages/Search'));
const UserPage = lazy(() => import('../pages/User'));

export const Routes = () => {
  return <BrowserRouter>
    <ReactRoutes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/user/:user" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </ReactRoutes>
  </BrowserRouter>
}