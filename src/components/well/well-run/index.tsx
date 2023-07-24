import React, { useState } from "react"
import DropDown from "./DropDown";
import { useDispatch } from "../../../services/hooks"
import { Link } from "react-router-dom"
import { Document, Envelop, AddRun, DeleteRun } from "../../../ui-kit/svg/icons"
import { useSelector } from "../../../services/hooks"
import { IRunData } from "../../../services/slices/runSlice"
import styles from "./well-run.module.scss"

export const WellRun = () => {
  const dispatch = useDispatch()
  const { activeDataWell } = useSelector((store) => store.wells)
  const { allRuns } = useSelector((store) => store.runs)
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [selectRun, setSelectRun] = useState<IRunData>();


  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const runSelection = (runId:number): void => {
    const selectedRun = allRuns.find((item) => item.id === runId)
    if (selectedRun) {
      setSelectRun(selectedRun)       
     localStorage.setItem('selectedRun', JSON.stringify(selectedRun));
    //  console.log(selectedRun);
    }
  };
// console.log(selectRun);
  return (
    <>
      <div className={styles.wellact__box}>
        <div className={styles.wellact__info}>
          <p className={styles.wellact__field}>
            {activeDataWell?.client_name} -{" "}
            {activeDataWell?.field_name} месторождение
          </p>
          <p className={styles.wellact__number}>
            Куст {activeDataWell?.pad_name}, Скважина{" "}
            {activeDataWell?.well_name}, Транспортная секция
          </p>
          <p className={styles.wellact__status}>{activeDataWell?.status_drilling }</p>
        </div>
        <div className={styles.wellact__insert}>
          <p className={styles.wellact__title}>Дата внесения данных</p>
          <p className={styles.wellact__date}>29.03.2023</p>
        </div>
      </div>
      <div className={styles.wellact__run}>
        <button
        className={showDropDown ? styles.active : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectRun ? "Выбран рейс: " + selectRun.run_number : "Рейс: "} </div>
        {showDropDown && (
          <DropDown
            runs={allRuns}
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            runSelection={runSelection}
                      />
        )}
      </button>
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
                e.preventDefault()
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>Сформировать письмо</p>
          </div>
        </div>
      </div>
    </>
  )
}
