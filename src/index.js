import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Videos /> },
			{ path: "videos", element: <Videos /> },
			{ path: "videos/:keyword", element: <Videos /> },
			{ path: "videos/watch/:keyword", element: <VideoDetail /> },
		],
	},
]);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
