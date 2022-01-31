import { Button, Row, Col} from 'react-bootstrap'
import { RiDeleteBin6Line } from "react-icons/ri";
import {connect} from 'react-redux'
import {removeCompany} from '../redux/actions'

const mapStateToProps = (state) => ({
  detail: state.companyDetails.detail,
});

const mapDispatchToProps =(dispatch)=> ({
  removeCompanyPage: (id) => {
      dispatch(removeCompany(id))
    },
})
const CompanyDetailPage =({detail, removeCompanyPage})=> {


  return(
    <>
    {
      detail && detail.map(d => (
        <Row>
        <Col>
            <h1 className="text-white text-center">This is The Company called : "{d.company_name}"</h1>
        </Col>
        <Col>
        <Button className="my-3" variant="danger" onClick={() => {removeCompanyPage(d)}}><RiDeleteBin6Line /></Button>
        </Col>
      </Row>
      ))
    }

    </>
  )


}


export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetailPage)