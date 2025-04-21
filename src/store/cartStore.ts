import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { CartState } from "@/types/cart";

export const useCartStore = create<CartState>(
  devtools(
    persist<CartState>(
      (set, get) => ({
        lst: [],
        total: 0,
        isLoading: false,
        updateCart: (newProd, amount) => {
          const product = {
            img: newProd.img,
            title: newProd.title,
            oldPrice: newProd.oldPrice,
            price: newProd.price,
            id: newProd.id,
            quantityAddToCart: amount,
          };

          const { lst } = get();
          const cloneLstCart = [...lst];

          const existingItemIdx = lst.findIndex(
            (item) => item.id === product.id
          );

          if (existingItemIdx > -1) {
            cloneLstCart[existingItemIdx].quantityAddToCart =
              cloneLstCart[existingItemIdx].quantityAddToCart + (amount ?? 1);
          } else {
            cloneLstCart.push(product);
          }

          const totalAds = cloneLstCart.reduce(
            (total, item) => total + item.quantityAddToCart,
            0
          );

          set((state) => {
            return { ...state, lst: [...cloneLstCart], total: totalAds };
          });
        },
        isQuickViewCart: false,
        openQuickViewCart: () => {
          document.body.classList.toggle("modal_cart-quick-view-active");

          set((state) => {
            return { ...state, isQuickViewCart: !state.isQuickViewCart };
          });
        },
        updateAmountCart: (id, action) => {
          const { lst } = get();
          let _tmpCart = [...lst];
          const findID = _tmpCart.findIndex((v) => v.id === id);
          if (findID > -1) {
            if (
              _tmpCart[findID]?.quantityAddToCart === 1 &&
              action === "decrease"
            ) {
              _tmpCart = [
                ..._tmpCart.slice(0, findID),
                ..._tmpCart.slice(findID + 1),
              ];
            } else {
              _tmpCart[findID].quantityAddToCart =
                action === "increase"
                  ? _tmpCart[findID].quantityAddToCart + 1
                  : _tmpCart[findID].quantityAddToCart - 1;
            }

            const totalAds = _tmpCart.reduce(
              (total, item) => total + item.quantityAddToCart,
              0
            );

            set((state) => {
              return { ...state, lst: [..._tmpCart], total: totalAds };
            });
          }
        },
        removeItem: (id) => {
          const { lst } = get();
          let _tmpCart = [...lst];
          const removeIdx = _tmpCart.findIndex((v) => v.id === id);
          if (removeIdx > -1) {
            _tmpCart = [
              ..._tmpCart.slice(0, removeIdx),
              ..._tmpCart.slice(removeIdx + 1),
            ];

            const totalAds = _tmpCart.reduce(
              (total, item) => total + item.quantityAddToCart,
              0
            );

            set((state) => {
              return { ...state, lst: [..._tmpCart], total: totalAds };
            });
          } else {
            console.log("Item not found in cart. Cannot remove.");
          }
        },
        updateAmountById: (id, quality) => {
          const { lst } = get();
          const _tmpCart = [...lst];
          const findID = _tmpCart.findIndex((v) => v.id === id);
          if (findID > -1) {
            _tmpCart[findID].quantityAddToCart = quality;
          }
          const totalAds = _tmpCart.reduce(
            (total, item) => total + item.quantityAddToCart,
            0
          );

          set((state) => {
            return { ...state, lst: [..._tmpCart], total: totalAds };
          });
        },
      }),
      {
        name: "cart-storage",
      }
    )
  )
);
