import Gallery from "@/components/Gallery";
import ProductsCard from "@/components/ProductsCard";
import { useAccessibility } from "@/contex/AccessibilityContext";
import { ProductsProps } from "@/interface";
import { GetStaticProps, NextPage } from "next";
import { useState } from "react";

interface Props {
  dataProducts: ProductsProps[];
}
const Shop: NextPage<Props> = ({ dataProducts }) => {
  const { oversized, contrast } = useAccessibility();
  const [displayedProducts, setDisplayedProducts] = useState(6);
  const totalProducts = dataProducts.length;

  const showMoreProducts = () => {
    setDisplayedProducts(displayedProducts + 6);
  };

  return (
    <div className="e-shop-page" id="saturation-content">
      <h1
        className={`title-eShop ${oversized ? "xl-oversized" : "HeadlineXl"}`}
      >
        E-shop КРИК на младите
      </h1>
      <div className="gallery">
        <Gallery />
      </div>
      <div className="products-container">
        <h1 className={` ${oversized ? "xl-oversized" : "HeadlineXl"}`}>
          Рачно изработен накит
        </h1>
        <div className="products-inner">
          {dataProducts.slice(0, displayedProducts).map((product) => {
            return <ProductsCard key={product.id} {...product} />;
          })}
        </div>

        {displayedProducts < totalProducts && (
          <div className="more-products">
            <button
              className={`more-products-btn  ${
                oversized ? "button-oversized-L" : "buttonL"
              }`}
              onClick={showMoreProducts}
            >
              Види Повеќе Продукти
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Shop;

export const getStaticProps: GetStaticProps = async () => {
  const resProducts = await fetch(" http://localhost:5001/products");
  const dataProducts: ProductsProps[] = await resProducts.json();

  return {
    props: {
      dataProducts,
    },
  };
};
