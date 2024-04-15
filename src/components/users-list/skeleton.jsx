import ContentLoader from "react-content-loader";
export const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={180}
    height={50}
    viewBox="0 0 210 50"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="25" cy="25" r="20" />
    <rect x="64" y="0" rx="6" ry="6" width="100" height="20" />
    <rect x="64" y="28" rx="6" ry="6" width="120" height="15" />
    <rect x="190" y="12" rx="6" ry="3" width="20" height="20" />
  </ContentLoader>
);
