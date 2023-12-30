import * as Styled from "../../common/components/styled";

export type NavItem = {
  id: number | string;
  label: string;
  path: string;
};

export enum NavPaths {
  HOME = "/",
  USERS = "/users",
  USER_DETAIL = "/users/:id",
}

const PageNavigation = (): JSX.Element => {
  const navLinks: NavItem[] = [
    {
      id: 1,
      label: "Home",
      path: NavPaths.HOME,
    },
    {
      id: 2,
      label: "Users",
      path: NavPaths.USERS,
    },
  ];
  return (
    <Styled.NavLayout>
      {navLinks.map(({ id, label, path }: NavItem) => {
        return (
          <Styled.Link $linkType="nav" key={id} to={path}>
            {label}
          </Styled.Link>
        );
      })}
    </Styled.NavLayout>
  );
};

export default PageNavigation;
