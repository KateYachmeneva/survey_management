import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./well-parameters.module.scss";
import { IWellData } from "../../../services/slices/wellsSlice";

const WellParametersCard: React.FC<IWellData> = ({
  client_name,
  pad_name,
  well_name,
  field_name,
  RKB,
  latitude,
  longtitude,
  NY,
  EX,
  T1_start,
  geomagnetic_model,
  geomagnetic_date,
  north_direction,
  btotal,
  gtotal,
  dip,
  dec,
  grid_convergence,
  critical_azimuth,
}) => {
  return (
    <>
      <div className={styles.parameters__table}>
        <ul className={styles.parameters__column}>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Дочернее общесто</p>
            <p className={styles.parameters__data}>{client_name}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Месторождение</p>
            <p className={styles.parameters__data}>{field_name}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Куст</p>
            <p className={styles.parameters__data}>{pad_name}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Скважина</p>
            <p className={styles.parameters__data}>{well_name}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Амплитуда точки отсчета
            </p>
            <p className={styles.parameters__data}>
              {RKB ? RKB : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Система координат</p>
            <p className={styles.parameters__data}>Gauss-Kruger 14N</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Широта</p>
            <p className={styles.parameters__data}>
              {latitude ? latitude : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Долгота</p>
            <p className={styles.parameters__data}>
              {longtitude ? longtitude : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>N/Y, м</p>
            <p className={styles.parameters__data}>{NY ? NY : "Нет данных"}</p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>E/X, м</p>
            <p className={styles.parameters__data}>{EX ? EX : "Нет данных"}</p>
          </li>
        </ul>
        <ul className={styles.parameters__column}>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Начало сопровождения</p>
            <p className={styles.parameters__data}>
              {T1_start ? T1_start : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Геомагнитная модель</p>
            <p className={styles.parameters__data}>
              {geomagnetic_model ? geomagnetic_model : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Дата геомагнитных данных
            </p>
            <p className={styles.parameters__data}>
              {geomagnetic_date ? geomagnetic_date : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Направление на север</p>
            <p className={styles.parameters__data}>
              {north_direction ? north_direction : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Btotal, нТл</p>
            <p className={styles.parameters__data}>
              {btotal ? btotal : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Gtotal, G</p>
            <p className={styles.parameters__data}>
              {gtotal ? gtotal : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Dip, &#176;</p>
            <p className={styles.parameters__data}>
              {dip ? dip : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Магнитное склонение, &#176;
            </p>
            <p className={styles.parameters__data}>
              {dec ? dec : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>
              Угол схождения меридианов, &#176;
            </p>
            <p className={styles.parameters__data}>
              {grid_convergence ? grid_convergence : "Нет данных"}
            </p>
          </li>
          <li className={styles.parameters__row}>
            <p className={styles.parameters__parameter}>Критический азимут</p>
            <p className={styles.parameters__data}>
              {critical_azimuth ? "Да" : "Нет"}
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WellParametersCard;
