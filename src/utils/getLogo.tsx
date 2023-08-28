import AiDriller from "../ui-kit/svg/aidriller.svg";
import PNMR from "../ui-kit/svg/pnmr.svg";
import SB from "../ui-kit/svg/schlumberger.svg";
import BS from "../ui-kit/svg/burservis.svg";
import SSK from "../ui-kit/svg/ssk.svg";
import Weatherford from "../ui-kit/svg/weatherford.svg";
import BakerHughes from "../ui-kit/svg/bh.svg";

export const getLogo = (name: string): JSX.Element => {
  if (name === "АО «БЭЙКЕР ХЬЮЗ»")
    return <img src={BakerHughes} alt="BH" style={{ marginRight: "0.5rem" }} />;
  else if (name === "Schlumberger")
    return <img src={SB} alt="SB" style={{ marginRight: "0.5rem" }} />;
  else if (name === "Интеллектуальные системы" || name === "ИС")
    return (
      <img src={AiDriller} alt="AiDriller" style={{ marginRight: "0.5rem" }} />
    );
  else if (name === 'ООО "Везерфорд"')
    return (
      <img
        src={Weatherford}
        alt="Weatherford"
        style={{ marginRight: "0.5rem" }}
      />
    );
  else if (name === "ООО «БурСервис»" || name === "ИС")
    return (
      <img
        src={BS}
        alt="BS"
        style={{ marginRight: "-0.50rem", height: "70px" }}
      />
    );
  else if (name === "ССК" || name === "Сибирская сервисная компания")
    return <img src={SSK} alt="SSK" style={{ marginRight: "0.5rem" }} />;
  else if (name === "ПНМР")
    return <img src={PNMR} alt="PNMR" style={{ marginRight: "0.5rem" }} />;
  return <div className="one-big-initial-box">{name.slice(0, 1)}</div>;
};
