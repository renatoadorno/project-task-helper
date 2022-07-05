import { ArrowRight, DotsThreeVertical } from "phosphor-react";

export const ListTask = () => {
  // const [isChecked, setIsChecked] = useState(item.done)
  // btn executa atualização, alterando para inProgress
  return (
    <div className="bg-gray-600 pr-3 flex items-center gap-2.5 rounded border border-gray-500 p-4">
      <a href="" className="rounded-full p-2 m-2 bg-green-500 hover:bg-green-700 transition-colors">
        <ArrowRight  size={20} color="#ffffff" weight="bold" />
      </a>

      <div className="w-full flex items-center justify-between">
        <p className="font-medium text-lg">
          Tarefa Recebida
        </p>
        <a href="" className="rounded-full p-2 m-2">
          <DotsThreeVertical  size={20} color="#ffffff" weight="bold" />
        </a>
      </div>

    </div>
  );
}
