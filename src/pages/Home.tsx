import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { AreaNewTask } from "../components/TaskBlock/AreaNewTask";
import { AreaProgress } from "../components/TaskBlock/AreaProgress";
import { AreaFinish } from "../components/TaskBlock/AreaFinish";
import { useParams } from 'react-router-dom';

// type StatusType = 'newTasks' | 'inProgress' | 'completed';

export function Home() {
  const { status } = useParams<{ status: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Sidebar />
        { !status || status === 'newtasks' && <AreaNewTask /> }
        { status === 'inprogress' && <AreaProgress /> }
        { status === 'completed' && <AreaFinish /> }
      </main>
    </div>
  )
}
