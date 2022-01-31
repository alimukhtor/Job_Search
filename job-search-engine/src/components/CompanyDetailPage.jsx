import { Button, Row, Col} from 'react-bootstrap'
import { RiDeleteBin6Line } from "react-icons/ri";
import {useSelector, useDispatch} from 'react-redux'
import {removeCompany} from '../redux/actions'



const CompanyDetailPage =()=> {
  const dispatch = useDispatch()
  const detail = useSelector(state=> state.companyDetails.detail)

  return(
    <>
    {
      detail && detail.map(d => (
        <Row>
        <Col>
            <h1 className="text-white text-center">This is The Company called : "{d.company_name}"</h1>
        </Col>
        <Col>
        <Button className="my-3" variant="danger" onClick={() => {dispatch(removeCompany(d))}}><RiDeleteBin6Line /></Button>
        </Col>
      </Row>
      ))
    }

    </>
  )


}


export default CompanyDetailPage;