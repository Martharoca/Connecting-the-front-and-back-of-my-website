import React, { useContext } from "react";
import { Context } from "../store/appContext";
import penguinImage from "../../img/penguin.png";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello World!!</h1>
			<h4>Este es un espacio seguro donde puedes codear todo lo que te apetezca</h4>
			<p>
				<img src={penguinImage} style={{width:350}} />
			</p>
		</div>
	);
};
