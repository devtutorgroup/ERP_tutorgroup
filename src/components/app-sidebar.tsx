import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  ChevronDown,
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
    title: "Home",
    url: "#",
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
    title: "Inbox",
    url: "#",
    icon: Inbox,
    items: [
      {
        title: "All Messages",
        url: "#",
      },
      {
        title: "Unread",
        url: "#",
      },
      {
        title: "Starred",
        url: "#",
      },
      {
        title: "Sent",
        url: "#",
      },
    ],
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
    items: [
      {
        title: "Today",
        url: "#",
      },
      {
        title: "This Week",
        url: "#",
      },
      {
        title: "This Month",
        url: "#",
      },
      {
        title: "Events",
        url: "#",
      },
    ],
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
    items: [
      {
        title: "Quick Search",
        url: "#",
      },
      {
        title: "Advanced Search",
        url: "#",
      },
      {
        title: "Search History",
        url: "#",
      },
    ],
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
    items: [
      {
        title: "Profile",
        url: "#",
      },
      {
        title: "Preferences",
        url: "#",
      },
      {
        title: "Security",
        url: "#",
      },
      {
        title: "Notifications",
        url: "#",
      },
    ],
  },
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
                        <span>{item.title}</span>
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
