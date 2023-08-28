import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../wells-table.module.scss";
import { TWellTable } from "../WellsTable";
import { useDispatch } from "../../../services/hooks";
import Button from "../../../ui-kit/buttons/Button";

const TableRow: React.FC<TWellTable> = ({
  id,
  client_name,
  contractorNNB,
  pad_name,
  field_name,
  well_name,
  status_drilling,
  status,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //   const handleDelete = (id: string) => {
  //     dispatch(deleteUser(id))
  //   }

  return (
    <tr>
      <td className={styles.table__row}>{client_name}</td>
      <td className={styles.table__row}>{contractorNNB}</td>
      <td className={styles.table__row}>{field_name}</td>
      <td className={styles.table__row}>{pad_name}</td>
      <td className={styles.table__row}>{well_name}</td>
      <td className={styles.table__row}>{status_drilling}</td>
      <td className={styles.table__row}>{status}</td>
      <td>
        <Button
          htmlType="button"
          size="small"
          extClassName={styles.shiftForm__button}
          onClick={() => navigate(`../wells/:${id}/info`)}
        >
          Выбрать
        </Button>
      </td>
    </tr>
  );
};

export default TableRow;
