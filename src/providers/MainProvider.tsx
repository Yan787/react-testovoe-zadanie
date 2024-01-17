import { FC, ReactNode } from "react";
import Layout from "../components/layout/Layout";

const MainProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <Layout>{children}</Layout>;
};

export default MainProvider;
