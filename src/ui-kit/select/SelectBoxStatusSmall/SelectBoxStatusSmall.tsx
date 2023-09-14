import React from "react";
import "./stylessmall.scss";

import { ICustomInputProps } from "../../../types/index";

//option сложно стилизовать, надо подумать над этой проблемой
const SelectBoxStatusSmall: React.FC<ICustomInputProps<HTMLSelectElement>> = (
  props,
) => {
 
  return (
    <div className="select-group-small" style={props.style}>
      <div className="label-group">
        {!!props.label && (
          <label htmlFor={props.label} className="select-label">
            {props.label}
          </label>
        )}
        {!!props.extraLabel && (
          <span
            onClick={() => {
              props.setShowLogin?.(false);
              props.setShowResetPass?.(true);
            }}
            className="select-extra-label"
          >
            {props.extraLabel}
          </span>
        )}
      </div>
      <select
        name={props.name}
        className={!!props.blue ? "select-blu" : "select-yell"}
        id={props.label}
        required
        defaultValue={"DEFAULT"}
        onChange={props.onChange}
      >
        <option value="DEFAULT" disabled>
          {props.name === "status_drilling" &&
            props.value === "ACTV" &&
            "Активная фаза"}
          {props.name === "status_drilling" &&
            props.value === "NOACTV" &&
            "Неактивная фаза"}
          {props.name === "status" && props.value === "NOTA" && "В бурении"}
          {props.name === "status" && props.value === "PLAN" && "Планируется"}
          {props.name === "status" && props.value === "FINI" && "Добурена"}
          {props.name === "in_statistics" && props.value === "true" && "Да"}
          {props.name === "in_statistics" && props.value === "false" && "Нет"}
          {props.name === "critical_azimuth" && props.value === "true" && "Да"}
          {props.name === "critical_azimuth" &&
            props.value === "false" &&
            "Нет"}
          {props.name === "well_type" && props.value === "VNS0" && "ВНС"}
          {props.name === "well_type" && props.value === "NNS0" && "ННС"}
          {props.name === "well_type" && props.value === "ZBS0" && "ЗБС"}
          {props.name === "well_type" && props.value === "BGS0" && "БГС"}
          {props.name === "device_title" && props.value}
          {/* {props.placeholder} */}
        </option>

        {!!props.statusArr &&
          props.statusArr.map(({ id, field_name }: any) => (
            <option key={id} value={id} style={{ fontSize: "16px" }}>
              {field_name}
            </option>
          ))}
        {!!props.generalArr &&
          props.generalArr.map(({ key, value }: any) => (
            <option key={key} value={value} style={{ fontSize: "16px" }}>
              {value}
            </option>
          ))}
        {!!props.staticArr &&
          props.staticArr.map(({ key, value }: any) => (
            <option key={key} value={key} style={{ fontSize: "16px" }}>
              {value}
            </option>
          ))}
        {!!props.customersArr &&
          props.customersArr.map(({ id, full_name, client_name }: any) => (
            <option key={id} value={id} style={{ fontSize: "16px" }}>
              {full_name}
            </option>
          ))}
        {!!props.padsArr &&
          props.padsArr.map(({ id, pad_name }: any) => (
            <option key={id} value={id} style={{ fontSize: "16px" }}>
              {pad_name}
            </option>
          ))}
        {!!props.telesystemArr &&
     Object.keys(props.telesystemArr).map(key => (
      <option key={props.telesystemArr[key].id} value={props.telesystemArr[key].id} style={{ fontSize: "16px" }}>
        {props.telesystemArr[key].device_title}
       </option>
     ))}
      </select>
     </div>
  );
};
export default SelectBoxStatusSmall;
