import React, { useState, ChangeEvent } from "react"
import { IWellData } from "../../services/slices/wellsSlice"
import { Form } from "../../ui-kit/form/Form"
import Input from "../../ui-kit/input"
import { toaster } from "evergreen-ui"
import { useDispatch } from "../../services/hooks"
import { closeModal } from "../../services/slices/modalSlice"
import useForm from "../../hooks/useForm"
import styles from "./modal.module.scss"

interface IForm {
  active_from: number
  latitude: number
  longtitude: number
  NY: number
  EX: number
  geomagnetic_model: string
  geomagnetic_date: string
  north_direction: string
  btotal: number
  gtotal: number
  dip: number
  dec: number
  grid_convergence: number
  critical_azimuth: boolean
  RKB: number
}

const WellTuneModal: React.FC<IWellData> = ({
  latitude,
  longtitude,
  NY,
  EX,
  active_from,
  geomagnetic_model,
  geomagnetic_date,
  north_direction,
  btotal,
  gtotal,
  dip,
  dec,
  grid_convergence,
  critical_azimuth,
  RKB,
}) => {
  const [form, setForm] = useState<IForm>({
    latitude,
    active_from,
    longtitude,
    NY,
    EX,
    geomagnetic_model,
    geomagnetic_date,
    north_direction,
    btotal,
    gtotal,
    dip,
    dec,
    grid_convergence,
    critical_azimuth,
    RKB,
  })

  const dispatch = useDispatch()

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value
    const name = e.target.name
    setForm({
      ...form,
      [name]: value,
    })
  }

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault()
  }

  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Сохранить изменения">
        <div className={styles.contractors__container}>
          <div className={styles.contractors__column}>
            <Input
              type="text"
              label="Амплитуда точки отсчета"
              placeholder="Введите амплитуду точки отсчета"
              name="amplitude"
              value={form.RKB}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Широта"
              placeholder="Введите широту"
              name="latitude"
              value={form.latitude}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Долгота"
              placeholder="Введите долготу"
              name="longtitude"
              value={form.longtitude}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="N/Y"
              placeholder="Введите N/Y"
              name="NY"
              value={form.NY}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="E/X"
              placeholder="Введите E/X"
              name="EX"
              value={form.EX}
              onChange={handleChange}
              blue={true}
            />
          </div>
          <div className={styles.contractors__column}>
            <Input
              type="text"
              label="Btotal"
              placeholder="Введите Btotal"
              name="btotal"
              value={form.btotal}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Gtotal"
              placeholder="Введите Gtotal"
              name="gtotal"
              value={form.gtotal}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Dip"
              placeholder="Введите Dip"
              name="dip"
              value={form.dip}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Магнитное склонение"
              placeholder="Введите магнитное склонение"
              name="magn"
              value={form.dec}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Угол схождения меридианов"
              placeholder="Введите угол схождения меридианов"
              name="meridian"
              value={form.grid_convergence}
              onChange={handleChange}
              blue={true}
            />
          </div>
        </div>
      </Form>
    </div>
  )
}

export default WellTuneModal
