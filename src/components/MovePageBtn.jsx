import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

export const MovePageBtn = ({ isDown }) => {
  const ProfileToContents = (
    <GoToContentBtn href="#contents">
      <FontAwesomeIcon
        icon={isDown ? faCaretDown : faCaretUp}
        style={{
          color: "var(--color-back)",
          fontSize: "2rem",
          lineHeight: "2rem",
        }}
      />
    </GoToContentBtn>
  );
  return ProfileToContents;
};

const GoToContentBtn = styled.a`
  width: 6vw;
  min-width: 52px;
  height: 6vw;
  min-height: 52px;
  border-radius: 100%;

  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--color-main);
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50;
  text-decoration: none;
`;
