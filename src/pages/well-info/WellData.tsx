import React, { useState, useEffect } from "react"
import { useParams, Outlet, useLocation } from "react-router-dom"
import { IWellData } from "../../services/slices/wellsSlice"
import { IRunData } from "../../services/slices/runSlice"
import { useSelector, useDispatch } from "../../services/hooks"
import PieChartWithoutHeader from "../../components/charts/PieChartWithoutHedare"
import WellInfoCard from "../../widgets/well/well-info-card/WellInfoCard"
import WellParametersCard from "../../widgets/well/well-parameters-card/WellParametersCard"
import { WellTable } from "../../widgets/well-table/WellTable"
import styles from "./well-info.module.scss"
import WellNavbar from "./navbar/WellNavbar"
import { selectActiveDataWell } from "../../services/slices/wellsSlice"

const WellData = () => {
  const [currentWell, setCurrentWell] = useState<IWellData>()
  const [selectRun, setSelectRun] = useState<IRunData>();
  const { allWells } = useSelector((store) => store.wells)
  const dispatch = useDispatch()
  const location = useLocation()

  const wellId = useParams().id?.split(":")[1]
  const selectedRun = JSON.parse(localStorage.getItem('selectedRun') || '{}');

  console.log(selectedRun)
  useEffect(() => {
    
    if (wellId) {
      const well = allWells.find((well) => well.id === +wellId)
      setCurrentWell(well)
      dispatch(selectActiveDataWell(well))
    }
  }, [wellId])
 
  if (!currentWell) {
    return <h1>Нажмите на другую ссылку или дождитесь загрузки данных</h1>
  }
  return (
    <>
      <WellNavbar />
      <div className={styles.container}>
        <div className={styles.welldata}>
          <WellInfoCard {...currentWell} />
        </div>
        <div className={styles.chart}>
          <PieChartWithoutHeader
            initialDepth={currentWell?.active_from}
            currentDepth={2500}
            planDepth={3200}
          />
        </div>
        <div className={styles.wellact}>
          <Outlet />
        </div>
        <div className={styles.parameters}>
          {(location.pathname.includes("/info") ||
            location.pathname.includes("/run")) && (
            <WellParametersCard {...currentWell} />
          )}
          {location.pathname.includes("/survey") && <WellTable />}
        </div>
      </div>
    </>
  )
}

export default WellData
