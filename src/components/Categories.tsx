type categoriesType = {
  value: number;
  onCategories: (id: number) => void;
};
const categories: string[] = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
function Categories({ value, onCategories }: categoriesType) {
  return (
    <div className="categories">
      <ul>
        {categories.map((obj: string, index: number) => (
          <li
            key={index}
            onClick={() => onCategories(index)}
            className={value === index ? "active" : undefined}
          >
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
