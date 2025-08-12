import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
  NotebookPen,
  FileUser,
  AlarmClock,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Menu items with sub-items
const items = [
  {
    title: "หน้าหลัก",
    url: "",
    icon: Home,
    items: [
      {
        title: "Dashboard",
        url: "#",
      },
      {
        title: "Overview",
        url: "#",
      },
      {
        title: "Analytics",
        url: "#",
      },
    ],
  },
  {
    title: "ฐานข้อมูล",
    url: "#",
    icon: NotebookPen,
    items: [
      {
        title: "ไฟล์หนังสือ",
        url: "#a",
      },
      {
        title: "หนังสือเรียน",
        url: "#",
      },
      {
        title: "นักเรียน",
        url: "#",
      },
      {
        title: "โรงเรียน",
        url: "#",
      },
      {
        title: "คอร์สเรียน",
        url: "#",
      },
    ],
  },
  {
    title: "รายการรับสมัคร",
    url: "#",
    icon: FileUser,
    items: [
      {
        title: "Zigma",
        url: "#",
      },
      {
        title: "omega",
        url: "#",
      },
    ],
  },
  {
    title: "ระเบียบการห้องสด",
    url: "#",
    icon: Calendar,
    items: [
      {
        title: "สาขาเมกาบางนา",
        url: "#",
      },
      {
        title: "สุขาภิบาล3",
        url: "#",
      },
    ],
  },
  {
    title: "weekly room",
    url: "#",
    icon: AlarmClock,
    items: [
      {
        title: "สาขาเมกาบางนา",
        url: "#",
      },
      {
        title: "สุขาภิบาล3",
        url: "#",
      },
    ],
  },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  //   items: [
  //     {
  //       title: "Profile",
  //       url: "#",
  //     },
  //     {
  //       title: "Preferences",
  //       url: "#",
  //     },
  //     {
  //       title: "Security",
  //       url: "#",
  //     },
  //     {
  //       title: "Notifications",
  //       url: "#",
  //     },
  //   ],
  // },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex flex-row justify-between pb-4">
            <SidebarGroupLabel className="text-3xl text-blue-700">
              Application
            </SidebarGroupLabel>
            <SidebarTrigger className="" />
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <Collapsible
                  key={item.title}
                  defaultOpen={false}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <item.icon className="!w-6 !h-6" />
                        <span className="text-blue-700">{item.title}</span>
                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <a href={subItem.url}>{subItem.title}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
