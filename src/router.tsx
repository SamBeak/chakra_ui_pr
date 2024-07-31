import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFoundComponent from "./components/shared/NotFoundComponent";
import MainComponent from "./components/root/MainComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundComponent />,
        children: [
            {
                path: "",
                element: <MainComponent />,
            },
        ],
    },
]);

export default router;
