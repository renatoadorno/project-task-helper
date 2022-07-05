import { Check } from "phosphor-react";

export function FinishTasks() {
  return (
    <div className="rounded border border-gray-500 p-4 mt-2">
      <span className="pr-3 flex gap-2.5">
        <Check size={25} color="#C4C4CC" weight="bold" />

        <strong className="text-gray-200">
          Tarefas Finalizadas
        </strong>
      </span>
    </div>
  )
}
