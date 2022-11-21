import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Card = ({ children }: Props) => {
  return (
    <>
      <div className="w-max flex flex-col py-7 px-10 mt-8 border border-purple-900 rounded-lg">
        {children}
      </div>
    </>
  );
};
