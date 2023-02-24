/* eslint-disable react-hooks/rules-of-hooks */
import {
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	query,
	where,
} from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsTrash2Fill } from "react-icons/bs";
import { VscEdit } from "react-icons/vsc";
import Message from "../Components/Message";
import { auth, db } from "../utils/firebase";

const dashboard = () => {
	const route = useRouter();
	const [user, loading] = useAuthState(auth);
	const [userPosts, setUserPosts] = useState([]);
	// console.log("useAuthState(auth)", useAuthState(auth));

	// if user logged
	const getData = async () => {
		if (loading) return;
		if (!user) return route.push("/auth/login");

		const collectionRef = collection(db, "posts");
		const q = query(collectionRef, where("user", "==", user.uid));
		const unsubscribe = onSnapshot(q, (snapshot) => {
			setUserPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
		return unsubscribe;
	};
	useEffect(() => {
		getData();
	}, [user, loading]);

	// console.log("userPosts", userPosts);

	// Handlers
	const deletePost = async (id) => {
		const docRef = doc(db, "posts", id);
		await deleteDoc(docRef);
	};

	return (
		<div>
			<h1>Your Posts</h1>
			<div>
				{userPosts.map((post) => {
					return (
						<Message key={post.id} {...post}>
							<div className="flex gap-4">
								<button
									onClick={() => deletePost(post.id)}
									className="flex items-center justify-center gap-1 text-sm text-red-600"
								>
									DELETE
								</button>
								<Link href={{ pathname: "/post", query: post }}>
									<button className="flex items-center justify-center gap-1 text-sm text-cyan-700">
										Edit
										<VscEdit />
									</button>
								</Link>
							</div>
						</Message>
					);
				})}
			</div>
			<button
				className="px-4 py-2 my-6 font-medium text-gray-800 bg-gray-200 rounded-full"
				onClick={() => auth.signOut()}
			>
				Sign out
			</button>
		</div>
	);
};

export default dashboard;
