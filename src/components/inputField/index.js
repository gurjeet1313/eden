import React, { useContext } from "react";
import Cards from "../cards";
import { FormContext } from "../form";

import { TextContainer, UrlContainer } from "./styled";

// component for the input fields starts here
const InputField = ({
  fieldTitle,
  name,
  type,
  placeholder,
  fieldExample,
  optional,
  cardTitle,
  cardType,
  cardDescription,
  checkVal,
}) => {
  const { formState, setFormState } = useContext(FormContext);

  const handleChange = (e) => {
    // if (e.target.type === "radio") {
    //   [e.target.name] = e.target.checked;
    // }

    if (e.target.value !== "") {
      const value = e.target.value;
      setFormState({
        ...formState,
        [e.target.name]: value,
        isValid: false,
      });
    }

    if (e.target.type === "radio") {
      e.target.checked = !e.target.checked;
    }
  };

  const handleBlur = (e) => {
    let regex = /^[a-zA-Z ]+$/;
    let val = e.target.value;
    if (regex.test(val)) {
      setFormState({
        ...formState,
        isValid: false,
      });
    } else {
      alert("value cannot be a number or empty");
      setFormState({
        ...formState,
        isValid: true,
      });
    }
  };

  return (
    <>
      {/* conditional structuring for the text and url field  */}
      {type === "text" ? (
        <TextContainer className="text-fields">
          <span className="field-title">
            {fieldTitle} {optional && "Optional"}
          </span>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={
              name === "fullName"
                ? formState.fullName.value
                : name === "displayName"
                ? formState.displayName.value
                : name === "workspaceName"
                ? formState.workspaceName.value
                : ""
            }
            onChange={(e) => handleChange(e)}
            onBlur={(e) => handleBlur(e)}
          />
          <span className="error"></span>
        </TextContainer>
      ) : type === "url" ? (
        <UrlContainer className="url">
          <p className="field-title">
            {fieldTitle} <span>({optional && "Optional"})</span>
          </p>
          <div className="field-wrap">
            <label>{fieldExample}</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={
                name === "workspaceUrl" ? formState.workspaceUrl.value : ""
              }
              onChange={(e) => handleChange(e)}
              onBlur={(e) => handleBlur(e)}
            />
          </div>
        </UrlContainer>
      ) : type === "radio" ? (
        <label className="radio">
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={cardType}
            onChange={(e) => handleChange(e)}
            checked={cardType === formState.workSpaceOption}
          />
          <Cards
            cardListTitle={cardTitle}
            cardListType={cardType}
            cardListDescription={cardDescription}
          />
        </label>
      ) : null}
    </>
  );
};
// component for the input fields starts here

export default InputField;
