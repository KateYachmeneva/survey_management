import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import WellItem from "../contractors/well-item/WellItem";
import styles from "./wells-card.module.scss";
import { useSelector } from "../../services/hooks";
import { IWellData } from "../../services/slices/wellsSlice";
import Button from "../../ui-kit/buttons/Button";

const WellsCard: React.FC<IWellData> = ({
  id,
  client_name,
  field_name,
  pad_name,
  well_name,
  T1_start,
}) => {
  const navigate = useNavigate();
  const { allWells } = useSelector((store) => store.wells);

  const pendingWells = allWells.filter(
    (well) => well.status_drilling === "PLAN",
  );

  const completedWells = allWells.filter(
    (well) => well.status_drilling === "ACTV",
  );

  if (!allWells) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className={styles.wells}>
      <div className={styles.wells__drilling}>
        <div className={styles.wells__header}>
          <h2 className={styles.wells__type}>В бурении</h2>
          <Link to="/wells-table" className={styles.wells__button_all}>
            Смотреть все
          </Link>
        </div>
        <div className={styles.wells__field}>
          <p className={styles.wells__text}>{client_name}</p>
          <p className={styles.wells__text}>{field_name} месторождение</p>
          <p className={styles.wells__text}>
            Куст {pad_name}, Скважина {well_name}
          </p>
        </div>
        <div className={styles.wells__date}>
          <p className={styles.wells__text}>Начало бурения</p>
          <p className={styles.wells__text}>{T1_start}</p>
        </div>
        <div className={styles.wells__depth}>
          <p className={styles.wells__text}>Плановая глубина</p>
          <p className={styles.wells__text}>{3200} м.</p>
        </div>
        <div className={styles.wells__wellbores}>
          <Button
            className={styles.wells__button_wellbore}
            htmlType="button"
            size="small"
            onClick={() => navigate(`../wells/:${id}/info`)}
          >
            Подробная информация
          </Button>
        </div>
        <div className={styles.wells__contractor}>
          <p className={styles.wells__text}>Подрядчик</p>
          <p className={styles.wells__text}>{client_name}</p>
        </div>
      </div>
      <div className={styles.wells__pending}>
        <h2 className={styles.wells__type}>В ожидании</h2>
        <ul className={styles.wells__list}>
          {pendingWells.length > 0
            ? pendingWells.map((well) => (
                <WellItem key={well.id} name={well.client_name} well={well} />
              ))
            : null}
        </ul>
      </div>
      <div className={styles.wells__completed}>
        <h2 className={styles.wells__type}>Добурены</h2>
        <ul className={styles.wells__list}>
          {completedWells.length > 0
            ? completedWells.map((well) => (
                <WellItem key={well.id} name={well.client_name} well={well} />
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

export default WellsCard;
