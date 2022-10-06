import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Loader } from "./Loader";

export const View = ({ children }) => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const onOpenSidebar = () => {
    setSidebarIsOpen(true);
  };

  const onCloseSidebar = () => {
    setSidebarIsOpen(false);
  };

  return (
    <div>
      <Loader />
      <Sidebar isOpen={sidebarIsOpen} onCloseSidebar={onCloseSidebar} />
      <Header onOpenSidebar={onOpenSidebar} />
      <main className="p-4">{children}</main>
    </div>
  );
};
