import {connect} from 'react-redux'
import {Alert} from 'react-bootstrap'

// const mapStateToProps =(state)=> ({
//     isError: state.favoriteJobs.isError
// })

// const mapDispatchToProps =()=> ({
//     setErrors: ()=> {
//         dispatch({
//             type: 'SET_ERROR',
//             payload: "404"
//         })
//     } 

// })
const ErrorHandler =({error})=> {
    return(
       { 
        // error
        // :   
        // <Alert variant="danger" className="text-center rounded-pill mt-5" style={{ fontSize: "15px",  marginLeft:"500px" }}>
        //     Error has occured {error}
        //   </Alert>
        }
    )
}
export default ErrorHandler