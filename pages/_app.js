import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../Components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<ToastContainer limit={2} />
			<Component {...pageProps} />
		</Layout>
	);
}
