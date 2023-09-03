import React, { useState, ChangeEvent, useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { IWellData } from "../../services/slices/wellsSlice";
import { useSelector, useDispatch } from "../../services/hooks";
import PieChartWithoutHeader from "../../components/charts/PieChartWithoutHedare";
import WellInfoCard from "../../widgets/well/well-info-card/WellInfoCard";
import WellParametersCard from "../../widgets/well/well-parameters-card/WellParametersCard";
import { WellTable } from "../../widgets/well-table/WellTable";
import styles from "./well-info.module.scss";
import WellNavbar from "./navbar/WellNavbar";
import { selectActiveDataWell } from "../../services/slices/wellsSlice";
import { selectActiveRun, getRun} from "../../services/slices/runSlice";
import DropDown from "./DropDown/DropDown";
import { getCoefficients } from "../../services/slices/runSlice";
import InputSmall from "../../ui-kit/input/InputSmall";
import { FormCoeff } from "../../ui-kit/form/FormCoeff";
import SelectBoxStatusSmall from "../../ui-kit/select/SelectBoxStatusSmall/SelectBoxStatusSmall";

interface IForm {
  device_title: string;
  CX: string;
  CY: string;
  CZ: string;
  BX: string;
  BY: string;
  BZ: string;
}

const WellData = () => {
  const [currentWell, setCurrentWell] = useState<IWellData>()
  const { allWells } = useSelector((store) => store.wells)
  const {allTelesystems} = useSelector ((store) => store.runs)
  const [value, setValue] = useState("");
  const { currentRun } = useSelector((store) => store.runs)
  const dispatch = useDispatch();
  const location = useLocation();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { allRuns } = useSelector((store) => store.runs);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const wellId = useParams().id?.split(":")[1]
  const { coefficients } = useSelector((store) => store.runs)
  const [coeff, setCoeff] = useState(coefficients);
  const [allcoeff, setTelesystem] = useState(allTelesystems);

  const [form, setForm] = useState<IForm>({
    device_title: "",
    CX: "",
    CY: "",
    CZ: "",
    BX: "",
    BY: "",
    BZ: "",
  });
 
  const idAndTitleArray = allcoeff.map(item => ({
    id: item.id,
    device_title: item.device_title,
  }));

  useEffect(() => {
    if (wellId) {
      const well = allWells.find((well) => well.id === +wellId);
      if (well) {
        dispatch(getRun(well.id));
      }
      dispatch(selectActiveDataWell(well));
      dispatch(selectActiveRun(allRuns[0]));
      setCurrentWell(well);
    }
  }, [wellId,currentWell]);

   const [coefficientsLoaded, setCoefficientsLoaded] = useState(false);


  // Обновляем состояние form при получении новых coefficients

  useEffect(() => {
    const { device_title, CX, CY, CZ, BX, BY, BZ } = coeff;

   
    if (coeff.device_title) {
      setForm({
        device_title: "",
        CX,
        CY,
        CZ,
        BX,
        BY,
        BZ,
      });

      setCoefficientsLoaded(true); // Устанавливаем флаг, что коэффициенты загружены
    }
    if (typeof coeff.device_title == "undefined") {
      setForm({
        device_title: "",
        CX: "",
        CY: "",
        CZ: "",
        BX: "",
        BY: "",
        BZ: "",
      });
      setCoefficientsLoaded(true);
    }
  }, [coeff,coefficientsLoaded]);

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Отправлены данные:");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleIdChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
    const newSelectedId = parseInt(event.target.value, 10);
    setSelectedId(newSelectedId);
  };

  
  useEffect(() => {
    // Найти объект в массиве, соответствующий выбранному id
    const selectedObject = allcoeff.find((item) => item.id === selectedId);
   if (selectedObject) {
    setForm({
      device_title: selectedObject.device_title,
      CX: selectedObject.CX,
      CY: selectedObject.CY,
      CZ: selectedObject.CZ,
      BX: selectedObject.BX,
      BY: selectedObject.BY,
      BZ: selectedObject.BZ,
    });
    setCoeff(selectedObject)
  }

  }, [selectedId]);

  useEffect(() => {
    console.log(coefficients); // Новое значение coefficients
    setCoeff(coefficients);
  }, [coefficients]);
  
  if (!currentWell) {
    return <h1>Нажмите на другую ссылку или дождитесь загрузки данных</h1>;
  }
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  const runSelection = (runId: number): void => {
    const selectedRun = allRuns.find((item) => item.id === runId);
    dispatch(selectActiveRun(selectedRun));
    if (selectedRun) {
      const id = selectedRun.id;
      console.log (id)
     dispatch(getCoefficients(id));
     }
  };
  

  return (
    <>
      <WellNavbar />
      <div className={styles.container}>
        <div className={styles.welldata}>
          <WellInfoCard
            selectRun={currentRun}
            selectWell={currentWell}
            telesystem_type={coefficients.device_title}
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
              <div className={styles.runselection}>
                {currentRun
                  ? "Выбран рейс: " + currentRun.run_number
                  : `Рейс: `}{" "}
              </div>
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
          {location.pathname.includes("/survey") 
          && <div>
          <FormCoeff onSubmit={onSubmit} buttonText="Добавить">
          <SelectBoxStatusSmall
            name="device_title"
            value={form.device_title}
            onChange={handleIdChange}
            label="Библиотека коэффициентов:"
             placeholder="-----"
             telesystemArr={idAndTitleArray}
          />
          <InputSmall
            type="text"
            label="Gx"
            name="CX"
            value={form.CX}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="Gy"
            name="CY"
            value={form.CY}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="Gz"
            name="CZ"
            value={form.CZ}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="Bx"
            name="BX"
            value={form.BX}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="By"
            name="device_title"
            value={form.BY}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="Bz"
            name="device_title"
            value={form.BZ}
            onChange={handleChange}
            blue={true}
          />
        </FormCoeff>
        <WellTable
          // selectRun={currentRun}
          // selectWell={currentWell}
           coefficients={coeff}
        />
           </div>}
        </div>
      </div>
    </>
  );
};

export default WellData;
