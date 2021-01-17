import  Modal from "react-bootstrap/Modal"
import AddButton  from './AddMovieCompButton'

const img_url = 'https://image.tmdb.org/t/p/w1280';

const MovieModal=(props)=>{
    const ModalOpener =props.modal_Handler?<div className="modal_show" style={{
         transform:props.modal_Handler? 'translateY(0vh)': 'translateY(-100vh)',
    opacity:props.modal_Handler ?'1': '0'}}>
        <div className="information_container" >
        <img style={{width:"100%"}} src={img_url+props.poster_path } alt={props.poster_path}/>
        <div className="more_information">
        <address>
        Release Date:<span>{props.yearOfRelease}</span><br/>
        overview:<span>{props.overview}</span><br/>
       Language:<span>{props.original_language}</span> <br/>
            </address>
            {/* <AddButton  onClick={()=>props.HandlerAddMovies(props.title)} MoviesAdd={props.MoviesAdd}/> */}
            <AddButton  HandlerAddMovies={()=>props.HandlerAddMovies(props.title ,props.id)} MoviesAdd={props.MoviesAdd}  />

        </div>
       
        </div>
    </div>:null

    return <div  >
       {ModalOpener}
   
    </div>

}

export default MovieModal