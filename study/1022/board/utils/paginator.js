const loadsh = require("lodash");
const PAGE_LIST_SIZE = 10;

module.exports = ({ totalCount, page, perPage = 10 }) => {
  const PER_PAGE = perPage;
  const totalPage = Math.ceil(totalCount / PER_PAGE);

  let qoutient = parseInt(page / PAGE_LIST_SIZE);
  if (page % PAGE_LIST_SIZE === 0) {
    qoutient -= 1;
  }

  startPage = qoutient * PAGE_LIST_SIZE + 1;
  endPage =
    startPage + PAGE_LIST_SIZE - 1 < totalPage
      ? startPage + PAGE_LIST_SIZE - 1
      : totalPage;

  const isFirstPage = page === 1;
  const isLastPage = page === totalPage;

  const hasPrev = page > 1;
  const hasNext = page < totalPage;

  const paginator = {
    pageList: loadsh.range(startPage, endPage + 1),
    isFirstPage,
    isLastPage,
    hasPrev,
    hasNext,
    startPage,
    endPage,
  };

  return paginator;
};
