import ScrollTop from "@/app/utilits/helpers/ScrollTop";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  listings,
  setCurrentItems,
}: {
  listings: any;
  setCurrentItems: any;
}) {
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(listings.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(listings.length / itemsPerPage));
  }, [itemOffset,listings,setCurrentItems]);

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % listings.length;
    setItemOffset(newOffset);
    ScrollTop()
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="paginationContanienr"
        previousClassName="pagantionBtn"
        nextClassName="pagantionBtn"
        pageClassName="PageLink"
        activeClassName="activePageLink"
        disabledClassName="disabledLink"
      />
    </>
  );
}
