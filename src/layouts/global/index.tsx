import { ReactNode } from "react";
import { Header } from "../../components";

type Props = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <div className="flex flex-col w-full py-10 px-16">
        <Header />
        {children}
      </div>
    </>
  );
};
