import React from "react";
import cn from "classnames";
// import Button from "../buttons/Button"
import styles from "./styles.module.scss";
import { UpdateIcon,Save } from "../../ui-kit/svg/icons";
import { toaster, Tooltip, InfoSignIcon, Position } from "evergreen-ui";

interface IFormContainerProps {
  buttonText: string;
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitError?: string | null;
  loading?: boolean;
  showIcon?: boolean;
  extClassName?: string;
}

export function FormCoeff({
  onSubmit,
  submitError,
  showIcon,
  loading,
  children,
  extClassName,
}: IFormContainerProps) {
  return (
    <form
      noValidate
      onSubmit={onSubmit}
      className={cn(extClassName, styles.form_small)}
    >
      {children}
      <div className={styles.form__submitWrapper}>
        {submitError && (
          <span className={cn("text", styles.form__submitError)}>
            {submitError}
          </span>
        )}
       
         {showIcon &&  <div className={styles.tooltip_Wrapper}> <button type="submit" className={styles.submitButton}>
            <UpdateIcon /> {/* Вставляем иконку SVG */}
          </button>
          <Tooltip
            content="Переcчитает с учетом введенных вручную коэффициентов"
            position={Position.RIGHT}
          >
            <InfoSignIcon />
          </Tooltip> </div>}
          {!showIcon &&  <div className={styles.tooltip_Wrapper}> <button type="submit" className={styles.submitButton}>
            <Save /> {/* Вставляем иконку SVG */}
          </button>
          <Tooltip
            content="Сохранит коэффициенты для рейса"
            position={Position.RIGHT}
          >
            <InfoSignIcon />
          </Tooltip> </div>}
       
      </div>
    </form>
  );
}
