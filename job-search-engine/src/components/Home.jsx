import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import JobList from "./JobList";
import { getAlljobOffers } from "../redux/actions";


const Home = () => {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()
  const jobs = useSelector(state => state.jobOffers?.jobs)
  const favorites = useSelector(state => state.favoriteJobs.favorites)
  const getInputValue = useSelector(state=> state.jobOffers.inputValue)

  useEffect(() => {
    dispatch(getAlljobOffers(inputValue));
  }, [inputValue]);

  return (
    <>
      <h1 className="text-light mt-5 text-center">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            className="text-left search-input rounded-pill"
            type="search"
            placeholder="Even Yupiter Can Be Found Here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
        <Link to="/favorites">
          <div className={location.pathname === "/favorites" ? " active" : ""} style={{ fontSize: "25px" }}>
            <FcLike
              className="mb-1"
              style={{ background: "#282C34", fontSize: "25px" }}
              />
              <span className="ml-2 text-info">{favorites.length}</span>
          </div>
        </Link>
      </Form>
      <Row>
        <JobList job={jobs} inputValue={getInputValue} />
        
      </Row>
    </>
  );
};
export default Home;
