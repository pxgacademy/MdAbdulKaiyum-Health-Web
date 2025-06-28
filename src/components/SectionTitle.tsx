import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = "" }: Props) => {
  return (
    <h2
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bangla font-bold flex items-center justify-center gap-x-1.5 ${className}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
