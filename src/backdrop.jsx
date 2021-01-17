
const Backdrop=(props)=>(
props.show?
<div  onClick={props.openNcloseHandler}className="backdrop"></div>:null
)

export default Backdrop