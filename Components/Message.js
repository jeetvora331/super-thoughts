import {
	collection,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	orderBy,
	query,
} from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, db } from "../utils/firebase";

const Message = ({ children, avatar, username, description }) => {
	return (
		<div className="p-4 bg-white border-b-2 rounded-lg my-3">
			<div className="flex align-top">
				<Link className="flex align-top" href={"/dashboard"}>
					<img src={avatar} alt="user img" className="w-10 rounded-full" />
					<h2 className="mx-3 text-lg font-semibold">{username}</h2>
				</Link>
			</div>
			<div className="py-4 text-base">
				<p>{description}</p>
			</div>
			{children}
		</div>
	);
};

export default Message;
