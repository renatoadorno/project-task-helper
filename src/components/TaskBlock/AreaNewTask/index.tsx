import { AddArea } from "./AddArea"
import { ListTask } from "./ListTask"

export function AreaNewTask() {
  return (
    <div className="flex-1 items-center justify-center pl-20 pr-20 p-10 ">
      <AddArea />
      <ListTask />
    </div>
  )
}
