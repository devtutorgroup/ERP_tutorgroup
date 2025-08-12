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
import Link from "next/link";

// Menu items with sub-items
const items = [
  {
    title: "หน้าหลัก",
    url: "/",
    icon: Home,
    // items: [
    //   {
    //     title: "Dashboard",
    //     url: "/Dashboard",
    //   },
    //   {
    //     title: "Overview",
    //     url: "/overview",
    //   },
    //   {
    //     title: "Analytics",
    //     url: "/analytics",
    //   },
    // ],
  },
  {
    title: "ฐานข้อมูล",
    url: "/data",
    icon: NotebookPen,
    items: [
      {
        title: "ไฟล์หนังสือ",
        url: "/data/files",
      },
      {
        title: "หนังสือเรียน",
        url: "/data/textbooks",
      },
      {
        title: "นักเรียน",
        url: "/data/students",
      },
      {
        title: "โรงเรียน",
        url: "/data/schools",
      },
      {
        title: "คอร์สเรียน",
        url: "/data/courses",
      },
    ],
  },
  {
    title: "รายการรับสมัคร",
    url: "/admissions",
    icon: FileUser,
    items: [
      {
        title: "Zigma",
        url: "/admissions/zigma",
      },
      {
        title: "omega",
        url: "/admissions/omega",
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
        url: "/calendar/mega-bangna",
      },
      {
        title: "สุขาภิบาล3",
        url: "/calendar/sukhumvit-3",
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
        url: "/weekly-room/mega-bangna",
      },
      {
        title: "สุขาภิบาล3",
        url: "/weekly-room/sukhumvit-3",
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
                  {item.items ? (
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton>
                          <item.icon className="!w-6 !h-6" />
                          {/* <Link href={item.url} className="text-blue-700">
                          {item.title}
                        </Link> */}
                          <span className="ml-2 text-blue-700">
                            {item.title}
                          </span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <Link href={subItem.url}>{subItem.title}</Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  ) : (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon className="!w-6 !h-6" />
                          <span className="ml-2 text-blue-700">
                            {item.title}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )}
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
