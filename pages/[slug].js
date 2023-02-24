/* eslint-disable react/jsx-key */
import {
	arrayUnion,
	doc,
	getDoc,
	onSnapshot,
	Timestamp,
	updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Message from "../Components/Message";
import { auth, db } from "../utils/firebase";

export default function postDetails() {
	const router = useRouter();
	const routerData = router.query;
	// console.log("routeData :>> ", routerData);
	const [message, setMessage] = useState("");
	const [allMessages, setAllMessages] = useState([]);

	// get Comments
	const getComments = async () => {
		const docRef = doc(db, "posts", routerData?.id);
		const unsubscribe = onSnapshot(docRef, (snapshot) => {
			setAllMessages(snapshot.data().comments);
			// console.log("docSnap.data?.comments :>> ", snapshot.data().comments);
		});
		return unsubscribe;
	};

	useEffect(() => {
		if (!router.isReady) return;
		getComments();
		console.log("router readt  :>> ", router.isReady);
	}, [router.isReady]);

	// handlers
	const submitComment = async () => {
		if (!auth.currentUser) return router.push("/auth/login");
		if (!message) {
			toast.error("Please write something");
		}
		const docRef = doc(db, "posts", routerData.id);
		await updateDoc(docRef, {
			comments: arrayUnion({
				message,
				avatar: auth.currentUser.photoURL,
				username: auth.currentUser.displayName,
				time: Timestamp.now(),
			}),
		});
		setMessage("");
	};

	return (
		<div>
			<h1>Hello</h1>
			<Message {...routerData}>
				<div className="my-4">
					<div className="flex rounded-full">
						<input
							className="bg-gray-100 p-2 px-4 w-full rounded-l-full text-sm "
							type="text"
							placeholder="Write Comment Here...."
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
						/>
						<button
							onClick={submitComment}
							className="bg-cyan-100 py-2 px-4 text-sm rounded-r-full"
						>
							Submit
						</button>
					</div>
				</div>
			</Message>
			<div>
				<h1 className="px-6 pt-2 font-bold align-baseline">Comments</h1>
				{allMessages?.map((message) => (
					<div>
						<div
							className="bg-white p-4 pl-12 m-2 rounded-lg "
							key={message.time}
						>
							<div className="flex items-center gap-2 mb-4">
								<img
									className="w-6 rounded-full"
									src={message.avatar}
									alt="user image "
								/>
								<h2 className="">{message.username}</h2>
							</div>
							<h2 className="text-sm">{message.message}</h2>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
