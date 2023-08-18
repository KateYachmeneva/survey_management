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
import DropDown from "./DropDown/DropDown";

const WellData = () => {
  const [currentWell, setCurrentWell] = useState<IWellData>()
  const { allWells } = useSelector((store) => store.wells)
  const dispatch = useDispatch()
  const location = useLocation()
  const { allRuns } = useSelector((store) => store.runs)
  const [showDropDown, setShowDropDown] = useState<boolean>(false)
  const [selectRun, setSelectRun] = useState<IRunData>();
  const wellId = useParams().id?.split(":")[1]
  

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
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }                   
  }; 

  const runSelection = (runId:number): void => {
    const selectedRun = allRuns.find((item) => item.id === runId);
    setSelectRun(selectedRun);
     };
   ;
    if(selectRun===undefined){
      setSelectRun(allRuns[0]);   
     }
  
     

  return (
    <>
       <WellNavbar />
      <div className={styles.container}>

      <div className={styles.welldata}>
          <WellInfoCard selectRun = {selectRun}
                        selectWell = {currentWell}
                          />
        </div>
        <div className={styles.chart}>
          <PieChartWithoutHeader
            initialDepth={currentWell?.active_from}
            currentDepth={2500}
            planDepth={3200}
          />
        </div>
        <div className={styles.wellact}>
        <div className={styles.wellact__run}>
        <button
        className={showDropDown ? styles.active : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectRun ? "Выбран рейс: " + selectRun.run_number : `Рейс: ${ allRuns[0].run_number}`} </div>
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
