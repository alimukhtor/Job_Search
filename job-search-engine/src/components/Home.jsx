import { MdPersonSearch } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { Form, Row, Dropdown } from "react-bootstrap";
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
  const getInputValue = useSelector(state=> state.jobOffers.inputValue)

  useEffect(() => {
    dispatch(getAlljobOffers(inputValue));
  }, [inputValue]);

  return (
    <>
    <Row className="mt-3">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
         Category
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Action</Dropdown.Item>
          <Dropdown.Item>Another action</Dropdown.Item>
          <Dropdown.Item>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Row>
      <h1 className="text-light mt-1 text-center">
        <strong>Strive Job Search Engine</strong> <MdPersonSearch />
      </h1>
      <Form className="mt-5">
        <Form.Group controlId="formBasicEmail">
          {/* <FaSearch className="search-icon"/> */}
          <Form.Control
            className="text-left search-input rounded-pill"
            type="search"
            placeholder="Even Yupiter Can Be Found Here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
        {/* <Button variant="" className="rounded-pill" style={{background: "#287C41" }}>Search</Button> */}
        <Link to="/favorites">
          <div className={location.pathname === "/favorites" ? " active" : ""} style={{ fontSize: "25px" }}>
            Favorites{" "}
            <FcLike
              className="mb-1"
              style={{ background: "#282C34", fontSize: "20px" }}
            />
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
