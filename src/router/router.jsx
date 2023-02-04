import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import SearchPage from "../pages/SearchPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <SearchPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/:id",
        element: <div>ID</div>
    },
]);