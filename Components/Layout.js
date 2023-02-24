import Nav from "./Nav";

const Layout = ({ children }) => {
	return (
		<div className="px-4 mx-6 font-Inter md:max-w-2xl md:mx-auto bg-stone-100 pb-1 rounded-xl">
			<Nav />
			<main>{children}</main>
		</div>
	);
};

export default Layout;
