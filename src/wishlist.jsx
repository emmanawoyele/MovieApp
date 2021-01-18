
const WishList=(props)=>{
    const MoviesAdd = props.MoviesAdd.map((title,id)=>{
        console.log(title)
        return <li Key={id}>{title}<i onClick={()=>props.handleRemoveMovies(title)} class="fas fa-trash-alt"></i></li>
        })
        let wishlist =props.wishlist===true?
        <div className="wishlist" style={{
            opacity: props.wishlist?'1': '0'
       }}>{MoviesAdd}<span className="close_button" onClick={props.handleWishList}  ><i class="far fa-window-close"></i></span></div>:null
    return <div className="Wish_containr_wrapper">
        <div>
     

<div onClick={props.handleWishList} className="WishButton"  >  <h6> My Library</h6><i class="fas fa-briefcase"></i></div>
</div>
{wishlist}

    </div>
}
export default WishList