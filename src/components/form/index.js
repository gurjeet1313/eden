import React, { useState } from "react";
import FormParts from "../formParts";
import FormList from "../list";
import ProgressBar from "../progressBar";

import { MainForm, FormButton } from "./styled";

export const FormContext = React.createContext();
export const FormListData = React.createContext();

const Form = ({ data }) => {
  const [countState, setCountState] = useState(1);
  const [formListState, setFormListState] = useState(
    JSON.parse(localStorage.getItem("Form"))
  );
  const [formState, setFormState] = useState({
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    workSpaceOption: "single",
    isValid: true,
  });

  const changeState = () => {
    if (countState < 4) {
      setCountState(countState + 1);
    } else {
      setCountState(1);
    }

    if (
      countState === 1 &&
      (formState.fullName === "" || formState.displayName === "")
    ) {
      setFormState({ ...formState, isValid: true });
    } else if (countState === 2 && formState.workspaceName === "") {
      setFormState({ ...formState, isValid: true });
    } else {
      setFormState({ ...formState, isValid: false });
    }
  };

  const getFormData = () => {
    setCountState(1);

    if (localStorage.getItem("Form") === null) {
      let formDetails = [];
      formDetails.push(formState);
      localStorage.setItem("Form", JSON.stringify(formDetails));
    } else {
      let formDetails = [];
      formDetails = JSON.parse(localStorage.getItem("Form"));
      formDetails.push(formState);
      localStorage.setItem("Form", JSON.stringify(formDetails));
    }

    setFormListState(JSON.parse(localStorage.getItem("Form")));

    setFormState({
      ...formState,
      fullName: "",
      displayName: "",
      workspaceName: "",
      workspaceUrl: "",
      workSpaceOption: "single",
      value: "",
    });
  };

  return (
    <div>
      <MainForm>
        <ProgressBar countVal={countState} />
        <form>
          {data.map((formItems) => {
            return countState === formItems.id ? (
              <div key={formItems.id}>
                <FormContext.Provider value={{ formState, setFormState }}>
                  <FormParts
                    title={formItems.title}
                    subTitle={formItems.subTitle}
                    type={formItems.type}
                    formFields={formItems.formFields}
                    formStateData={formState}
                    stateVal={countState}
                  />
                </FormContext.Provider>
              </div>
            ) : null;
          })}

          <FormButton
            type="button"
            onClick={countState < 4 ? () => changeState() : () => getFormData()}
            className="button"
            disabled={formState.isValid}
          >
            {countState < 4 ? "Click me" : "Launch Eden"}
          </FormButton>
        </form>
      </MainForm>
      <FormListData.Provider value={{ formListState, setFormListState }}>
        <FormList />
      </FormListData.Provider>
    </div>
  );
};

export default Form;
