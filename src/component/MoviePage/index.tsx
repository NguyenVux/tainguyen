import { Typography, Rating } from "@mui/material";
import React,{useContext } from "react";
import {  useParams } from "react-router";
import { MovieInfo, MoviesContext } from "../MoviesContext";
import HomePage from "../HomePage"
interface ParamTypes {
	id: string;
}
export default function MoviePage({movie}:{movie:MovieInfo}){
	const context = useContext(MoviesContext);
	const {id} = useParams<ParamTypes>();
	const info = context[parseInt(id as string)];
	console.log();
	localStorage.setItem("lastView",id);
	return <div style={{
		
	}}>
		<div style={{
			width: "700px",
			margin:"auto",
			height: "600px",
			padding: 10,
		}}>
			<div style={{
				width: "600px",
				height: "300px",
				margin: "0 auto",
				marginBottom: "30px",
				background: "gray"
			}}></div>
			<Typography variant="h5">{Array.isArray(info.name)?info.name[0]:info.name}</Typography>
			<Typography variant="h6">Đạo diễn: {Array.isArray(info.Director)?info.Director.join(', '):info.Director}</Typography>
			<Typography variant="h6" noWrap style={{maxWidth:"500px",overflow:"hidden",textOverflow:"ellipsis"}}>Diễn viên: {Array.isArray(info.Actor)?info.Actor.join(', '):info.Actor}</Typography>
			<Typography variant="h6" display="inline" >Đánh Giá </Typography>
			<Rating value={info.Rating ==="N/A"?0:parseFloat(info.Rating)/2} precision={0.5} readOnly></Rating>
			<Typography variant="h6" display="inline" > - Lượt xem: {info.View}</Typography>		
		</div>
		<HomePage/>
	</div>;
}