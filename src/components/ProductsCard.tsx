import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProductsProps } from "@/interface";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductsCard: React.FC<Partial<ProductsProps>> = ({
  id = "",
  image,
  name,
  price,
  material,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { contrast, oversized } = useAccessibility();

  useEffect(() => {
    const likedProductsString = localStorage.getItem("likedProducts");
    const likedProducts: string[] = likedProductsString
      ? JSON.parse(likedProductsString)
      : [];
    setIsClicked(likedProducts.includes(id));
  }, [id]);

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
      ? likedProducts.filter((productId) => productId !== id)
      : [...likedProducts, id];

    localStorage.setItem("likedProducts", JSON.stringify(updatedLikedProducts));
  };

  return (
    <>
      <div className="product-card">
        <Link href={`/shop/${id}`}>
          <img
            src={image}
            alt="product image"
            className={` ${contrast ? "contrast-img " : ""}`}
          />
          <div className="text-inner">
            <h3 className={`${oversized ? "l-oversized " : "HeadlineS "}`}>
              {name}
            </h3>
            <p className={` ${oversized ? "xl-oversized-body" : "bodyL"}`}>
              {material}
            </p>
            <span className={`${oversized ? "l-oversized " : "HeadlineM "}`}>
              {price}
            </span>
          </div>
        </Link>
        <div className="buy">
          <button
            className={`buy-btn ${
              contrast ? "cotrastOrangeBg " : "defaultOrangeBg"
            } ${oversized ? "button-oversized-L" : "buttonL"}`}
          >
            Купи
          </button>
          <div
            className={`icon-heart${isClicked ? " clicked" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
          >
            <img
              src={
                isHovered || isClicked
                  ? "./images/e-shop/full-heart.png"
                  : "./images/e-shop/em_heart.png"
              }
              alt="icon image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
