import React, { useEffect, useState } from "react";
import styles from "./DropDown.module.scss";

type TRuns = {
  id: number;
  run_number: number;
  start_date: Date;
  end_date: Date;
  start_depth: number;
  end_depth: number;
  in_statistics: boolean;
  memory: string;
  bha: string;
  sag: number;
  section: number;
  dd_contractor_name: number;
};
type DropDownProps = {
  runs: Array<TRuns>;
  showDropDown: boolean;
  toggleDropDown: Function;
  runSelection: Function;
};
const DropDown: React.FC<DropDownProps> = ({
  runs,
  runSelection,
}: DropDownProps): JSX.Element => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const onClickHandler = (runId: number): void => {
    runSelection(runId);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? styles.dropdown : styles.dropdown}>
        {runs.map((item) => (
          <p
            key={item.id}
            onClick={(): void => {
              onClickHandler(item.id);
            }}
          >
            {item.run_number}
          </p>
        ))}
      </div>
    </>
  );
};

export default DropDown;
