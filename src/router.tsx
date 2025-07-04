import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// 布局组件
const BasicLayout = lazy(() => import("./layouts/BasicLayout"));
const DiffPackage = lazy(() => import("@packages/diff"));
const OperationPackage = lazy(() => import("@packages/operation"));
const BlockEditorPackage = lazy(() => import("@packages/blockEditor"));

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
      {
        path: "block-editor",
        element: <BlockEditorPackage />,
      }
    ],
  }
]);

export default router;
