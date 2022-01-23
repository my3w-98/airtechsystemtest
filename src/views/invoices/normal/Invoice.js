import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CButton, CInputRadio, CTextarea } from '@coreui/react'
import React from 'react'


const Invoice = () =>{
return(
<>
 <CCard className="mt-4">
            <CCardHeader>
              <h3>Customer Invoice Form</h3>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="InvoiceNumber"><p><strong>Invoice Number</strong></p></CLabel>
                <CInput id="InvoiceNumber" placeholder="Enter your Invoice Number" />
              </CFormGroup>
              <CFormGroup>
                <CLabel ><p><strong>Customer Name</strong></p></CLabel>
                <CInput id="CustomerName" placeholder="Enter Customer Name" />
              </CFormGroup>

              <CFormGroup row>
                <CCol xs="8" md="4">
                    <CLabel htmlFor="date-input"><p><strong>Invoice Date</strong></p></CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                </CCol>
                </CFormGroup>
              
                    
                    <CFormGroup className=" mt-5" row>
                   
                    
                      
                    <CCol xs="5" md="4">
                    <CLabel><p><strong>Price</strong></p></CLabel>
                    <CInput type='text' id='price' name='price' placeholder='Price'required></CInput>
                    </CCol>
                    <CCol xs="5" md="4">
                    <CLabel><p><strong>Quantity</strong></p></CLabel>
                    <CInput type='text' id='quantity' name='quantity' placeholder='Quantity'required></CInput>
                    </CCol>
                    <CCol xs="5" md="4">
                    <CLabel><p><strong>Amount</strong></p></CLabel>
                    <CInput type='text' id='item' name='itemOrService' placeholder='Item or Service'required></CInput>
                    </CCol>
                  
                    </CFormGroup>
                    
                   
                    <CLabel><p><strong>Item/Service</strong></p></CLabel>
                    <CTextarea
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="4"
                      placeholder="Content..." 
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

export default Invoice