import * as Styled from "./styled";

interface PaginationProps {
  totalItems: number;
  currentPage: number;
  itemsPerPage: number;
  onPageIncrement: (value: "increment") => void;
  onPageDecrement: (value: "decrement") => void;
}

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageIncrement,
  onPageDecrement,
}: PaginationProps): JSX.Element => {
  const totalPageNumbers = Math.ceil(totalItems / itemsPerPage);
  const getPaginationTitle = () => {
    const offset = 9;
    const notCurrentPageOne = `${currentPage * 10 - offset} - 
      ${isPagesExceeded() ? totalItems : currentPage * 10} of ${totalItems}`;
    if (currentPage === 1) {
      if (totalItems < itemsPerPage) {
        return `${currentPage} - ${totalItems} of ${totalItems}`;
      }
      return `${currentPage} - ${itemsPerPage} of ${totalItems}`;
    }
    if (totalItems < itemsPerPage) {
      return `${currentPage} - ${totalItems} of ${totalItems}`;
    }
    return `${notCurrentPageOne}`;
  };

  const isPagesExceeded = (): boolean => {
    return currentPage >= totalPageNumbers;
  };

  return (
    <Styled.PaginationLayout>
      <Styled.ButtonArrow
        onClick={() => onPageDecrement("decrement")}
        disabled={currentPage === 1}
      >
        &larr;
      </Styled.ButtonArrow>
      <Styled.Label $size="xsmall">{getPaginationTitle()}</Styled.Label>
      <Styled.ButtonArrow
        onClick={() => onPageIncrement("increment")}
        disabled={isPagesExceeded()}
      >
        &rarr;
      </Styled.ButtonArrow>
    </Styled.PaginationLayout>
  );
};

export default Pagination;
