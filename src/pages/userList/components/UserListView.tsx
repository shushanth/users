import React from "react";

import * as UserListSliceModel from "../store/userListSliceModel";
import * as Styled from "../../../common/components/styled";
import EmptyResults from "../../../common/components/EmptyResults";

interface UsersListViewProps {
  users: UserListSliceModel.User[];
}

const UsersListView = React.memo(
  ({ users }: UsersListViewProps): JSX.Element => {
    return (
      <Styled.ListContainer>
        {!users?.length && <EmptyResults label="users" />}
        {users.map(({ id, firstName, age, email }: UserListSliceModel.User) => {
          return (
            <Styled.Link
              className={"link"}
              $linkType="default"
              to={`/user/${id}`}
              key={id}
            >
              <Styled.List>
                <Styled.ListBucket $noFlexResp>
                  <Styled.Label $size="xsmall" $level="primary">
                    Name
                  </Styled.Label>
                  <Styled.Label $size="medium">{firstName}</Styled.Label>
                </Styled.ListBucket>

                <Styled.ListBucket $noFlexResp>
                  <Styled.Label $size="xsmall" $level="primary">
                    Age
                  </Styled.Label>
                  <Styled.Label $size="medium">{age}</Styled.Label>
                </Styled.ListBucket>

                <Styled.ListBucket>
                  <Styled.Label $size="xsmall" $level="primary">
                    Email
                  </Styled.Label>
                  <Styled.Label $size="medium">{email}</Styled.Label>
                </Styled.ListBucket>
              </Styled.List>
            </Styled.Link>
          );
        })}
      </Styled.ListContainer>
    );
  }
);

export default UsersListView;
