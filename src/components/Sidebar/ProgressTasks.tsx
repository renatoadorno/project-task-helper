import { ArrowClockwise } from "phosphor-react";

export function ProgressTasks() {
  return (
    <div className="rounded border border-gray-500 p-4 mt-2">
      <span className="pr-3 flex gap-2.5">
        <ArrowClockwise size={25} color="#C4C4CC" weight="bold" />

        <strong className="text-gray-200">
          Tarefas em Progresso
        </strong>
      </span>
    </div>
  )
}
