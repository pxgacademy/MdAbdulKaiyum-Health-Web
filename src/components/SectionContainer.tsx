import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  marginTop?: string;
  id?: string;
}

const SectionContainer = ({
  children,
  className = "",
  marginTop = "mt-20",
  id,
}: Props) => {
  return (
    <section id={id} className={`container mx-auto ${className} ${marginTop}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
