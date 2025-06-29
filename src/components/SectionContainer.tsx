import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  marginTop?: string;
  padding?: string;
  id?: string;
}

const SectionContainer = ({
  children,
  className = "",
  marginTop = "mt-20",
  padding = "px-4 md:px-6",
  id,
}: Props) => {
  return (
    <section
      id={id}
      className={`container mx-auto ${className} ${marginTop} ${padding}`}
    >
      {children}
    </section>
  );
};

export default SectionContainer;
