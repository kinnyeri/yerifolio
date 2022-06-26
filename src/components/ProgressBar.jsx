import { useEffect, useState } from "react";
import styled from "styled-components";

export const ProgressBar = ({ OuterPageBoxRef }) => {
  const [progressed, setProgressed] = useState("0");
  useEffect(() => {
    const wheelHandler = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = OuterPageBoxRef.current;
      setProgressed(
        (
          ((scrollTop + clientHeight * Number(progressed) * 0.01) /
            scrollHeight) *
          100
        ).toFixed(1)
      );
      console.log(progressed);
    };
    const boxRefCurrent = OuterPageBoxRef.current;
    boxRefCurrent.addEventListener("scroll", wheelHandler);
    return () => {
      boxRefCurrent.removeEventListener("scroll", wheelHandler);
    };
  }, [progressed]);
  return (
    <ProgressBarBox>
      <Progress size={`${progressed}%`} />
    </ProgressBarBox>
  );
};
const ProgressBarBox = styled.div`
  width: 100%;
  height: 5px;
  background-color: var(--color-back-dark);

  position: fixed;
`;
const Progress = styled.div`
  width: ${(props) => props.size};
  height: 5px;
  background-color: var(--color-main-dark);

  position: absolute;
`;
