import React, { useState } from "react"
import "./styles.scss"

import { ICustomInputProps } from "../../../types/index"

//option сложно стилизовать, надо подумать над этой проблемой
const SelectBox: React.FC<ICustomInputProps<HTMLSelectElement>> = (
  props
) => {

  console.log(props.data);
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
        <option value="DEFAULT" disabled>
          {props.placeholder}
        </option>
        {!!props.data &&
          props.data.map((item) => (
            <option key={item} value={item} style={{ fontSize: "16px" }}>
              {item}
            </option>
          ))}
      </select>
    </div>
  )
}
  export default SelectBox;