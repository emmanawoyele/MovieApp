
const AddMoviesButton=(props)=>{
   
return <div className="AddButton">
<div onClick={()=>props.HandlerAddMovies(props.title)}><i  class="fas fa-plus"></i></div>

</div>
}

export default AddMoviesButton
