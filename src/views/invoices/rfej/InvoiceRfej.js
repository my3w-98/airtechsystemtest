import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CInputGroupPrepend,
  CInputGroupText, CInputGroupAppend, CInputGroup, CButton} from '@coreui/react'
import React from 'react'
import CIcon from '@coreui/icons-react'

const InvoiceRfej = () =>{
return(
<>
 <CCard className="mt-4">
            <CCardHeader>
            <h4>RFEJ Customer Invoice Form</h4>
            </CCardHeader>
            <CCardBody>
           
              <CLabel>Invoice Number</CLabel>
              
            <CInputGroup className="mb-3 mt-1">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          RFEJ_
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type='number' id="input3-group1" name="input3-group1" placeholder=".." />
            </CInputGroup>
      

         
              <CFormGroup>
                <CLabel >Customer Name</CLabel>
                <CInput id="CustomerName" placeholder="Yasas Pussewela" />
              </CFormGroup>
              <CFormGroup>
              <CButton type="submit" size="sm" color="primary" className="m-1"><CIcon name="cil-scrubber" /> Submit</CButton> 
              <CButton type="reset" size="sm" color="danger" ><CIcon name="cil-ban" /> Reset</CButton>
            </CFormGroup>
            </CCardBody>
            
          
          </CCard>


</>

)

}

export default InvoiceRfej