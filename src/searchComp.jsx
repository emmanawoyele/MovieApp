function Search(props){
    return <div>
<form  className="example"action="" onSubmit={props.connect}>
    <input type="text" onChange={props.connect } value={props.search_movies} placeholder="Search.." name="search" ></input>
   
</form>
    </div>
    }
    export default Search