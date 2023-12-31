import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect} from "react";
import styles from "./well-info.module.scss";
import { Document, Envelop } from "../../../ui-kit/svg/icons";
import { useSelector, useDispatch } from "../../../services/hooks";
import { openModal, closeModal } from "../../../services/slices/modalSlice";
import Button from "../../../ui-kit/buttons/Button";
import Modal from "../../../ui-kit/modal/Modal";
import WellTuneModal from "../../modals/WellTuneModal";
import { store } from "../../../services/store";

export const WellInfo = () => {
  const { activeDataWell } = useSelector((store) => store.wells);
  const { isOpen } = useSelector((store) => store.modal);
  const {currentRun} = useSelector((store) => store.runs)
  const [sectionName, setSectionName] = useState(currentRun.section_name);
   const dispatch = useDispatch();
  const navigate = useNavigate();




  useEffect (() => {
    setSectionName(currentRun.section_name)
  },[currentRun])
  const handleOpenModal = () => {
    dispatch(openModal());
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {isOpen && activeDataWell && (
        <Modal
          closeModal={handleCloseModal}
          title="Изменить настройки скважины"
        >
          <WellTuneModal {...activeDataWell} />
        </Modal>
      )}
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
          <p className={styles.wellact__title}>Дата геомагнитных данных</p>
          <p className={styles.wellact__date}>
            {activeDataWell?.geomagnetic_date}
          </p>
        </div>
      </div>

      <div className={styles.wellact__acts}>
        <p className={styles.wellact__title}>Действия</p>
        <div className={styles.wellact__report}>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>

            <p className={styles.wellact__text}>
              Настроить шаблон отчета{" "}
              <span className={styles.wellact__text_blue}>
                (статические замеры)
              </span>
            </p>
          </div>
          <div className={styles.wellact__stat}>
            <Link to="#">
              <Document />
            </Link>
            <p className={styles.wellact__text}>
              Настроить шаблон отчета{" "}
              <span className={styles.wellact__text_blue}>
                (динамические замеры)
              </span>
            </p>
          </div>
        </div>
        <div className={styles.wellact__letter}>
          <div className={styles.wellact__stat}>
            <Link
              to="#"
              onClick={(e) => {
                window.location.href = "mailto:no-reply@example.com";
                e.preventDefault();
              }}
            >
              <Envelop />
            </Link>
            <p className={styles.wellact__text}>
              Настроить шаблон письма{" "}
              <span className={styles.wellact__text_blue}>
                (статические замеры)
              </span>
            </p>
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
            <p className={styles.wellact__text}>
              Настроить шаблон письма{" "}
              <span className={styles.wellact__text_blue}>
                (динамические замеры)
              </span>
            </p>
          </div>
        </div>
      </div>
      <Button
        className={styles.parameters__button_wellbore}
        htmlType="button"
        size="small"
        onClick={handleOpenModal}
      >
        Настройки
      </Button>
    </>
  );
};
