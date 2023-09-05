import React, { useState } from "react";
import { useDispatch } from "../../../services/hooks";
import { Link } from "react-router-dom";
import {
  Document,
  Envelop,
  AddRun,
  DeleteRun,
} from "../../../ui-kit/svg/icons";
import { useSelector } from "../../../services/hooks";
import styles from "./well-run.module.scss";

export const WellRun = () => {
  const dispatch = useDispatch()
  const { activeDataWell } = useSelector((store) => store.wells)
  const {currentWell} = useSelector((store) =>store.wells)
  const {currentRun} = useSelector((store) =>store.runs)
  console.log(currentRun)
  return (
    <>
      <div className={styles.wellact__box}>
        <div className={styles.wellact__info}>
          <p className={styles.wellact__field}>
            {activeDataWell?.client_name} - {activeDataWell?.field_name}{" "}
            месторождение
          </p>
          <p className={styles.wellact__number}>
            Куст {activeDataWell?.pad_name}, Скважина{" "}
            {activeDataWell?.well_name}, {currentRun.section_name}
          </p>
          <p className={styles.wellact__status}>
            {activeDataWell?.status_drilling}
          </p>
        </div>
        <div className={styles.wellact__insert}>
          <p className={styles.wellact__title}>Дата внесения данных</p>
          <p className={styles.wellact__date}>29.03.2023</p>
        </div>
      </div>
      <div className={styles.wellact__acts}>
        <p className={styles.wellact__title}>Действия</p>
        <div className={styles.wellact__report}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <AddRun />
            </Link>
            <p className={styles.wellact__text}>Добавить рейс</p>
          </div>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>
            <p className={styles.wellact__text}>Экспорт отчета</p>
          </div>
        </div>
        <div className={styles.wellact__letter}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <DeleteRun />
            </Link>
            <p className={styles.wellact__text}>Удалить рейс</p>
          </div>
          <div className={styles.wellact__stat}>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>Сформировать письмо</p>
          </div>
        </div>
      </div>
    </>
  );
};
