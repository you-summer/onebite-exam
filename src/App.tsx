import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포 그래피 -텍스트의 스타일을 설정하는 클래스-*/}
      <div className="text-xs text-red-500">text-xs</div>
      {/* 원색을 원할경우는 500정도 사용함 */}
      <div className="text-sm text-[rgb(100,30,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[13px]">text-13px</div>

      {/* 2. 백그라운드컬러 */}
      <div className="bg-amber-500">amber-500</div>

      {/* 3. 사이즈 */}
      <div className="w-20 bg-blue-500">box</div>
      <div className="w-[20px] bg-blue-500">box</div>
      <div className="w-full bg-blue-500">box</div>
      {/* width를 100으로 설정하고싶다 -> full */}
      <div className="h-20 w-full bg-blue-500">box</div>

      {/* 4. 여백 */}
      {/* <div className="h-50 w-50 bg-red-400 pt-5 pr-5 pb-5 pl-5">
       */}
      <div className="h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>

      <div className="mx-5 my-5 h-50 w-50 bg-red-400 px-5 py-5">
        <div className="h-full w-full bg-blue-400"></div>
      </div>
    </div>
  );
}

export default App;
