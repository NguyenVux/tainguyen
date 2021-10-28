import { Button, Card, CardActions,CardContent,Typography } from '@mui/material';
import React from 'react';
import { MoviesContext,MovieInfo } from '../MoviesContext';
import { useHistory} from 'react-router-dom';


function MovieCard({movie,...props}:{movie:MovieInfo}){
	const history = useHistory();
	return <Card sx={{ maxWidth: 275,minWidth: 250,margin:"5px" }}>
	<CardContent>
	  <Typography variant="h5" component="div">
	 	{Array.isArray(movie.name)?movie.name[0]:movie.name}
	  </Typography>
	  <Typography sx={{ mb: 1.5 }} color="text.secondary">
	    {Array.isArray(movie.Director)?movie.Director[0]:movie.Director}
	  </Typography>
	</CardContent>
	<CardActions>
	  <Button size="small" onClick={()=> history.push(''+movie.id)}>Watch Movie</Button>
	</CardActions>
      </Card>;
}



export default function HomePage()
{
	const context = React.useContext(MoviesContext);
	const lastView = parseInt(localStorage.getItem("lastView") as string);
	const Similar = localStorage.getItem("lastView")?context.filter(value => 
		(value.The_loai as string[]).some(v => (context[lastView].The_loai as string[]).includes(v))
	).sort((a,b)=> {
		const aCount = [...new Set([...a.The_loai as string[],...context[lastView].The_loai as string[]])].length
		const bCount = [...new Set([...b.The_loai as string[],...context[lastView].The_loai as string[]])].length
		return aCount-bCount;
	}):undefined;
	console.log(Similar);
	return (<>
		<div style={{display:"flex",justifyContent:"center",padding:50,flexWrap:"wrap",maxWidth: "100%"}}>
		{Similar && Similar.map((value,index) =>

				<MovieCard key ={index} movie={value}/>
		)}
		
		</div>
	</>);
}