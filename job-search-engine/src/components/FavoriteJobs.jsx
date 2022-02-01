import { useEffect } from 'react';
import { ListGroup, Button, Row, Col, Spinner } from 'react-bootstrap'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux'
import {removeFromFavsWithThunk, TOGGLE_LOADING_SPINNER} from '../redux/actions'


const FavoriteJobs =()=> {
    const dispatch = useDispatch()
    const favorites = useSelector(state=> state.favoriteJobs.favorites)  
    const isLoading = useSelector(state=> state.favoriteJobs.isLoading)   

    useEffect( () => {
        dispatch({ type: TOGGLE_LOADING_SPINNER, payload: true })
        
        setTimeout(() => {
            dispatch({ type: TOGGLE_LOADING_SPINNER, payload: false })
        }, 500)
    }, [])

    return(
        <ListGroup className="mt-5">
            {
            isLoading
            ?
            <Spinner animation="border" variant="success"/>
             :
                
               favorites && favorites.map((fav, i)=> (
                    <Row key={i}>
                        <Col>
                            <ListGroup.Item className="my-2" style={{ background: "#282C34", color:"white", border:"2px solid white"}}>{fav.title}</ListGroup.Item>
                        </Col>
                        <Col>
                            <Button className="my-3" variant="danger" onClick={() => {dispatch(removeFromFavsWithThunk(i))}}><RiDeleteBin6Line /></Button>
                        </Col>
                    </Row>
                ))
            }
        </ListGroup>
    )
}

export default FavoriteJobs;