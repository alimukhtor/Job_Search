// import { AiTwotoneLike } from "react-icons/ai";
import { useEffect, useState } from 'react';
import {Col, Card, Button, Spinner, Alert} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { BsHeart } from "react-icons/bs";
import {useSelector, useDispatch} from 'react-redux'
import { addToFavoritesWithThunk, sendToCompDetail, TOGGLE_LOADING_SPINNER, removeFromFavsWithThunk } from '../redux/actions';


const JobList =({ job, inputValue })=> {
  const location = useLocation();
  const dispatch = useDispatch()
  const isError = useSelector(state=> state.favoriteJobs.isError)
  const isLoading = useSelector(state=>  state.jobOffers.isLoading)
  const favorites = useSelector(state => state.favoriteJobs.favorites)
  console.log("MyFavs", favorites);

  useEffect( () => {
    dispatch({ type: TOGGLE_LOADING_SPINNER, payload: true })
  
    setTimeout(() => {
        dispatch({ type: TOGGLE_LOADING_SPINNER, payload: false })
    }, 1000)
  }, [])



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
                          onClick={()=> {dispatch(sendToCompDetail(j.company_name))}}
                          >
                          <span className='text-info'>{j.company_name}</span>
                        </div>
                      </Link>
                       
                    </Card.Title>
                    <Card.Text style={{ color: "white" }}>{j.title}</Card.Text>
                    
                    <Button className="border-0 mr-auto" style={{ background: "#282C34" }} 
                    onClick={() => {dispatch(addToFavoritesWithThunk(j))}}
                    disabled={!!favorites.find(favJob => favJob._id === j._id) ? <FcLike /> : null}
                    >
                    <FcLike style={{ fontSize: "25px" }}  />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
           
          }
        </>
          )
}

export default JobList;