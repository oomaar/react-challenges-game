import { PaginationButton, PaginationContainer } from "./styledPagination";

export const Pagination = ({ pagesCount, setPageNumber, pageNumber }) => {
  const numberOfPages = generateRange(1, pagesCount);
  const visibleCount = 5;

  function generateRange(start, end) {
    const range = [];

    for (let index = start; index < end; index++) {
      range.push(index);
    }

    return range;
  }

  const getSliceStart = () => {
    if (generateRange(0, Math.ceil(visibleCount / 2)).includes(pageNumber)) {
      return numberOfPages[0] - 1;
    } else if (
      generateRange(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(pageNumber)
    ) {
      return numberOfPages[numberOfPages.length - 1 - visibleCount];
    } else {
      return pageNumber - Math.ceil(visibleCount / 2);
    }
  };

  const getSliceEnd = () => {
    if (
      generateRange(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(pageNumber)
    ) {
      return numberOfPages[numberOfPages.length - 1];
    } else if (generateRange(0, Math.ceil(visibleCount / 2)).includes(pageNumber)) {
      return visibleCount;
    } else {
      return pageNumber + Math.floor(visibleCount / 2);
    }
  };

  return (
    <PaginationContainer>
      {/* previous button */}
      <PaginationButton
        onClick={() =>
          setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)
        }
      >
        Prev
      </PaginationButton>

      {/* previous dots button */}
      {pageNumber - 1 > Math.ceil(visibleCount / 2) && (
        <PaginationButton
          onClick={() =>
            setPageNumber(
              pageNumber - visibleCount > 0 ? pageNumber - visibleCount : 1
            )
          }
        >
          ...
        </PaginationButton>
      )}

      {/* mapping through a sliced array of page numbers */}
      {numberOfPages.slice(getSliceStart(), getSliceEnd()).map((number) => (
        <PaginationButton
          key={number}
          active={pageNumber === number}
          onClick={() => setPageNumber(number)}
        >
          {number}
        </PaginationButton>
      ))}

      {/* next dots button */}
      {pageNumber <
        numberOfPages[numberOfPages.length - 1] -
        Math.floor(visibleCount / 2) && (
          <PaginationButton
            onClick={() =>
              setPageNumber(
                pageNumber + visibleCount <= numberOfPages.length
                  ? numberOfPages[pageNumber + visibleCount - 1]
                  : numberOfPages[numberOfPages.length - 1]
              )
            }
          >
            ...
          </PaginationButton>
        )}

      {/* next button */}
      <PaginationButton
        onClick={() =>
          setPageNumber(
            pageNumber < numberOfPages.length ? pageNumber + 1 : pageNumber
          )
        }
      >
        next
      </PaginationButton>
    </PaginationContainer>
  );
};
