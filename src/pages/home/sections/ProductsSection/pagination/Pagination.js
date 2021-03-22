import React from "react";
import ArrowLeft from '../../../../../mock/icons/arrow-left.svg'
import ArrowRight from '../../../../../mock/icons/arrow-right.svg'
import { ArrowButton, ArrowImage, PaginationWrapper } from "./styledPagination";

const Pagination = ({ pageState, setPageState }) => {
  const { sectionNumber } = pageState;

  const handleOnClick = e => {
    e.preventDefault();
    const target = e.target.value;
    if (sectionNumber >= 3 || sectionNumber < 1) {
      setPageState({ ...pageState, sectionNumber: 1 });
    } else {
      switch (target) {
        case "nextButton":
          return setPageState({
            ...pageState,
            sectionNumber: sectionNumber + 1
          });
        case "prevButton":
          return sectionNumber === 1
            ? null
            : setPageState({ ...pageState, sectionNumber: sectionNumber - 1 });
        default:
            return pageState
      }
    }
  };
  return (
    <PaginationWrapper>
      <ArrowButton onClick={handleOnClick} value="prevButton">
          <ArrowImage src={ArrowLeft}></ArrowImage>
      </ArrowButton>
      <ArrowButton onClick={handleOnClick} value="nextButton">
          <ArrowImage src={ArrowRight}></ArrowImage>
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
