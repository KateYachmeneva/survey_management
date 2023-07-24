import { useState } from "react"
import styles from "./wells-table.module.scss"
import TableRow from "./table-row/TableRow"
import Paginate from "../pagination/Pagination"
import { useSelector } from "../../services/hooks"
import { IPadData } from "../../services/slices/wellsSlice"
import SortHeader from "../sort-header/SortHeader"
import Search from "../search/Search"

export type TWellTable = {
  id: number
  client_name: string
  contractorNNB: string
  pad_name: number
  field_name:string
  well_name: string
  status_drilling: "PLAN" | "NOTA" |"ACTV"| "STOP" |"FINI"
  status:"ACTV" | "NOACT" 
}

const PAGE_SIZE = 7

const WellsTable = () => {
  const {
    allWells,
    filteredWells,
    isFilteredByWell,
    isFilteredByStatus,
    numberFilteredWell,
    statusFilteredWell,
  } = useSelector((store) => store.wells)
  const [currentPage, setCurrentPage] = useState(1)
  const [active, setActive] = useState(1)
  const [wellsPerPage] = useState(PAGE_SIZE)

  const indexOfLastPost = currentPage * wellsPerPage
  const indexOfFirstPost = indexOfLastPost - wellsPerPage
  const currentWells = isFilteredByWell
    ? numberFilteredWell.slice(indexOfFirstPost, indexOfLastPost)
    : isFilteredByStatus
    ? statusFilteredWell.slice(indexOfFirstPost, indexOfLastPost)
    : filteredWells.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    setActive(pageNumber)
  }

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
      setActive(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(allWells.length / wellsPerPage)) {
      setCurrentPage(currentPage + 1)
      setActive(currentPage + 1)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__search}>
        <Search />
        <SortHeader />
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.table__head}>ДО</th>
              <th className={styles.table__head}>Подрядчик</th>
              <th className={styles.table__head}>Месторождение</th>
              <th className={styles.table__head}>Куст</th>
              <th className={styles.table__head}>Скважина</th>
              <th className={styles.table__head}>Активная фаза</th>
              <th className={styles.table__head}>Статус</th>
              <th className={styles.table__head}>Информация</th>
            </tr>
          </thead>
          <tbody>
            {allWells.length > 0 && (
              <>
                {currentWells.map((well: TWellTable) => (
                  <TableRow
                    key={well.id}
                    id={well.id}
                    client_name={well.client_name}
                    contractorNNB={well.contractorNNB}
                    field_name ={well.field_name}
                    pad_name={well.pad_name}
                    well_name={well.well_name}
                    status_drilling={well.status_drilling}
                    status={well.status}
                  />
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>

      <Paginate
        wellsPerPage={wellsPerPage}
        totalWells={allWells.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
        active={active}
      />
    </div>
  )
}

export default WellsTable
