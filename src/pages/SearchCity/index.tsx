import "./index.css";
import { Modal } from "../../components/Modal";
import { Form } from "../../components/Form";
import { CurrentWeather } from "../../components/CurrentWheater";
import { ForecastList } from "../../components/ForecastList";
import { LoadingMain } from "../../components/LoadingMain";
import { useSearchCity } from "./useSearchCity";

export const SearchCity = () => {
  const {
    citie,
    data,
    loading,
    showModalForm,
    onCitieSelected,
    onClickSearch,
  } = useSearchCity();
  return loading ? (
    <LoadingMain />
  ) : (
    <div className="content">
      {!showModalForm && citie && data ? (
        <>
          <CurrentWeather
            data={data}
            name={citie.city_name}
            onClickSearch={onClickSearch}
          />
          <ForecastList data={data} />
        </>
      ) : null}

      {showModalForm && (
        <Modal>
          <Form onCitieSelected={onCitieSelected} />
        </Modal>
      )}
    </div>
  );
};
