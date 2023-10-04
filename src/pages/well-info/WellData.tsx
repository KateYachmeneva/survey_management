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
import { getRawAxes, getAxes} from "../../services/slices/axesSlice";
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
interface InputValues {
  device_title: string;
  CX: string;
  CY: string;
  CZ: string;
  BX: string;
  BY: string;
  BZ: string;
  // Добавьте другие свойства по мере необходимости
}

const WellData = () => {
  const [currentWell, setCurrentWell] = useState<IWellData>()
  const { allWells } = useSelector((store) => store.wells)
  const {allTelesystems} = useSelector ((store) => store.runs)
  const [value, setValue] = useState("");
  const { axes,rawaxes } = useSelector((store) => store.axes)
  const { currentRun } = useSelector((store) => store.runs)
  const location = useLocation();
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const { allRuns } = useSelector((store) => store.runs);
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const wellId = useParams().id?.split(":")[1]
  const { coefficients } = useSelector((store) => store.runs)
  const [coeff, setCoeff] = useState(	{
    "device_title": "_",
       "CX": "+0",
       "CY": "+0",
       "CZ": "+0",
       "BX": "+0",
       "BY": "+0",
       "BZ": "+0"
});
  const [allcoeff, setTelesystem] = useState(allTelesystems);
  const [showIcon, setshowIcon] = useState(true);
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
    const { CX, CY, CZ, BX, BY, BZ } = coeff;

   
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
  }, [coeff,coefficientsLoaded]);
  const [inputValues, setInputValues] = useState<InputValues>({
    device_title: '_',
    CX: '',
    CY: '',
    CZ: '',
    BX: '',
    BY: '',
    BZ: '',
  });
  const [isSubmCoef, setIsSubmCoef] = useState<boolean>(false);
  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

 
  const formCoeff = e.target as HTMLFormElement;
  const formInputs = formCoeff.querySelectorAll('input')

  const newInputValues: InputValues = Array.from(formInputs).reduce(
    (accumulator, input) => {
      const inputName = input.name as keyof InputValues;
      accumulator[inputName] = input.value;

      return accumulator;
    
    },
    {} as InputValues // Начальное значение аккумулятора
  );
  
  setInputValues(newInputValues);
  setIsSubmCoef(true)
  };

  useEffect(() => {
    // Обновляем coeff в useEffect, когда inputValues изменяется
    setCoeff(inputValues);
  }, [inputValues]);

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
    // Обновляем coeff в useEffect, когда inputValues изменяется
   if (isSubmCoef){
    setCoeff(inputValues);
   }
  }, [inputValues,isSubmCoef]);
  
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
    setCoefficientsLoaded(true);
  }

  }, [selectedId]);

  useEffect(() => {

    if (coefficients.status === 'Коэффициенты не найдены') {
      setCoeff ({
        "device_title": "_",
           "CX": "+0",
           "CY": "+0",
           "CZ": "+0",
           "BX": "+0",
           "BY": "+0",
           "BZ": "+0"
   })	
    }
  else {
    setCoeff(coefficients);
    setCoefficientsLoaded(true);
  }

  }, [coefficients,coefficientsLoaded]);

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
      dispatch(getCoefficients(id));
      dispatch(getRawAxes(id));
      dispatch(getAxes(id))
          }
  };
  
  console.log(axes);
  console.log(rawaxes)
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
          <FormCoeff onSubmit={onSubmit} showIcon = {showIcon} buttonText="Добавить">
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
            name="BY"
            value={form.BY}
            onChange={handleChange}
            blue={true}
          />
          <InputSmall
            type="text"
            label="Bz"
            name="BZ"
            value={form.BZ}
            onChange={handleChange}
            blue={true}
          />
        </FormCoeff>
        <WellTable
          axes={axes}
          rawaxes = {rawaxes}
          coefficients={coeff}
          selectRun={currentRun}
        />
           </div>}
        </div>
      </div>
    </>
  );
};

export default WellData;
