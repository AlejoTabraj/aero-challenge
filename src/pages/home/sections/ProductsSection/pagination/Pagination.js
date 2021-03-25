import React from "react";
import ArrowLeft from '../../../../../mock/icons/arrow-left.svg'
import ArrowRight from '../../../../../mock/icons/arrow-right.svg'
import { ArrowButton, ArrowImage, PaginationWrapper } from "./styledPagination";

const Pagination = ({ pageState, setPageState }) => {
  const { sectionNumber } = pageState;

  const handleOnClick = e => {
    e.preventDefault();
    const target = e.target.alt;
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
          <ArrowImage src={ArrowLeft} alt='prevButton'></ArrowImage>
      </ArrowButton>
      <ArrowButton onClick={handleOnClick} value="nextButton">
          <ArrowImage value="nextButton" src={ArrowRight} alt='nextButton'></ArrowImage>
      </ArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
