import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import NotFound from "./components/NotFound";
import MainComponent from "./components/main/MainComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <MainComponent />,
            },
        ],
    },
]);

export default router;
