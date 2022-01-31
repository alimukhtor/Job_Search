import { ListGroup, Button, Row, Col } from 'react-bootstrap'
import { RiDeleteBin6Line } from "react-icons/ri";
import {connect} from 'react-redux'
import {removeFromFavsWithThunk} from '../redux/actions'


const mapStateToProps =(state)=> ({
    favorites: state.favoriteJobs.favorites
})

const mapDispatchToProps =(dispatch)=> ({
    removeFromFavorite: (index) => {
        dispatch(removeFromFavsWithThunk(index))
      },
})
const FavoriteJobs =({favorites, removeFromFavorite})=> {


    return(
        <ListGroup className="mt-5">
            {
                favorites && favorites.map((fav, i)=> (
                    <Row>
                        <Col>
                            <ListGroup.Item key={i} className="my-2" style={{ background: "#282C34", color:"white", border:"2px solid white"}}>{fav.title}</ListGroup.Item>
                        </Col>
                        <Col>
                            <Button className="my-3" variant="danger" onClick={() => {removeFromFavorite(i)}}><RiDeleteBin6Line /></Button>
                        </Col>
                    </Row>
                ))
            }
        </ListGroup>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteJobs)