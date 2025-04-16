import { useMemo, useState } from "react";
import "@/styles/pages/ProductLst.scss";
import { useFilterStore } from "@/store/filterStore";
import { getProducts } from "@/db/data";
import { Product } from "@/types/product";
import Modal from "@/components/Modal";
import IconDiscover from "@/assets/payment/discover.svg?react";
import IconVisa from "@/assets/payment/visa.svg?react";
import IconMasterCard from "@/assets/payment/mastercard.svg?react";
import IconAmericanExpress from "@/assets/payment/americamexpress.svg?react";
import { useCartStore } from "@/store/cartStore";
import EmptyProduct from "@/pages/Products/EmptyProduct";
import ProductItem from "@/pages/Products/ProductItem";

export const UseProduct = (id: string) => {
  const saved = localStorage.getItem("products-data");
  if (!saved) return null;
  const products: Product[] = JSON.parse(saved) as Product[];

  return products.find((p) => p.id === id) || null;
};

const ProductList = () => {
  const {
    selectedCategory,
    maxPrice,
    minPrice,
    searchQuery,
    selectedBrand,
  } = useFilterStore();

  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null
  );
  const products: Product[] = useMemo(() => getProducts(), []);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesPrice =
        product.price >= minPrice && product.price <= maxPrice;

      const matchesBrand =
        selectedBrand === "All Products" || product.company === selectedBrand;
      return matchesBrand && matchesCategory && matchesSearch && matchesPrice;
    });
  }, [
    products,
    selectedCategory,
    searchQuery,
    minPrice,
    maxPrice,
    selectedBrand,
  ]);

  const productData = useMemo(() => {
    return selectedProductId ? UseProduct(selectedProductId) : null;
  }, [selectedProductId]);

  const openModal = (id: string) => {
    setSelectedProductId(id);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProductId(null);
    setModalOpen(false);
  };

  const [amount, setAmount] = useState<number>(1);
  const { updateCart } = useCartStore();

  const IncrementAmount = () => {
    setAmount((prev) => (prev === 1 ? 1 : prev - 1));
  };

  return (
    <>
      <section className="products-lst-container">
        <h1 className="products-lst-subtitle">all products</h1>
        <div className="product-list">
          {filteredProducts.length ? (
            filteredProducts.map((product, idx) => {
              return (
                <ProductItem
                  product={product}
                  key={idx}
                  openModal={() => openModal(product.id)}
                />
              );
            })
          ) : (
            <EmptyProduct />
          )}
        </div>
        {isModalOpen && productData && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => {
              closeModal();
              setAmount(1);
            }}
          >
            <div className="product-quick-view">
              <div className="product-img columns">
                <img src={productData.img} alt="img-product" />
              </div>
              <div className="product-details columns">
                <div className="details-container">
                  <p className="category">
                    {productData.category}, {productData.company}
                  </p>
                  <h2 className="title">{productData.title}</h2>

                  {/* Price */}
                  <p className="price">
                    <span className="discounted-price">
                      ${productData.price}
                    </span>
                    <bdi>
                      <span className="original-price">
                        ${productData.oldPrice}
                      </span>
                    </bdi>
                    & Free Shipping
                  </p>

                  {/* Description */}
                  <p className="description">{productData.description}</p>
                  <p className="product-company">
                    Categories:
                    <span>
                      {productData.category}, {productData.company}
                    </span>
                  </p>
                  {/* Div for payment */}
                  <fieldset className="ast-single-product-payments ast-inherit-color-version">
                    <legend>Guaranteed Safe Checkout</legend>
                    <div className="group-payment">
                      <IconDiscover />
                      <IconVisa />
                      <IconMasterCard />
                      <IconAmericanExpress />
                    </div>
                  </fieldset>
                </div>
                {/* Button group add to cart */}
                <div className="cart-actions">
                  <div>
                    <button onClick={() => IncrementAmount()}>-</button>
                    <input
                      type="number"
                      className="quality-add-to-cart"
                      value={amount}
                      onChange={(e) => setAmount(+e.target.value)}
                    />
                    <button
                      onClick={() => {
                        setAmount((prev) => prev + 1);
                      }}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="add-to-cart"
                    onClick={() => updateCart(productData, amount)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </section>
    </>
  );
};

export default ProductList;
