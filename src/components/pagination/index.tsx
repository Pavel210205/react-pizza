import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { setPageCount } from "../../features/counter/filterSlise";
import { useDispatch } from "react-redux";

export default function Pagination() {
  const dis = useDispatch();
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dis(setPageCount(event.selected))}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
}
