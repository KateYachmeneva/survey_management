import React from "react"
import { Form } from "../../ui-kit/form/Form"
import Input from "../../ui-kit/input"
import { toaster } from "evergreen-ui"
import { useDispatch } from "../../services/hooks"
import { closeModal } from "../../services/slices/modalSlice"
import useForm from "../../hooks/useForm"
import styles from "./modal.module.scss"
import { useState, ChangeEvent } from 'react'
import  SelectBoxStatus  from "../../ui-kit/select/SelectBoxStatus/SelectBoxStatus"
import { useSelector } from "./../../services/hooks"

const WellAddModal: React.FC = () => {
  const { allCustomers } = useSelector((store) => store.customers)
  console.log(allCustomers);
  const { allRigs } = useSelector((store) => store.rigs)
  const { allFields } = useSelector((store) => store.fields)
  const [value, setValue] = useState("");
  const [key, setKey] = useState();
  const [padsArr, setPads] = useState(allRigs);

  const dispatch = useDispatch()
  const { values, handleChange, setValues } = useForm({
    well_name: "",
    pad_name: "",
    })
  let data = []
  for (let i = 0; i < allCustomers.length;i++ ){
       let item = allCustomers[i].full_name ;
       data.push(item)
  }

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
    if (values.well_name && values.pad_name) {
      //@ts-ignore
      dispatch(addNewWell({ ...values }))
      dispatch(closeModal())
      toaster.notify("Новая скважина создана!")
    } else toaster.notify("Все поля должны быть заполнены!")
  }

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
   };
  const onChangeField = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    let arrFiltered = allRigs.filter(({field}:any) => field == event.target.value)
      setPads(arrFiltered)
  };
   const arrayStatus =[
  { key: "PLAN", value: "Планируется" },
  { key: "NOTA", value: "В бурении" },
  { key: "FINI", value: "Добурена" },
  ];
  const arrayInStatistics =[
  { key: "true", value: "Да" },
  { key: "false", value: "Нет" },
  ];
  const arrayWellType=[
  { key: "VNS0", value: "ВНС" },
  { key: "NNS0", value: "ННС" },
  { key: "ZBS0", value: "ЗБС" },
  { key: "BGS0", value: "БГС" }, 
  ];

  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Добавить">
        <SelectBoxStatus
        name = "client_name"
        customersArr={allCustomers}
        value={value}
        onChange={onChange}
        label="Дочернее общество:"
        extraLabel = "Выберите дочернее общество"
        placeholder = "-----"
           />
        <SelectBoxStatus
        name = "field_name"
        value={value}
        onChange={onChangeField}
        label="Месторождение:"
        extraLabel = "Выберите местроождение"
        key ={key}
        placeholder = "-----"
        statusArr = {allFields}         
           />
        <SelectBoxStatus
        name = "pad_name"
        padsArr = {padsArr}  
        value={value}
        onChange={onChange}
        label="Куст:"
        extraLabel = "Выберите номер куста"
        placeholder = "-----"
           />
        <Input
        type="text"
        label="Номер скважины"
        placeholder="Обязательное поле"
        name="well_name"
        value={values.well_name}
        onChange={handleChange}
        blue={true}
        />
        <SelectBoxStatus
        name = "status"
        value={value}
        onChange={onChange}
        label="Статус состояния скважины:"
        extraLabel = "Выберите статус"
        placeholder = "-----"
        generalArr = {arrayStatus}
           />
        <SelectBoxStatus
        name = "in_statistics"
        value={value}
        onChange={onChange}
        label="Учитывать в статистике"
        extraLabel = "Выберите статус"
        placeholder = "-----"
        generalArr = {arrayInStatistics}
           />
        <SelectBoxStatus
        name = "well_type"
        value={value}
        onChange={onChange}
        label="Тип скважины"
        extraLabel = "Выберите тип скважины"
        placeholder = "-----"
        generalArr = {arrayWellType}
           />
      </Form>
    </div>
  )
}

export default WellAddModal
