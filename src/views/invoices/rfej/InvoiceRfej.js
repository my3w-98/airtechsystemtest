import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CInputGroupPrepend,
  CInputGroupText, CInputGroupAppend, CInputGroup, CButton, CTextarea, CInputRadio} from '@coreui/react'
import React from 'react'
import CIcon from '@coreui/icons-react'
import TableForm from '../TableForm'
import { useState } from 'react'

const InvoiceRfej = () =>{

  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [quantity,setQuantity] = useState("")



return(
<>
 <CCard className="mt-4">
            <CCardHeader>
            <h3>RFEJ Customer Invoice Form</h3>
            </CCardHeader>
            <CCardBody>
           
              <CLabel><p><strong>Invoice Number</strong></p></CLabel>
              
            <CInputGroup className="mb-3 mt-1">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          RFEJ_
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type='number' id="input3-group1" name="input3-group1" placeholder="Enter your Invoice Number" />
            </CInputGroup>
      

         
              {/* <CFormGroup>
                <CLabel ><p><strong>Customer Name</strong></p></CLabel>
                <CInput id="CustomerName" placeholder="Yasas Pussewela" />
              </CFormGroup> */}

              <CFormGroup row>
                <CCol xs="8" md="4">
                    <CLabel htmlFor="date-input"><p><strong>Invoice Date</strong></p></CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
                </CFormGroup>
              
                <TableForm 
                    description = {description}
                    setDescription= {setDescription}
                    price = {price}
                    setPrice= {setPrice}
                    quantity = {quantity}
                    setQuantity= {setQuantity}
                    amount = {amount}
                    setAmount= {setAmount}
                    />
                                    
                     <CFormGroup row className="mt-5">
                  <CCol md="9">
                    <CLabel><p><strong>Payment Type</strong></p></CLabel>
                  </CCol>
                  <CCol md="3">
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
                  
                  
                
                          <CFormGroup className="mt-4">
              <CButton type="submit" size="sm" color="success"> Submit</CButton>
              <CButton type="submit" size="sm" color="primary" className="m-1"> Print Invoice</CButton>
              <CButton type="reset" size="sm" color="danger" > Download Invoice</CButton>
              </CFormGroup>

              
            </CCardBody>
            
          
          </CCard>


</>

)

}

export default InvoiceRfej