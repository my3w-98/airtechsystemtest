import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from 'src/reusable'

const BasicForms = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
   
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>
                RFEJ Customer Invoice Form
                <div className="card-header-actions">
                  <CButton color="link" className="card-header-action btn-setting">
                    <CIcon name="cil-settings" />
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-minimize" 
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    <CIcon name={ collapsed ? "cil-arrow-top" : "cil-arrow-bottom"} />
                  </CButton>
                  <CButton 
                    color="link" 
                    className="card-header-action btn-close" 
                    onClick={() => setShowElements(false)}
                  >
                    <CIcon name="cil-x" />
                  </CButton>
                </div>
              </CCardHeader>
              <CCollapse show={collapsed} timeout={1000}>
                <CCardBody>
                  <CForm className="form-horizontal">
                    <CFormGroup>
                      <CLabel htmlFor="prependedInput">Prepended text</CLabel>
                      <div className="controls">
                        <CInputGroup className="input-prepend">
                          <CInputGroupPrepend>
                            <CInputGroupText>@</CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput id="prependedInput" size="16" type="text" />
                        </CInputGroup>
                        <p className="help-block">Here's some help text</p>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInput">Appended text</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInput" size="16" type="text" />
                          <CInputGroupAppend>
                            <CInputGroupText>.00</CInputGroupText>
                          </CInputGroupAppend>
                        </CInputGroup>
                        <span className="help-block">Here's more help text</span>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedPrependedInput">Append and prepend</CLabel>
                      <div className="controls">
                        <CInputGroup className="input-prepend">
                          <CInputGroupPrepend>
                            <CInputGroupText>$</CInputGroupText>
                          </CInputGroupPrepend>
                          <CInput id="appendedPrependedInput" size="16" type="text" />
                          <CInputGroupAppend>
                            <CInputGroupText>.00</CInputGroupText>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButton">Append with button</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButton" size="16" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Go!</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <CFormGroup>
                      <CLabel htmlFor="appendedInputButtons">Two-button append</CLabel>
                      <div className="controls">
                        <CInputGroup>
                          <CInput id="appendedInputButtons" size="16" type="text" />
                          <CInputGroupAppend>
                            <CButton color="secondary">Search</CButton>
                            <CButton color="secondary">Options</CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </div>
                    </CFormGroup>
                    <div className="form-actions">
                      <CButton type="submit" color="primary">Save changes</CButton>
                      <CButton color="secondary">Cancel</CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCollapse>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  )
}

export default BasicForms
