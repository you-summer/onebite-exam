import { create } from "zustand";
import {
  combine,
  subscribeWithSelector,
  persist,
  createJSONStorage,
  devtools,
} from "zustand/middleware";
// 우리말로 결합하다
import { immer } from "zustand/middleware/immer";

// type Store = {
//   count: number;
//   actions: {
//     increase: () => void;
//     decrease: () => void;
//     reset: () => void;
//   };
// };

export const useCountStore = create(
  devtools(
    persist(
      subscribeWithSelector(
        immer(
          combine({ count: 0 }, (set, get) => ({
            actions: {
              increase: () => {
                // set((state) => ({
                //   count: state.count + 1,
                // }));
                set((state) => {
                  state.count += 1;
                });
              },
              decrease: () => {
                // set((state) => ({
                //   count: state.count - 1,
                // }));
                set((state) => {
                  state.count += -1;
                });
              },
              reset: () => {
                set({ count: 0 });
              },
            },
          })),
        ),
      ),

      {
        name: "countStore",
        partialize: (store) => ({
          count: store.count,
        }),
        storage: createJSONStorage(() => sessionStorage),
        // 세션스토리지에 저장하는 방법
      },
    ),
    {
      name: "countStore",
    },
  ),
);

useCountStore.subscribe(
  (store) => store.count,
  (count, prevCount) => {
    // Listner
    console.log(count, prevCount);

    const store = useCountStore.getState();
    // useCountStore.setState((store) => ({ count: 10 }));
  },
);

// export const useCountStore = create<Store>((set, get) => ({
//   count: 0,
//   actions: {
//     increase: () => {
//       set((store) => ({
//         count: store.count + 1,
//       }));
//     },
//     decrease: () => {
//       set((store) => ({
//         count: store.count - 1,
//       }));
//     },
//     reset: () => {
//       set({ count: 0 });
//     },
//   },
// }));

export const useCount = () => {
  const count = useCountStore((store) => store.count);
  return count;
};

export const useIncreaseCount = () => {
  const increase = useCountStore((store) => store.actions.increase);
  return increase;
};

export const useDecreaseCount = () => {
  const decrease = useCountStore((store) => store.actions.decrease);
  return decrease;
};

export const useResetCount = () => {
  const reset = useCountStore((store) => store.actions.reset);
  return reset;
};
