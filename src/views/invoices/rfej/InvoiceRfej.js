import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CButton, CInputRadio, CTextarea, CInputGroup, CInputGroupPrepend,CInputGroupText
 } from '@coreui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import TableForm from '../TableForm'
import  Axios  from 'axios'

const InvoiceRfej = () =>{

  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [amount,setAmount] = useState("")
  const [quantity,setQuantity] = useState("")
  const [invoiceNumber,setInvoiceNumber] = useState("")
  const [date,setDate] = useState("")
  const [list,setList] = useState([])
  const [total,setTotal] = useState(0)
 
  const submitInvoice = () =>{
    Axios.post('http://localhost:3001/api/insertretj', {invoiceNumber:invoiceNumber,
  date:date, total:total
    }).then(()=>{
      alert('successful insert')
    })
  };


return(
<>
<CCard className="mt-4">
            <CCardHeader>
              <h3>RETJ Customer Invoice Form</h3>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="InvoiceNumber"><p><strong>Invoice Number</strong></p></CLabel>
                <CInput id="invoiceNumber" placeholder="Enter your Invoice Number" onChange={(e)=>{
                  setInvoiceNumber(e.target.value)
                }}/>
              </CFormGroup>
              

              <CFormGroup row >
                <CCol xs="8" md="4">
                    <CLabel htmlFor="date-input"><p><strong>Invoice Date</strong></p></CLabel>
                    <CInput className="mb-40"type="date" id="dateInput" name="date-input" placeholder="date" onChange={(e)=>{
                  setDate(e.target.value)
                }}/>
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
                    list = {list}
                    setList = {setList}
                    total = {total}
                    setTotal = {setTotal}
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
              <CButton type="submit" size="sm" color="success" onClick={submitInvoice}> Submit</CButton>
              <CButton type="submit" size="sm" color="primary" className="m-1"> Print Invoice</CButton>
              <CButton type="reset" size="sm" color="danger" > Download Invoice</CButton>
              </CFormGroup>

              
            </CCardBody>
            
          
          </CCard>


</>

)

}

export default InvoiceRfej