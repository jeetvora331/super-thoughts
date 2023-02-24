/* eslint-disable react-hooks/rules-of-hooks */
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdMailOutline } from "react-icons/md";
import { auth } from "../../utils/firebase";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

const login = () => {
	//Click Handlers

	const route = useRouter();
	const [user, loading] = useAuthState(auth);
	const googleHandler = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				// const user = result.user; //Turn on if required
				// ...
				route.push("/");
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.customData.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				// ...
			});
	};

	useEffect(() => {
		if (user) {
			route.push("/");
		} else {
			console.log("user not found");
		}
	}, [user]);

	return (
		<div className="p-10 mt-12 text-gray-700 shadow-xl rounded-2xl">
			<img src="/logo.png" alt="" className="h-80 mx-auto" />
			<h2 className="text-4xl font-semibold text-center">Join Today !</h2>
			<div className="py-4 text-xl text-center">
				<h3 className="py-4">SignIn to Continue</h3>
				<button
					onClick={googleHandler}
					className="text-lg font-semibold flex items-center w-full gap-4 p-4 py-3 my-3  text-white rounded-full bg-slate-700"
				>
					<FcGoogle className="p-1 -m-1 text-3xl bg-white rounded-full " />
					SignIn with Google
				</button>

				<Link href={"./mail"}>
					<button className="text-lg font-semibold flex w-full gap-4 p-4 py-3 my-3  text-white rounded-full bg-slate-700">
						<MdMailOutline className="text-2xl" />
						SignIn Email
					</button>
				</Link>
			</div>
			{/* email form */}
			<div></div>
		</div>
	);
};

export default login;
