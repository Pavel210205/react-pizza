import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="131" cy="164" r="116" />
    <rect x="0" y="325" rx="10" ry="10" width="280" height="75" />
    <rect x="169" y="414" rx="30" ry="30" width="110" height="40" />
    <rect x="21" y="419" rx="8" ry="8" width="92" height="27" />
    <rect x="4" y="298" rx="9" ry="9" width="275" height="17" />
    <rect x="96" y="308" rx="0" ry="0" width="6" height="0" />
  </ContentLoader>
);

export default Skeleton;
