import useAlert from "hooks/useAlert";
import Style from "./alert.module.scss";

const Alert = () => {
  const { state, setAlert } = useAlert();
  const { text, type } = state;

  const hideAlert = () => {
    setAlert({ text: "", type: "" });
  };

  if (text && type) {
    return (
      <div className={`alert alert-${type}`}>
        <div className="container d-flex align-items-center">
          <span className="fw-bold">{text}</span>
          <button
            className={`btn btn-link btn-sm ms-auto ${Style.btn_close}`}
            onClick={hideAlert}
          >
            ×
          </button>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Alert;
