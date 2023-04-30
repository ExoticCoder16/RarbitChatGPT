import NewChat from "./NewChat";

export default function SideBar() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <div><NewChat/></div>
        <div>model selection</div>
        <div>map through the chat rows</div>
      </div>
    </div>
  );
}
