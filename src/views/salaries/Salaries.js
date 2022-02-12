import React from 'react'

function Salaries() {
    const [active, setActive] = useState("EmployeeList")
   
    
    return (<>
        <div>
           <CCard>
               <CCardHeader>
                   <h1>Salaries Page</h1>
               </CCardHeader>
               <CCardBody>
                        
                        <div>
                        <CButton color="success" className="mr-2"onClick={()=>setActive("EmployeeList")}>Employee List</CButton>
                        <CButton color="info" className="mr-2"   onClick={()=>setActive("AddEmployee")}>REPJ</CButton>
                        </div>

                    <div>
                        {active === "EmployeeList" && <EmpList/> } 
                        {active === "AddEmployee" &&  <AddEmp/> }
                    </div>
                    
                    

               </CCardBody>

           </CCard>
        </div>
        </>
    )
}
