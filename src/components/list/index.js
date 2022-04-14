import React, { useContext } from "react";
import { FormListData } from "../form";

import { TabelContainer } from "./styled";

const FormList = () => {
  const formListContext = useContext(FormListData);

  return (
    <TabelContainer>
      {Array.isArray(formListContext.formListState) &&
      formListContext.formListState.length ? (
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
              <th>Display Name</th>
              <th>Workspace Name</th>
              <th>Workspace url</th>
              <th>Workspace type</th>
            </tr>
            {formListContext.formListState.map((formListItem, index) => {
              return (
                <tr key={index}>
                  <td>{formListItem.fullName}</td>
                  <td>{formListItem.displayName}</td>
                  <td>{formListItem.workspaceName}</td>
                  <td>{formListItem.workspaceUrl}</td>
                  <td>{formListItem.workSpaceOption}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </TabelContainer>
  );
};

export default FormList;
