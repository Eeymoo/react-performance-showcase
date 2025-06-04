import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// 布局组件
const BasicLayout = lazy(() => import("./layouts/BasicLayout"));
const DiffPackage = lazy(() => import("@packages/diff"));
const OperationPackage = lazy(() => import("@packages/operation"));
// const ProLayout = lazy(() => import("@/layouts/ProLayout"));
// const AuthLayout = lazy(() => import("@/layouts/AuthLayout"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "diff",
        element: <DiffPackage />,
      },
      {
        path: "operation",
        element: <OperationPackage />,
      },
    ],
  }
]);

export default router;
