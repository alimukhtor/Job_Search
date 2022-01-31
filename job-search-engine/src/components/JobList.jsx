import { AiTwotoneLike } from "react-icons/ai";
import {Col, Card, Button, Spinner, Alert} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import {useSelector, useDispatch} from 'react-redux'
import { addToFavoritesWithThunk } from "../redux/actions";
import {removeFromFavsWithThunk} from '../redux/actions'
import { sendToCompDetail } from '../redux/actions';


const JobList =({ job, inputValue })=> {
  const location = useLocation();
  const dispatch = useDispatch()
  const favorites = useSelector(state=> state.favoriteJobs.favorites)
  const isError = useSelector(state=> state.favoriteJobs.isError)
  const isLoading = useSelector(state=>  state.jobOffers.isLoading)
  const isFav = favorites.includes(job.data?.title)
  return(
      <>
      {
        isError
        ?
        <Alert variant="danger" className="text-center rounded-pill mt-5" style={{ fontSize: "15px",  marginLeft:"500px" }}>
           Error has occured {isError}
        </Alert>
         : isLoading 
        ?
        <Spinner animation="border" variant="success"/>
       :
          job.data &&
          job.data
            .filter((j) => j.title.toLowerCase().includes(inputValue))
            .map((j) => (
              <Col xs={3} key={j._id}>
                <Card className="mt-5">
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      <Link to="/companyName">
                        <div
                          className={(location.pathname === "/companyName" ? " active" : "")}
                          onClick={()=> {dispatch(sendToCompDetail(j))}}
                          >
                          {j.company_name}
                        </div>
                      </Link>
                       
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>{j.title}</Card.Text>
                    
                    <Button className="border-0 mr-auto" style={{ background: "#282C34" }} onClick={() => {dispatch(addToFavoritesWithThunk(j))}}>
                    <AiFillLike style={{ fontSize: "25px" }}  />
                    </Button>
                    {/* {
                      isFav 
                    ?  <AiFillLike style={{ fontSize: "25px" }}  onClick={() => {dispatch(addToFavoritesWithThunk(j))}} />
                    :
                    <AiTwotoneLike style={{ fontSize: "25px" }}  onClick={() => {dispatch(removeFromFavsWithThunk(j))}}/>
                    } */}
                    
                  </Card.Body>
                </Card>
              </Col>
            ))
           
          }
        </>
          )
}

export default JobList;