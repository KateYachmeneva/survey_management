import React from "react"
import styles from "./well-info-card.module.scss"
import { IWellData, IPadData } from "../../../services/slices/wellsSlice"
import { useSelector } from "../../../services/hooks"

const WellInfoCard: React.FC<any> = ({
  selectRun,
  selectWell
 }) => {


  return (
    <>
    <ul className={styles.welldata__info}> 
      <h2 className={styles.welldata__title}>Общая информация</h2>
           
      <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Месторождение</p>
          <p className={styles.welldata__data_bold}> {selectWell.field_name}</p>
      </li>
      <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Куст_Скважина</p>
          <p className={styles.welldata__data_bold}>{selectWell.pad_name}_{selectWell.well_name}</p>
      </li>
      <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Рейс</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{selectRun.run_number}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
        <p className={styles.welldata__name}>Начало сопровождения</p>
          <p className={styles.welldata__data_bold}>{selectRun.start_date}</p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Текущий забой</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>current_depth</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Секция</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{selectRun.section}</span>
          </p>
        </li>
                <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Подрядчик</p>
          <p className={styles.welldata__data_bold}>{selectWell.contractorNNB}</p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>ТС</p>
          <p className={styles.welldata__data_bold}>telesystem_type</p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Cерийный №ТС</p>
          <p className={styles.welldata__data_bold}>telesystem_number</p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>SAG</p>
          <p className={styles.welldata__data_bold}>{selectRun.sag}</p>
        </li>
        {/* 
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Плановая глубина</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{plan_depth} м.</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Подрядчик</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{contractor}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>ТС</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{telesystem}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Случайный номер ТС</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {telesystem_number}
            </span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>SAG</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{sag}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Привязка к северу</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>{north}</span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Текущая коррекция</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {current_correction}
            </span>
          </p>
        </li>
        <li className={styles.welldata__item}>
          <p className={styles.welldata__name}>Значение поправки</p>
          <p className={styles.welldata__data}>
            <span className={styles.welldata__data_bold}>
              {correction_value}
            </span>
          </p>
        </li> */}
      </ul>
    </>
  )
}

export default WellInfoCard
