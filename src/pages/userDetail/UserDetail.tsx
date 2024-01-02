import React from "react";
import { useNavigate } from "react-router-dom";

import * as Styled from "../../common/components/styled";
import UserDetailProfile from "./components/UserDetailProfile";

const UserDetail = (): JSX.Element => {
  const navigate = useNavigate();

  const onPageBack = () => navigate(-1);

  return (
    <Styled.PageLayout>
      <Styled.PageActionsLayout>
        <Styled.Button onClick={onPageBack} aria-label="back-button">
          Back
        </Styled.Button>
      </Styled.PageActionsLayout>
      <UserDetailProfile />
    </Styled.PageLayout>
  );
};

export default UserDetail;
