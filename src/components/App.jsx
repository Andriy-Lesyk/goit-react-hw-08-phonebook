import React, { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import AppBarr from './AppBar/AppBar';
import NotFoundViews from '../views/NotFoundVievs/NotFoundViews';
import { authOperations, authSelectors } from '../redux/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';



const ContactsViews = lazy(() =>
  import('../views/ContactsViews/ContactsViews')
);
const RegisterViews = lazy(() =>
  import('../views/RegisterViews/RegisterViews')
);
const LoginViews = lazy(() => import('../views/LoginViews/LoginViews'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <div>
        <AppBarr />
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <RegisterViews />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginViews />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsViews />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFoundViews />} />
          </Routes>
        </Suspense>
      </div>
    )
  );
}
