import React from "react"
import styles from "../contractors-card.module.scss"
import { getLogo } from "../../../utils/getLogo"
import { IWellData } from "../../../services/slices/wellsSlice"

type TWellItem = {
  name: string
  well: IWellData
}

const WellItem: React.FC<TWellItem> = ({ name, well }) => {
  return (
    <li className={styles.contractors__well}>
      {getLogo(name)}
      <div className={styles.contractors__field}>
        <p className={styles.contractors__paragraph}>
          {well.field_name}
        </p>
        <p className={styles.contractors__paragraph}>
          Куст {well.pad_name}, Скважина {well.well_name}
        </p>
      </div>
    </li>
  )
}

export default WellItem
