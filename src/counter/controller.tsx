import { Button } from "@/components/ui/button";
import {
  useDecreaseCount,
  useIncreaseCount,
  useResetCount,
} from "@/store/count";

export default function Controller() {
  //   const increase = useCountStore((store) => store.increase);
  //   const decrease = useCountStore((store) => store.decrease);
  //   const reset = useCountStore((store) => store.reset);
  // 셀렉터 함수

  //   const { increase, decrease, reset } = useCountStore((store) => store.actions);

  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();
  const reset = useResetCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={reset}>0</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
