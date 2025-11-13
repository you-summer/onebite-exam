import "./App.css";
import { Button } from "@/components/ui/button";
import { cn } from "./lib/utils";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { toast, Toaster } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";
import { Dribbble } from "lucide-react";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
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

      {/* 5. 보더 */}
      <div className="m-5 border-x-2 border-y-2">border</div>
      <div className="m-5 border-t-2 border-r-2 border-b-4 border-l-5">
        border
      </div>
      <div className="m-5 border-2 border-amber-500">border color</div>
      <div className="m-5 rounded-md border-1">border radius</div>

      {/* 6. 플렉스 컨테이너 */}
      <div className="flex flex-row items-start justify-evenly">
        <div className="h-10 w-10 border">1</div>
        <div className="h-20 w-10 flex-1 border">2</div>
        <div className="h-30 w-10 border">3</div>
        <div className="h-40 w-10 border">4</div>
      </div>

      <Dribbble className="h-10 w-10 fill-red-500" />

      <AlertDialog>
        <AlertDialogTrigger>Open alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>내용</AlertDialogDescription>
          </AlertDialogHeader>
          <div>body</div>
          <div>
            <AlertDialogAction
              onClick={() => {
                console.log("ok");
              }}
            >
              ok
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={() => {
                console.log("cancle");
              }}
            >
              cancle
            </AlertDialogCancel>
          </div>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>Body</div>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button>open</Button>
        </PopoverTrigger>
        <PopoverContent>컨텐츠</PopoverContent>
      </Popover>

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem>4</CarouselItem>
          <CarouselItem>5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Toaster />

      <Textarea />

      <Input placeholder="입력..." />

      <Button
        onClick={() => {
          toast("허거덩", {
            position: "top-center",
          });
        }}
      >
        버튼!
      </Button>
      <Button variant={"destructive"}>버튼!</Button>
      <Button variant={"ghost"}>버튼!</Button>
      <Button variant={"link"}>버튼!</Button>
      <Button variant={"outline"}>버튼!</Button>
      <Button variant={"secondary"}>버튼!</Button>
      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
      <div className="text-primary">primary</div>
      <div className="text-muted">muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

// export default App;
