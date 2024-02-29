import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProductsProps } from "@/interface";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";

interface Props {
  data: ProductsProps;
}
const ProductDetailPage: NextPage<Props> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { contrast, oversized } = useAccessibility();

  useEffect(() => {
    const likedProductsString = localStorage.getItem("likedProducts");
    const likedProducts: string[] = likedProductsString
      ? JSON.parse(likedProductsString)
      : [];
    setIsClicked(likedProducts.includes(data.id));
  }, [data.id]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
    const likedProducts: string[] =
      JSON.parse(localStorage.getItem("likedProducts")!) || [];
    const updatedLikedProducts = isClicked
      ? likedProducts.filter((productId) => productId !== data.id)
      : [...likedProducts, data.id];

    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
  };

  if (!data) {
    return <div>Team member not found...</div>;
  }
  return (
    <>
      <div className="product-detail-card" id="saturation-content">
        <div className="image">
          <div className="left-inner">
            <img src={data.image} alt="product-image" />
          </div>
          <div className="right-inner">
            <img src={data.image_second} alt="product-image" />
            <img src={data.image_third} alt="product-image" />
            <img src={data.image} alt="product-image" />
          </div>
        </div>
        <div className="text-detail">
          <div className="inner-text">
            <h2 className={`${oversized ? "HeadlineXL " : "HeadlineL "}`}>
              {data.name}
            </h2>
            <p className={` ${oversized ? "xl-oversized-body" : "bodyL"}`}>
              {data.description}
            </p>
          </div>
          <div className="inner-price">
            <p className={`${oversized ? "HeadlineXL " : "HeadlineL "}`}>
              {data.price}
            </p>
            <div className="buy">
              <div
                className={`icon-heart${isClicked ? " clicked" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
              >
                <img
                  src={
                    isHovered || isClicked
                      ? "../images/e-shop/full-heart.png"
                      : "../images/e-shop/em_heart.png"
                  }
                  alt="icon-heart image"
                />
              </div>
              <button
                className={`buy-btn ${
                  contrast ? "cotrastOrangeBg " : "defaultOrangeBg"
                } ${oversized ? "button-oversized-L" : "buttonL"}`}
              >
                Купи
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailPage;
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("  http://localhost:5001/products");
  const data: ProductsProps[] = await res.json();

  const paths = data.map((product) => {
    return {
      params: {
        id: product.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let data: ProductsProps | null = null;

  if (params?.id) {
    const res = await fetch(`  http://localhost:5001/products/${params.id}`);
    data = await res.json();
  }

  return {
    props: {
      data,
    },
  };
};
