import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cubeCollection } from "@/lib/const/cubeCollection";
import { useTimerStore } from "@/store/timerStore";
import Image from "next/image";

export default function MainCubeSelector() {
  const { cubes, setSelectedCube, setNewScramble, setLastSolve } =
    useTimerStore();
  const handleChangeValue = (e: any) => {
    const choseCube = cubes?.find((cube) => cube.id === e);
    if (!choseCube) return;
    setSelectedCube(choseCube);
    setNewScramble(choseCube);
    setLastSolve(null);
  };
  return (
    <>
      <Select onValueChange={handleChangeValue}>
        <SelectTrigger className="max-w-96">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {cubes
            ?.sort((a: any, b: any) => a.category.localeCompare(b.category))
            .map((cube) => {
              return (
                <SelectItem key={cube.id} value={cube.id}>
                  <div className="flex flex-row items-center justify-between gap-2">
                    {(() => {
                      const foundCube = cubeCollection.find(
                        (i) => i.name === cube.category
                      );
                      if (foundCube) {
                        return (
                          <Image
                            src={foundCube.src}
                            alt={foundCube.name}
                            width={24}
                            height={24}
                            className="object-scale-down"
                          />
                        );
                      }
                      return null;
                    })()}

                    <p className="">{cube.name}</p>
                  </div>
                </SelectItem>
              );
            })}
        </SelectContent>
      </Select>
    </>
  );
}
