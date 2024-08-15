import React from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Card from "../components/Pizza-items";
import Skeleton from "../components/Sceleton-loader";
import Pagination from "../components/pagination/index";
import { selectorFilter, setCategoryId } from "../features/counter/filterSlise";
import { fetchPizzas, selectorBd } from "../features/counter/DataBaseSlise";
import { useSelector, useDispatch } from "react-redux";
// type filter = {
//   categoriesId: number;
//   sortType: { name: string; sortProperty: string };
//   searchValue: string;
//   currentPage: number;
// };

export default function Home() {
  const dis = useDispatch();
  const { DataBase: cartItems, status } = useSelector(selectorBd);
  const {
    categoryId: categoriesId,
    pageCount: currentPage,
    sort: sortType,
    SearchValue: searchValue,
  } = useSelector(selectorFilter);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    // @ts-ignore
    dis(fetchPizzas({ categoriesId, sortType, searchValue, currentPage }));
  }, [categoriesId, sortType, searchValue, currentPage]);

  const renderPizza = cartItems.map((obj: any) => (
    <Card key={obj.id} {...obj} />
  ));
  const skeletons = [...new Array(10)].map((_: undefined, index: number) => (
    <Skeleton key={index} />
  ));

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoriesId}
          onCategories={(id: number) => dis(setCategoryId(id))}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? skeletons : renderPizza}
      </div>
      <Pagination />
    </>
  );
}
