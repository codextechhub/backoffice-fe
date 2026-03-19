import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { AppSidebar } from "../app-sidebar";
import { svgIcons } from "@/assets/svg";
import { LogoutIcon } from "@/assets/navbar-svg";
import { ChevronDown, ChevronLeft, User2 } from "lucide-react";
import {
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenu,
} from "../ui/dropdown-menu";
import { useNavigate } from "react-router";

export default function DashboardLayout({
  children,
  hasBack = false,
  onBack,
  title,
}: {
  children: React.ReactNode;
  hasBack?: boolean;
  title?: string;
  onBack?: () => void;
}) {
  const navigate = useNavigate();
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="bg-white-05">
          <header className="flex justify-between h-15 px-3 lg:px-10 shrink-0 sticky top-0 z-10 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-white border border-l-0 border-white-02">
            <div className="inline-flex items-center gap-2">
              {hasBack && (
                <>
                  <figure
                    onClick={() => {
                      onBack ? onBack() : navigate(-1);
                    }}
                    className="uppercase font-light text-gray-01 text-sm inline-flex items-center cursor-pointer"
                  >
                    <ChevronLeft className="text-inherit size-5 mr-1" />
                    Back
                  </figure>
                  <Separator
                    orientation="vertical"
                    className="rotate-10 w-[1.2px] bg-black-01 data-[orientation=vertical]:h-7"
                  />
                </>
              )}

              <h6 className="text-base uppercase font-semibold text-black-01">
                {title || "Welcome back!!"}
              </h6>
            </div>
            <div className="gap-x-3 inline-flex items-center">
              <button
                type="button"
                className="size-8.5 rounded-full relative bg-gray-04 grid place-content-center"
              >
                {svgIcons.notificationBell}
              </button>

              <Separator
                orientation="vertical"
                className=" data-[orientation=vertical]:h-7"
              />

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <figure className="inline-flex items-center gap-x-3 pl-2.5 py-1 ">
                    <Avatar>
                      <AvatarImage src={"/image/avatar2.png"} />
                      <AvatarFallback>OE</AvatarFallback>
                    </Avatar>

                    <ChevronDown className="size-5 text-gray-01" />
                  </figure>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="min-w-58 "
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="size-8 rounded-lg">
                        <AvatarImage src={"/image/avatar2.png"} />
                        <AvatarFallback>OE</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                          Osegbo Emeka
                        </span>
                        <span className="text-muted-foreground truncate text-xs">
                          alphaoseghe@gmail.com
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-gray-07" onClick={() => {}}>
                    <User2 className=" text-inherit" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-destructive hover:bg-destructive/5! hover:text-destructive!"
                    onClick={() => {}}
                  >
                    <LogoutIcon className="text-destructive" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="flex flex-1 flex-col pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
