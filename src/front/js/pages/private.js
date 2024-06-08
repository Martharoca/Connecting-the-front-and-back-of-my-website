import React, { useContext, useState, useEffect} from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import penguinImage2 from "../../img/penguin2.png";
import { useNavigate } from "react-router-dom";



export const Private = () => {
   
    return (
		<div className="text-center mt-5">
			<h4>Oops... I'm a bit tired, see you next time</h4>
			<p>
				<img src={penguinImage2} style={{width:350}} />
			</p>
		</div>
	);
}