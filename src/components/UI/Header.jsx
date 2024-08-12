import { MENU_LIST } from "../../data/menu_list";

export const Header = () => {
  return (
    <header className="h-[80px] bg-slate-300 w-full border-white border text-black">
        {MENU_LIST.map((item)=> (
            <a href={item.href}>{item.text}</a>
        )) }
             {/* <a href="/">Home</a>
             <a href="/about">About</a>
             <a href="/projects">Project</a> */}
    </header>
  );
};
