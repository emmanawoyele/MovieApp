import Card from 'react-bootstrap/Card'
import MovieModal from './MovieModal'


const  MovieComp=(props)=>{
    const img_url = 'https://image.tmdb.org/t/p/w1280';
  const movies_list =props.moviesCollection.filter(m=>m.backdrop_path).map((m,index)=>{
      return <Card onClick={()=>props.openNcloseHandler(props.moviesCollection[index])}  key={index+m}>
          <img   style={{width:"100%"}} src={img_url+m.backdrop_path} alt={m.title}/>
          <div className="movie_info">
          <h3 >{m.original_title}</h3>
          <h3 style={{background:"#272532"}}className={m.vote_average <=8?"blue":"red"}>{m.vote_average}</h3>
          </div>
  
        
        </Card>
          })
        
return<div className="movie_box">

  {movies_list}
  <div className="modal">
   

  </div>
 
</div>
}

export default MovieComp