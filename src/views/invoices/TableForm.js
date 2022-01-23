import { CCard, CCardBody, CForm, CRow, CCardHeader, CFormGroup, CLabel, CInput, CCol, CButton, CInputRadio, CTextarea } from '@coreui/react'
import React, {useEffect, useState}  from 'react'
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import {v4 as uuidv4} from 'uuid'



export default function TableForm({description, setDescription,
  price,setPrice,
  quantity,setQuantity,
  amount,setAmount,
  list,setList,
  total, setTotal

}) {
  const [isEditing, setIsEditing] = useState(false)



//Handle form submit  
  const handleSubmit = (e) => {
    e.preventDefault()

    const newItems = {
      id:uuidv4(),
      description,
      price,
      quantity,
      amount
    }
    setDescription("")
    setPrice("")
    setQuantity("")
    setAmount("")
    setList([...list, newItems])
    setIsEditing(false)
  
  }

//Calculate item amount  
  useEffect(() => {
    const calculateAmount = (amount) =>{
        setAmount(price * quantity)
      }
    calculateAmount(amount)  
  }, [amount, price, quantity, setAmount])  

// Calculate total amount of items
useEffect(() =>{
  let rows = document.querySelectorAll(".amount")
let sum = 0

for(let i = 0; i<rows.length; i++){
  if (rows[i].className === "amount"){
    sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
    setTotal(sum)
  }

}
})

 //Edit function
  const editRow = ((id)=>{
    const editingRow = list.find((row)=> row.id === id)
    setList(list.filter((row)=> row.id !=id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setPrice(editingRow.price)
    setQuantity(editingRow.quantity)
  })

 //Delete function

 const deleteRow = ((id)=>{
   setList(list.filter((row)=> row.id !=id))
 })


    return (
      
      <>
      <CForm onSubmit={handleSubmit}>
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
     <p>{amount}</p>
     </CCol>
     </CFormGroup>

    
    </div>
    <CButton type='submit' size="sm" color="primary" >{isEditing ? "Edit Item" : "Add Item"}</CButton>
      </CForm>  
    <CCol>
      <table width="100%" className=" mt-5">
        <thead>
          <tr style={{color:'black'}} className='bg-gray-100 p-1' >
            <td><strong>Item</strong></td>
            <td><strong>Price</strong></td>
            <td><strong>Quantity</strong></td>
            <td><strong>Amount</strong></td>
          </tr>
        </thead>
        {list.map(({id,description,price,quantity,amount})=> (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td className='amount'> {amount}</td>
                <td><CButton onClick={()=> editRow(id)}><AiOutlineEdit style={{color:'green'}}/></CButton></td>
                <td><CButton onClick={()=> deleteRow(id)}><AiOutlineDelete style={{color:'red'}}/></CButton></td>
              </tr>
            </tbody>

          </React.Fragment>
        ))}
      </table>
      <CFormGroup row className="mt-5">
      <CCol md="9">
      <h3 >Total </h3>
      </CCol>
      <CCol md="3">
        <h3>Rs. {total.toLocaleString()}</h3>  
      </CCol>
      </CFormGroup>
      </CCol>  
     </> 
    )

}
