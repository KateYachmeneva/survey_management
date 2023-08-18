import React, { useState } from "react"
import "./styles.scss"

import { ICustomInputProps } from "../../../types/index"

//option сложно стилизовать, надо подумать над этой проблемой
const SelectBoxStatus: React.FC<ICustomInputProps<HTMLSelectElement>> = (
  props
) => {

  return (

    <div className="select-group" style={props.style}>
      <div className="label-group">
        {!!props.label && (
          <label htmlFor={props.label} className="select-label">
            {props.label}
          </label>
        )}
        {!!props.extraLabel && (
          <span
            onClick={() => {
              props.setShowLogin?.(false)
              props.setShowResetPass?.(true)
            }}
            className="select-extra-label"
          >
            {props.extraLabel}
          </span>
        )}
      </div>
      <select
        name = {props.name}
        className={!!props.blue ? "select-blue" : "select-yellow"}
        id={props.label}
        required
        defaultValue={'DEFAULT'}
        onChange={props.onChange}
      
      >
          <option value="DEFAULT"  disabled>
          {(props.name === "status_drilling" && props.value ==="ACTV") && "Активная фаза"}
          {(props.name === "status_drilling" && props.value ==="NOACTV") && "Неактивная фаза"}
          {(props.name === "status" && props.value ==="NOTA") && "В бурении"}
          {(props.name === "status" && props.value ==="PLAN") && "Планируется"}
          {(props.name === "status" && props.value ==="FINI") && "Добурена"}
          {(props.name === "in_statistics" && props.value ==="true") && "Да"}
          {(props.name === "in_statistics" && props.value ==="false") && "Нет"}
          {(props.name === "critical_azimuth" && props.value ==="true") && "Да"}
          {(props.name === "critical_azimuth" && props.value ==="false") && "Нет"}
          {(props.name === "well_type" && props.value ==="VNS0") && "ВНС"}
          {(props.name === "well_type" && props.value ==="NNS0") && "ННС"}
          {(props.name === "well_type" && props.value === "ZBS0") && "ЗБС"}
          {(props.name === "well_type" && props.value ==="BGS0)") && "БГС"}
          {/* {props.placeholder} */}
        </option>
            
     {!!props.statusArr &&
     
          props.statusArr.map(( {id, field_name} :any ) => (
                    <option key={id} value={id} style={{ fontSize: "16px" }}>
            {field_name}
            </option>
          ))}
    {!!props.generalArr &&
    
          props.generalArr.map(( {key, value} :any ) => (
               <option key={key} value={value} style={{ fontSize: "16px" }}>
       {value}
       </option>
     ))}
     {!!props.staticArr &&
     
     props.staticArr.map(( {key, value} :any ) => (
           <option key={key} value={key} style={{ fontSize: "16px" }}>
      {value}
        </option>
     ))}
     {!!props.customersArr &&
     
     props.customersArr.map(( {id, full_name,client_name} :any ) => (
               <option key={id} value={id} style={{ fontSize: "16px" }}>
       {full_name}
       </option>
     ))}
      {!!props.padsArr &&
     
     props.padsArr.map(( {id, pad_name} :any ) => (
               <option key={id} value={id} style={{ fontSize: "16px" }}>
       {pad_name}
       </option>
     ))}
      </select>
    </div>
  )
}
  export default SelectBoxStatus;  