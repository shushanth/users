import React from "react";

import { Routes, Route } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import Home from "../home/Home";
import Loading from "../../common/components/Loading";
import Error from "../../common/components/Error";
const UserList = React.lazy(() => import("../userList/UserList"));

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route
        path="/users"
        element={
          <ErrorBoundary fallback={<Error />}>
            <React.Suspense fallback={<Loading />}>
              <UserList />
            </React.Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
};

export default PageRoutes;
