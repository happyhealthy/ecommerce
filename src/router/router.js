import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../page/ErrorPage";
import { Layout } from "../page/Layout";
import { ProductPage } from "../page/ProductPage";
import PaymentPage from "../page/PaymentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <ProductPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
