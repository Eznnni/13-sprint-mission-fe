import { useMediaQuery } from "react-responsive";

const PAGE_SIZE = {
  best: { desktop: 4, tablet: 2, mobile: 1 },
  forSale: { desktop: 10, tablet: 6, mobile: 4 },
};

function usePageSize(type = "best") {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const sizes = PAGE_SIZE[type];

  if (isDesktop) return sizes.desktop;
  if (isTablet) return sizes.tablet;

  return sizes.mobile;
}

export default usePageSize;
