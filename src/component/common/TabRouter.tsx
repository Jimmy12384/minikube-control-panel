import { ReactElement } from "react";

interface TabRouterProps {
  activeIndex: number;
  children: ReactElement | ReactElement[];
}

const TabRouter = ({ activeIndex, children }: TabRouterProps): ReactElement => {
  if (Array.isArray(children)) {
    return children[activeIndex] || <></>;
  } else {
    return children;
  }
};

export default TabRouter;
