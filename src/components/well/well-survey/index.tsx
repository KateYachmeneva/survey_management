import React, { useState, ChangeEvent, useEffect } from "react";
import Button from "../../../ui-kit/buttons/Button";
import styles from "./well-survey.module.scss";
import { useSelector, useDispatch } from "../../../services/hooks";
import { useTable } from "react-table";
import { FormCoeff } from "../../../ui-kit/form/FormCoeff";
import InputSmall from "../../../ui-kit/input/InputSmall";
import { getCoefficients } from "../../../services/slices/runSlice";
import SelectBoxStatusSmall from "../../../ui-kit/select/SelectBoxStatusSmall/SelectBoxStatusSmall";

interface IForm {
  device_title: string;
  CX: string;
  CY: string;
  CZ: string;
  BX: string;
  BY: string;
  BZ: string;
}

export const WellSurvey = () => {
  const dispatch = useDispatch();
  const { currentRun, coefficients } = useSelector((store) => store.runs);
  const [value, setValue] = useState("");
  const [allTelesystems, setTelesystem] = useState([]);
  const [form, setForm] = useState<IForm>({
    device_title: "",
    CX: "",
    CY: "",
    CZ: "",
    BX: "",
    BY: "",
    BZ: "",
  });
  const [coefficientsLoaded, setCoefficientsLoaded] = useState(false);
  useEffect(() => {
    if (currentRun.id && !coefficientsLoaded) {
      dispatch(getCoefficients(currentRun.id));
    }
    // ...
  }, [currentRun.id, coefficientsLoaded, dispatch]);

  // Обновляем состояние form при получении новых coefficients

  useEffect(() => {
    const { device_title, CX, CY, CZ, BX, BY, BZ } = coefficients;

    if (coefficients.device_title) {
      setForm({
        device_title,
        CX,
        CY,
        CZ,
        BX,
        BY,
        BZ,
      });
    }
    if (coefficients.device_title) {
      setForm({
        device_title,
        CX,
        CY,
        CZ,
        BX,
        BY,
        BZ,
      });

      setCoefficientsLoaded(true); // Устанавливаем флаг, что коэффициенты загружены
    }
    if (typeof coefficients.device_title == "undefined") {
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
  }, [coefficients]);

  const onSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    console.log("Отправлены данные:");
  };
  const { activeDataWell } = useSelector((store) => store.wells);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    const name = e.target.name;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className={styles.wellact__box}>
        <div className={styles.wellact__info}>
          <p className={styles.wellact__field}>
            {activeDataWell?.client_name} - {activeDataWell?.field_name}{" "}
            месторождение
          </p>
          <p className={styles.wellact__number}>
            Куст {activeDataWell?.pad_name}, Скважина{" "}
            {activeDataWell?.well_name}, _
          </p>
          <p className={styles.wellact__status}>
            {activeDataWell?.status_drilling}
          </p>
        </div>
        <div className={styles.wellact__insert}>
          <p className={styles.wellact__title}>Дата внесения данных</p>
          <p className={styles.wellact__date}>29.03.2023</p>
        </div>
      </div>

      <div className={styles.buttons}>
        <FormCoeff onSubmit={onSubmit} buttonText="Добавить">
            <InputSmall
            type="text"
            label="Текущие коэффициенты:"
            name="device_title"
            value={form.device_title}
            onChange={handleChange}
            blue={true}
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
        <div className={styles.buttons__container}>
          <Button
            className={styles.buttons__button}
            htmlType="button"
            size="small"
            onClick={() => {}}
          >
            Добавить оси
          </Button>
          <Button
            className={styles.buttons__button}
            htmlType="button"
            size="small"
            onClick={() => {}}
          >
            Увеличить
          </Button>
        </div>
      </div>
    </>
  );
};
