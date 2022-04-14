import React, { useContext } from "react";
import InputField from "../inputField";

import CorrectSign from "../../assets/images/last.png";

import { FormContext } from "../form";

import { FormContainer } from "./styled";

const FormParts = ({ title, subTitle, type, formFields, stateVal }) => {
  const formName = useContext(FormContext);

  return (
    <FormContainer className="fieldGroup">
      {stateVal === 4 ? (
        <figure className="congratulations">
          <img src={CorrectSign} alt="Congratulations" />
        </figure>
      ) : null}
      <h2 className="title">
        {title} {stateVal === 4 ? formName.formState.fullName : null}
      </h2>
      <p className="sub-title">{subTitle}</p>
      <div className={stateVal === 3 ? "radio-container" : null}>
        {type === "inputFields" || type === "radio"
          ? formFields.map((inputItems, index) => {
              return (
                <div key={index}>
                  <InputField
                    fieldTitle={inputItems.fieldTitle}
                    name={inputItems.name}
                    type={inputItems.fieldType}
                    placeholder={inputItems.filedPlaceHolder}
                    fieldExample={inputItems.fieldExample}
                    optional={inputItems.optional}
                    cardTitle={inputItems.cardTitle}
                    cardType={inputItems.cardType}
                    cardDescription={inputItems.cardDescription}
                    checkVal={inputItems.checked}
                    error={inputItems.error}
                  />
                </div>
              );
            })
          : null}
      </div>
    </FormContainer>
  );
};

export default FormParts;
