import React from "react";
import { Header, HeaderButton, HeaderModule } from "@consta/uikit/Header";
import { IconUser } from "@consta/icons/IconUser";
import { IconExit } from "@consta/icons/IconExit";
import { useHistory } from "react-router-dom";
import { RoutesName } from "../../router";

const Navbar: React.FC = () => {
  const history = useHistory();
  const isUserAuthorized = true;

  const userAuthorized = (
    <Header
      rightSide={
        <HeaderModule indent={"s"}>
          <HeaderButton
            onClick={() => console.log("выход")}
            iconLeft={IconExit}
          />
        </HeaderModule>
      }
    />
  );

  const userNotAuthorized = (
    <Header
      rightSide={
        <HeaderModule indent={"s"}>
          <HeaderButton
            onClick={() => history.push(RoutesName.LOGIN)}
            iconLeft={IconUser}
          />
        </HeaderModule>
      }
    />
  );

  return isUserAuthorized ? userAuthorized : userNotAuthorized;
};

export default Navbar;
