import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'
import React,{useState} from 'react'

import Invoice from './normal/Invoice'

import InvoiceRfej from './rfej/InvoiceRfej'



function Invoices () {

    const [active, setActive] = useState("Normal")
   
    
    return (<>
        <div>
           <CCard>
               <CCardHeader>
                   <h1>Create Invoice</h1>
               </CCardHeader>
               <CCardBody>
                        
                        <div>
                        <CButton color="success" className="mr-2"onClick={()=>setActive("Normal")}>Normal</CButton>
                        <CButton color="info" className="mr-2"   onClick={()=>setActive("Rfej")}>REPJ</CButton>
                        </div>

                    <div>
                        {active === "Normal" && <Invoice/> } 
                        {active === "Rfej" &&  <InvoiceRfej/> }

                    </div>
                    
                    

               </CCardBody>

           </CCard>
        </div>
        </>
    )
}
 
export default Invoices