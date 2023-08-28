import React, { useState, ChangeEvent } from "react";
import { IWellData } from "../../services/slices/wellsSlice";
import { Form } from "../../ui-kit/form/Form";
import Input from "../../ui-kit/input";
import { toaster, Tooltip, InfoSignIcon, Paragraph } from "evergreen-ui";
import { useDispatch } from "../../services/hooks";
import { closeModal } from "../../services/slices/modalSlice";
import useForm from "../../hooks/useForm";
import SelectBoxStatus from "../../ui-kit/select/SelectBoxStatus/SelectBoxStatus";
import styles from "./welltunemodal.module.scss";

interface IForm {
  client_name: string;
  field_name: string;
  well_name: string;
  active_from: number;
  status: string;
  status_drilling: string;
  in_statistics: boolean;
  coordinate_system: string;
  well_type: string;
  latitude: number;
  longtitude: number;
  VSaz: number;
  NY: number;
  EX: number;
  geomagnetic_model: string;
  geomagnetic_date: string;
  north_direction: string;
  btotal: number;
  gtotal: number;
  dip: number;
  dec: number;
  grid_convergence: number;
  total_correction: number;
  critical_azimuth: boolean;
  RKB: number;
  T1_start: string;
  T1_end: string;
  T3_start: string;
  T3_end: string;
  comment: string;
  mail_To: string;
  mail_Cc: string;
}

const WellTuneModal: React.FC<IWellData> = ({
  client_name,
  field_name,
  well_name,
  status,
  status_drilling,
  in_statistics,
  well_type,
  coordinate_system,
  latitude,
  longtitude,
  NY,
  EX,
  VSaz,
  active_from,
  geomagnetic_model,
  geomagnetic_date,
  north_direction,
  btotal,
  gtotal,
  dip,
  dec,
  grid_convergence,
  total_correction,
  critical_azimuth,
  RKB,
  T1_start,
  T1_end,
  T3_start,
  T3_end,
  comment,
  mail_To,
  mail_Cc,
}) => {
  const [form, setForm] = useState<IForm>({
    field_name,
    well_name,
    status,
    coordinate_system,
    status_drilling,
    in_statistics,
    well_type,
    VSaz,
    latitude,
    client_name,
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
    total_correction,
    critical_azimuth,
    RKB,
    T1_start,
    T1_end,
    T3_start,
    T3_end,
    comment,
    mail_To,
    mail_Cc,
  });
  const [value, setValue] = useState("");
  const [stat, setStat] = useState("");
  const [critical_stat, setCriticalStat] = useState("");
  const [critical_azim, setCriticalAzim] = useState<number>(0);
  const arrayStatus = [
    { key: "PLAN", value: "Планируется" },
    { key: "NOTA", value: "В бурении" },
    { key: "FINI", value: "Добурена" },
  ];
  const arrayStatusDrilling = [
    { key: "ACTV", value: "Активная фаза" },
    { key: "NOACTV", value: "Неактивная фаза" },
  ];
  const arrayStatusStatistics = [
    { key: "true", value: "Да" },
    { key: "false", value: "Нет" },
  ];
  const arrayWellType = [
    { key: "VNS0", value: "ВНС" },
    { key: "NNS0", value: "ННС" },
    { key: "ZBS0", value: "ЗБС" },
    { key: "BGS0", value: "БГС" },
  ];
  const arrayNorth = [
    { key: "GRID", value: "Картографический" },
    { key: "TRUE", value: "Географический" },
    { key: "MAGN", value: "Магнитный" },
  ];

  React.useEffect(() => {
    let AzimMag = VSaz - total_correction;
    setCriticalAzim(AzimMag);

    if (form.in_statistics === true) {
      setStat("true");
    }
    if (form.in_statistics === false) {
      setStat("false");
    }
    if (form.critical_azimuth === true) {
      setCriticalStat("true");
    }
    if (form.critical_azimuth === false) {
      setCriticalStat("false");
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(form);
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Здесь вы можете добавить логику для отправки данных формы на сервер или их обработки
    // Например, можно использовать функцию dispatch для отправки данных через Redux

    // Пример использования dispatch из Redux (предположим, что у вас есть slice для работы с данными скважин)
    // import { useDispatch } from 'react-redux';
    // import { updateWellData } from '../../services/slices/wellsSlice';

    // const dispatch = useDispatch();
    // dispatch(updateWellData(form)); // Передаем объект form в экшен updateWellData

    // После отправки данных, вы можете выполнить какие-либо дополнительные действия, например, закрыть модальное окно
    // dispatch(closeModal()); // Предположим, что у вас есть экшен для закрытия модального окна

    // Если вам нужно что-то еще сделать после отправки формы, добавьте соответствующий код здесь
  };

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  const onChangeBoolean = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    console.log(e.target.name);
    setStat(e.target.value);
    if (e.target.value === "true") {
      setForm({
        ...form,
        [name]: true,
      });
    }
    if (e.target.value === "false") {
      setForm({
        ...form,
        [name]: false,
      });
    }
  };
  return (
    <div className={styles.contractors__input}>
      <Form onSubmit={onSubmit} buttonText="Сохранить изменения">
        <div className={styles.contractors__container}>
          <div className={styles.contractors__column}>
            <Input
              type="text"
              label="ДО"
              placeholder="Введите дочернее общество"
              name="client_name"
              value={form.client_name}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Месторождение"
              placeholder="Введите месторождение"
              name="field_name"
              value={form.field_name}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Скважина"
              placeholder="Введите номер скважины"
              name="well_name"
              value={form.well_name}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Глубина начала активной фазы, м"
              placeholder="Введите глубину "
              name="active_from"
              value={form.active_from}
              onChange={handleChange}
              blue={true}
            />
            <SelectBoxStatus
              name="status"
              value={form.status}
              onChange={onChange}
              label="Статус состояния скважины:"
              placeholder="-----"
              generalArr={arrayStatus}
            />
            <SelectBoxStatus
              name="status_drilling"
              value={form.status_drilling}
              onChange={onChange}
              label="Статус активной фазы:"
              placeholder="-----"
              generalArr={arrayStatusDrilling}
            />
            <SelectBoxStatus
              name="in_statistics"
              value={stat}
              onChange={onChangeBoolean}
              label="Учитывать в статистике:"
              placeholder="-----"
              staticArr={arrayStatusStatistics}
            />
            <SelectBoxStatus
              name="well_type"
              value={form.well_type}
              onChange={onChange}
              label="Тип скважины"
              placeholder="-----"
              generalArr={arrayWellType}
            />
            <Tooltip content="Альтитуда берется из маркшейдерской справки">
              <InfoSignIcon />
            </Tooltip>
            <Input
              type="text"
              label="Альтитуда стола ротора, м"
              placeholder="Введите альтитуду точки отсчета"
              name="amplitude"
              value={form.RKB}
              onChange={handleChange}
              blue={true}
            />
            <Tooltip content="Азимут с учетом полной поправки">
              <InfoSignIcon />
            </Tooltip>
            <Input
              type="text"
              label="Азимут вертикальной секции"
              placeholder="Введите азимут"
              name="VSaz"
              value={form.VSaz}
              onChange={handleChange}
              blue={true}
            />
          </div>
          <div className={styles.contractors__column}>
            <Input
              type="text"
              label="Система координат"
              placeholder="Введите систему координат"
              name="coordinate_system"
              value={form.coordinate_system}
              onChange={handleChange}
              blue={true}
            />
            <Tooltip content="Данные в формате 61° 07' 10 N">
              <InfoSignIcon />
            </Tooltip>
            <Input
              type="text"
              label="Широта"
              placeholder="Введите широту"
              name="latitude"
              value={form.latitude}
              onChange={handleChange}
              blue={true}
            />
            <Tooltip content="Данные в формате 76° 34' 15 E">
              <InfoSignIcon />
            </Tooltip>
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
              label="Широта Y (прямоугольные координаты), м"
              placeholder="Введите N/Y"
              name="NY"
              value={form.NY}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Долгота X (прямоугольные координаты), м"
              placeholder="Введите E/X"
              name="EX"
              value={form.EX}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Направление на север"
              placeholder="Введите Btotal"
              name="north_direction"
              value={form.north_direction}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Геомагнитная модель"
              placeholder="Введите Btotal"
              name="geomagnetic_model"
              value={form.geomagnetic_model}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="date"
              label="Дата геомагнитной привязки"
              placeholder="Введите Btotal"
              name="geomagnetic_date"
              value={form.geomagnetic_date}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Dip"
              placeholder="Магнитное наклонение, град"
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
              placeholder="Сближение меридианов"
              name="meridian"
              value={form.grid_convergence}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Btotal"
              placeholder="Напряженность геомагнитного поля, нТл"
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
            {((65 <= critical_azim && critical_azim <= 115) ||
              (245 <= critical_azim && critical_azim >= 295)) && (
              <Tooltip content={`Критический азимут ${critical_azim}`}>
                <InfoSignIcon />
              </Tooltip>
            )}
            <SelectBoxStatus
              name="critical_azimuth"
              value={critical_stat}
              onChange={onChangeBoolean}
              label="Бурение в критический азимут:"
              placeholder="-----"
              staticArr={arrayStatusStatistics}
            />
            <Input
              type="date"
              label="Начало сопровождения до Т1"
              placeholder="Начало сопровождения до Т1"
              name="T1_start"
              value={form.T1_start}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="date"
              label="Окончание сопровождения до Т1"
              placeholder="Окончание сопровождения до Т1"
              name="T1_end"
              value={form.T1_end}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="date"
              label="Начало сопровождения до Т2"
              placeholder="Начало сопровождения до Т3"
              name="T3_start"
              value={form.T3_start}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="date"
              label="Окончание сопровождения до Т3"
              placeholder="Окончание сопровождения до Т3"
              name="T3_end"
              value={form.T3_end}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label="Комментарий"
              placeholder="Комментарий"
              name="comment"
              value={form.comment}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label='Список рассылки почта "Кому"'
              placeholder='Введите адреса через ";"'
              name="mail_To"
              value={form.mail_To}
              onChange={handleChange}
              blue={true}
            />
            <Input
              type="text"
              label='Список рассылки почта "Копия"'
              placeholder='Введите адреса через ";"'
              name="mail_Cc"
              value={form.mail_Cc}
              onChange={handleChange}
              blue={true}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default WellTuneModal;
