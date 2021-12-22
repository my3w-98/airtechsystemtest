import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CButton, CInputRadio } from '@coreui/react'
import React from 'react'
import CIcon from '@coreui/icons-react'
import TableForm from '../table/TableForm'

const Invoice = () =>{
return(
<>
 <CCard className="mt-4">
            <CCardHeader>
              <h4>Customer Invoice Form</h4>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="InvoiceNumber">Invoice Number</CLabel>
                <CInput id="InvoiceNumber" placeholder="Enter your Invoice Number" />
              </CFormGroup>
              <CFormGroup>
                <CLabel >Customer Name</CLabel>
                <CInput id="CustomerName" placeholder="Yasas Pussewela" />
              </CFormGroup>
              <CFormGroup>
                    <CLabel htmlFor="date-input">Invoice Date</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Payment Type</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Cash</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="custom-radio" inline>
                      <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                      <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Credit</CLabel>
                    </CFormGroup>

                  </CCol>
                </CFormGroup>
              <TableForm/>
              <CFormGroup>
              <CButton type="submit" size="sm" color="primary" className="m-1"> Print Invoice</CButton>
              <CButton type="reset" size="sm" color="danger" > Download Invoice</CButton>
              </CFormGroup>
             
            </CCardBody>
          </CCard>


</>

)

}

export default Invoice