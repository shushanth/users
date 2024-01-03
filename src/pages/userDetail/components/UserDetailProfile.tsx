import React from "react";
import { useParams } from "react-router-dom";

import { userDetailMockResponse } from "../../../common/services/mockUserResponse";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/rootStore";
import * as Styled from "../../../common/components/styled";
import * as userDetailSliceAction from "../store/userDetailSlice";
import * as UserDetailSliceModel from "../store/userDetailSliceModel";
import Image from "../../../common/components/Image";

const UserDetailProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { firstName, lastName, email, age, address, avatarUrl } = useSelector(
    (state: RootState) => state.userDetailPage.user
  );

  const getCurrentUserDetails = React.useCallback(() => {
    const currentRoutedUserId: number = params?.id
      ? (parseInt(params?.id, 10) as number)
      : 0;
    if (currentRoutedUserId) {
      const mockUser = userDetailMockResponse(currentRoutedUserId);
      dispatch(
        userDetailSliceAction.updateUserDetails(
          mockUser as UserDetailSliceModel.UserDetail
        )
      );
    }
  }, [dispatch, params]);

  const getImageLabel = (): string =>
    `${firstName.charAt(0)} ${lastName.charAt(0)}`;

  React.useEffect(() => {
    getCurrentUserDetails();
  }, [getCurrentUserDetails]);

  return (
    <Styled.PageCardLayout>
      <Styled.Layout $type="row">
        <Styled.Layout $type="column">
          <React.Suspense fallback={<Image type="fallback" label="image" />}>
            <Image label={getImageLabel()} url={avatarUrl} />
          </React.Suspense>
        </Styled.Layout>
        <Styled.Layout $type="column" $fullSize>
          {/* fullname */}
          <Styled.Heading $type="h1">
            {firstName} {lastName}
          </Styled.Heading>
          {/* Age */}
          <Styled.Label $size="small">Age</Styled.Label>
          <Styled.Label>{age}</Styled.Label>
          {/* Email */}
          <Styled.Label $size="small">Email</Styled.Label>
          <Styled.Label>{email}</Styled.Label>

          {/* Address */}
          <Styled.Label $size="small">Address</Styled.Label>
          <Styled.Label>{address}</Styled.Label>
        </Styled.Layout>
      </Styled.Layout>
    </Styled.PageCardLayout>
  );
};

export default UserDetailProfile;
