import { MdLockOutline, MdMailOutline } from "react-icons/md";

const mail = () => {
	const signUpHandler = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				console.log(res);
				context.setUser({
					email: res.user?.email,
					uid: res.user?.uid,
				});
			})
			.catch((error) => {
				s;
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
				console.log("errorMessage", errorMessage);
			});
	};
	return (
		<div>
			<div className="p-10 mt-32 text-gray-700 shadow-xl rounded-2xl">
				<h2 className="text-2xl font-medium ">Enter Email</h2>
				<div className="py-4 text-xl text-center">Hello</div>

				{/* input form */}

				<form action="#" autoComplete="off">
					<div className="flex w-full gap-2 p-4 py-3 my-3 text-sm align-middle rounded-full text-slate-900 bg-slate-200">
						<MdMailOutline className="text-2xl" />
						<input
							type="text"
							id="email"
							className="w-full bg-inherit focus:outline-none focus:ring-0"
							placeholder="Your email"
						></input>
					</div>
					<div className="flex flex-row w-full gap-2 p-4 py-3 my-3 text-sm align-middle rounded-full text-slate-900 bg-slate-200">
						<MdLockOutline className="text-2xl" />
						<input
							type="password"
							id="email"
							className="w-full bg-inherit focus:outline-none focus:ring-0"
							placeholder="Password"
						></input>
					</div>

					<button className="w-full gap-2 p-4 py-3 my-3 text-sm text-white rounded-full bg-slate-700">
						SignIn
					</button>
				</form>
			</div>
		</div>
	);
};

export default mail;
