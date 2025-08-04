import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import theme from "../theme.json";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider theme={theme}>
    <App />
  </ConfigProvider>
);
