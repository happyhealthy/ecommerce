import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../page/ErrorPage";
import { Layout } from "../page/Layout";
import { ProductPage } from "../page/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "product",
        element: <ProductPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
