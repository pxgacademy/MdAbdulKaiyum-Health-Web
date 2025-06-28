import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  marginTop?: string;
}

const SectionContainer = ({
  children,
  className = "",
  marginTop = "mt-20",
}: Props) => {
  return (
    <section className={`container mx-auto ${className} ${marginTop}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
