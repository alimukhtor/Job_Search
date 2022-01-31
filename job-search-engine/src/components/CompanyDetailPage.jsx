import { Button, Row, Col, Container } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeCompany } from "../redux/actions";

const CompanyDetailPage = () => {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.companyDetails.detail);

  return (
    <>
      {detail &&
        detail.map((d) => (
          <Row className="mt-5 text-center">
            <Col xs={12} md={4} lg={6}>
              <div className="text-white text-center">
                {/* <h1>Company:<strong> {d.company_name} </strong></h1> */}
                <h1>Company:<strong>  <a href={d.url}>{d.company_name}</a> </strong></h1>
                <h3>Category: {d.category}</h3>
                <h4>Job type: {d.job_type}</h4>
                <p>Job type: {d.description}</p>
              </div>
              <Button
                className="my-3"
                variant="danger"
                onClick={() => {
                  dispatch(removeCompany(d));
                }}
              >
                Delete <RiDeleteBin6Line />
              </Button>
            </Col>
          </Row>
        ))}
        </>
  );
};

export default CompanyDetailPage;
