import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CButton, CInputRadio, CTextarea } from '@coreui/react'




export default function TableForm({description, setDescription,
  price,setPrice,
  quantity,setQuantity,
  amount,setAmount
}) {
    return (
        <div>

              <CLabel><p><strong>Item/Service</strong></p></CLabel>
                    <CTextarea
                      name="textarea-input" 
                      id="textarea-input" 
                      rows="2"
                      placeholder="Item or Service" 
                      value={description}
                      onChange={(e)=> setDescription(e.target.value)}
                      
                    />   

             <CFormGroup className=" mt-2" row>
                
                   <CCol xs="5" md="4">
                   <CLabel><p><strong>Price</strong></p></CLabel>
                   <CInput 
                   type='number' 
                   id='price' 
                   name='price' 
                   placeholder='Price'required
                   value={price}
                   onChange={(e)=> setPrice(e.target.value)}
                   ></CInput>
                   </CCol>
                   <CCol xs="5" md="4">
                   <CLabel><p><strong>Quantity</strong></p></CLabel>
                   <CInput 
                   type='number' 
                   id='quantity' 
                   name='quantity' 
                   placeholder='Quantity'required
                   value={quantity}
                   onChange={(e)=> setQuantity(e.target.value)}
                   ></CInput>
                   </CCol>
                   <CCol xs="5" md="4">
                   <CLabel><p><strong>Amount</strong></p></CLabel>
                   <CInput 
                   type='number' 
                   id='amount' 
                   name='amount' 
                   placeholder='Amount'required
                   value={amount}
                   onChange={(e)=> setAmount(e.target.value)}
                   ></CInput>
                   </CCol>
                   </CFormGroup>

                  
        </div>
    )
}
