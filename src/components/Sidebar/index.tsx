import { NewTasks } from "./NewTasks";
import { ProgressTasks } from "./ProgressTasks";
import { FinishTasks } from "./FinishTasks";
import { Link } from 'react-router-dom'


export function Sidebar() {
  return (
    <aside className="w-[348px] bg-gray-700 pt-12 p-6 border-l border-gray-600">
      <h1 className="font-bold text-2xl pb-3 mb-6 border-b border-gray-600">
        Renato Adorno
      </h1>

      <div className="flex flex-col gap-8">
        <Link to={'/home/newtasks'}>
          <NewTasks />
        </Link>
        <Link to={'/home/inprogress'}>
          <ProgressTasks />
        </Link>
        <Link to={'/home/completed'}>
          <FinishTasks />
        </Link>
      </div>
    </aside>
  )
}
