import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

const Nav = () => {
	const [user, loading] = useAuthState(auth);
	return (
		<div className="flex items-center  justify-between py-10 ">
			<Link
				className="w-64 bg-gradient-to-r from-cyan-400 	  rounded-xl"
				href="/"
			>
				<button className="text-lg font-bold p-2 px-4 rounded-full flex-grow ">
					Super Thoughts
				</button>
			</Link>
			<ul className="flex items-center gap-10">
				{!user && (
					<Link href={"/auth/login"}>
						<p className="px-4 py-2 ml-8 text-sm font-medium text-white rounded-full bg-cyan-500">
							Join Now
						</p>
					</Link>
				)}

				{user && (
					<div className="flex items-center gap-3">
						<Link href={"/post"}>
							<button className="px-4 py-2 ml-8 text-sm font-medium text-white rounded-full bg-cyan-500">
								Post
							</button>
						</Link>
						<Link href={"/dashboard"}>
							<img
								className="w-10 rounded-full cursor-pointer"
								src={user.photoURL}
								alt="user image"
							/>
						</Link>
					</div>
				)}
			</ul>
		</div>
	);
};

export default Nav;
