import styled from "styled-components";
import { pdfjs, Document, Page } from "react-pdf";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export const Modal = ({ handleClick, filePath }) => {
  const modalRef = useRef();
  useEffect(() => {
    document.addEventListener("mousedown", handleModalOutside);
    return () => {
      document.removeEventListener("mousedown", handleModalOutside);
    };
  }, []);
  const handleModalOutside = (e) => {
    if (!modalRef.current.contains(e.target)) {
      handleClick();
    }
  };
  return (
    <ModalPageBox
      style={{ top: window.scrollY, left: 0 }}
      onClick={(e) => e.stopPropagation()}
    >
      <ModalBox ref={modalRef}>
        <ModalCancelBtn onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faClose} />
        </ModalCancelBtn>
        <PDFViewer onContextMenu={(e) => e.preventDefault()}>
          <Document file={filePath}>
            <Page pageNumber={1} />
          </Document>
        </PDFViewer>
      </ModalBox>
    </ModalPageBox>
  );
};
Modal.propTypes = {
  filePath: PropTypes.string,
};
const ModalPageBox = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #00000080;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBox = styled.div`
  height: 80%;
  background: white;
  border-radius: 10px;
  overflow: auto;
  display: grid;
  @media screen and (max-width: 682px) {
    width: 90%;
  }
`;
const PDFViewer = styled.div`
  width: 100%;
  overflow: auto;
`;
const ModalCancelBtn = styled.button`
  width: 37px;
  height: 37px;
  padding: 0px;

  margin-top: 3px;
  margin-right: 3px;

  border: 0;
  background: 0;
  color: black;
`;
