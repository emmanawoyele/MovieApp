import React, { Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './searchComp'
import MovieComp from './MovieComp'
import MovieModal from './MovieModal'
import WishList from './wishlist'
import axios from 'axios'
import  Button  from "react-bootstrap/Button"
import Backdrop from './backdrop'



class App extends Component {
  state = {
    movieTitle:[],
    color:'white',
    value:'',
    message:'',
    show:false,
    poster_path:'',
    yearOfRelease:'1995',
    title:'',
    overview: '',
    original_language:'en',
    genre_id:[],
    MoviesAdd:[],
    wishlist:false,
    date:'',
 
      }

    
  componentDidMount(){
    
  
 
    const api_url = 'https://api.themoviedb.org/3/';   
    const api_key =  '04c35731a5ee918f014970082a0088b1'
     axios.get(`${api_url}discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`)
     .then(response=>{
       let movielist = response.data.results;
       this.setState({
         movieTitle:movielist
       })
      
    })
    
    
  }
  componentWillUnmount() {
  
    // this.getDate()  // clear timer upon component destruction

  }

  searchMovies=(e)=>{
    const api_url = 'https://api.themoviedb.org/3/';
    const api_key =  '04c35731a5ee918f014970082a0088b1'   
    axios.get(`${api_url}search/movie?&api_key=${api_key}&query=${this.state.value}`).then(searchmovie=>{
      let search_movies= searchmovie.data.results 
  this.setState({
    movieTitle:search_movies
  })
      
    console.log(search_movies)
    })
    e.preventDefault();
    const get_value = e.target.value
    this.setState({
      value:get_value
      
    })
    console.log(get_value)
   

  }
modalHandler=(index)=>{
console.log(index.poster_path)
  this.setState(prevState=>({
    show:!prevState.show,
    poster_path:index.poster_path,
    yearOfRelease:index.release_date,
    overview:index.overview,
    original_language:index.original_language,
    title:index.title
      }))

}



addMoviesHandler=(index,id)=>{
const addNewMovies = this.state.MoviesAdd
// stop  duplicate item to add to my array

  var Ourdate =  new Date()
  var getOurTime = Ourdate.toTimeString()
  console.log(getOurTime)
  if(index=== true){
    this.setState({
      date:getOurTime
    })
  }

if (addNewMovies.includes(index) === false) 
  addNewMovies.push(index)
  this.setState({
    MoviesAdd:addNewMovies
    
 
  })
  localStorage.setItem(index, this.state.MoviesAdd);
  
}


handleWishList=()=>{
  this.setState(prevState=>({
    wishlist:!prevState.wishlist
  }))
}

handleRemoveMovies=(e)=>{
  console.log(e + " first step")
  let deletemovies= this.state.MoviesAdd.filter((title,id)=>{
    title=title!==e
      return title
  }) 
  this.setState({
    MoviesAdd:deletemovies,
  })


}


  render(){
    // const MoviesAdd = this.state.MoviesAdd.map((title,id)=>{
    //   console.log(title)
    //   return <li Key={id} >{title}<i class="fas fa-trash-alt"></i></li>
    //   })
    return (
      <div>
  <WishList MoviesAdd={this.state.MoviesAdd} wishlist={this.state.wishlist}handleWishList={this.handleWishList}handleRemoveMovies={this.handleRemoveMovies} date={this.state.date}/>

 <div style={{background:"#272532"}} className="container">

 <div className="search_container">
   <Search connect={this.searchMovies}
    search_movies={this.state.value}/> 
 </div>

  <MovieComp moviesCollection={this.state.movieTitle} 
  openNcloseHandler={this.modalHandler}  >
  </MovieComp>

  <MovieModal modal_Handler={this.state.show}
   poster_path={this.state.poster_path} 
   yearOfRelease={this.state.yearOfRelease}
   overview={this.state.overview}
   original_language={this.state.original_language}
   title={this.state.title}
   HandlerAddMovies={this.addMoviesHandler}
   date={this.getDate}
   MoviesAdd={this.state.MoviesAdd}>
    
     
 </MovieModal>
<Backdrop show={this.state.show} openNcloseHandler={this.modalHandler} />
    </div> 
    <div >
   {/* <ul>{MoviesAdd}</ul> */}

 
</div>

      </div>
    );
  }
}
 
export default App;



