import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "~/components/common/input";

const ForgetModal = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [value, setValue] = useState("");

  const valueChange = (evt) => {
    setValue(evt.target.value);
  };

  const isEmail = (v) =>
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
      v
    );

  const isAccount = (v) =>
    /^[A-Za-z0-9]+$/.test(v) && v.length > 5 && v.length < 16;

  const valueRegister = register("input-forget-password", {
    onChange: valueChange,
    required: true,
    validate: (v) => isEmail(v) || isAccount(v),
  });

  const onSubmit = async (evt) => {
    setValue(evt["input-forget-password"]);
  };

  const handleCancel = () => {
    clearErrors("input-forget-password");
  };

  return (
    <div
      id="forgetModal"
      className="modal fade"
      tabIndex={-1}
      aria-labelledby="forgetModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="forgetModalLabel">
              忘記帳號 / 密碼
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex">
              <p className="text-subheading">帳號 / 註冊之電子信箱請擇一提供</p>
            </div>
            <div
              className={`text-end mb-2 ${
                errors?.["input-forget-password"] && "text-danger"
              }`}
            >
              {errors?.["input-forget-password"]
                ? "請輸入符合格式之帳號或信箱"
                : ""}
            </div>
            <Input
              id="input-forget-password"
              placeholder="帳號 / 電子信箱"
              className={`${
                errors?.["input-forget-password"] ? "is-invalid" : ""
              }`}
              name={valueRegister.name}
              value={value}
              onChange={valueRegister.onChange}
              formRegister={valueRegister}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary fs-5"
              data-bs-dismiss="modal"
              onClick={handleCancel}
            >
              取消
            </button>
            <button
              type="button"
              className="btn btn-primary fs-5"
              style={{ width: "190px" }}
              onClick={handleSubmit(onSubmit)}
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetModal;
