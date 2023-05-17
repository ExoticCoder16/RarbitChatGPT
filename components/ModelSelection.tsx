"use client";
import useSWR from "swr";
import Select from "react-select";

const fetchModels = () => fetch("/api/getEngines").then((res) => res.json());
console.log(fetchModels);

export default function ModelSelection() {
  // you can use any name as the key
  // const { data: models,isLoading,error} = useSWR("/api/getEngines", fetchModels);
  const { data: models, isLoading } = useSWR("models", fetchModels);
  console.log(`${JSON.stringify(models)}`);
  // use it as useState
  const { data: model, mutate: setModel } = useSWR("model", {
    fallbackData: "gpt-3.5-turbo",
  });

  return (
    <div>
      <Select
        className="mt-2"
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        isSearchable
        isLoading={isLoading}
        menuPosition="fixed"
        classNames={{
          control: (state) => "bg-[#434654] border-[#434654]",
        }}
        onChange={(e) => setModel(e.value)}
      />
    </div>
  );
}
