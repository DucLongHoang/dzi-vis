import { Drawer } from "vaul";
import {
  MenuIcon,
  PhoneIcon,
  MailIcon,
  XIcon,
  MapPinIcon,
  ChevronDownIcon,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React from "react";
import APP_CONFIG from "@/config/config";
import type { LinkItem } from "@/lib/types";
import { Anchor } from "./ui/anchor";
import LocaleSelect from "./LocaleSelect";
import { getSwitcherData } from "i18n:astro";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

type Props = {
  linkItems: LinkItem[];
};

export default function NavDrawer({ linkItems }: Props) {
  return (
    <Drawer.Root direction="right">
      <Drawer.Trigger asChild>
        <MenuIcon aria-hidden className="size-8" />
      </Drawer.Trigger>

      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-10 bg-black/40" />

        <Drawer.Content className="fixed bottom-0 right-0 top-0 z-10 flex h-full min-w-[280px] flex-col gap-y-6 bg-background py-4 transition-all">
          <div className="flex items-center justify-between px-8">
            <LocaleSelect locales={getSwitcherData()} />
            <Drawer.Close asChild>
              <XIcon className="size-8" />
            </Drawer.Close>
          </div>

          <ScrollArea className="grid size-full overflow-y-auto">
            <div className="grid size-full place-content-stretch justify-center">
              <NavigationMenu orientation="vertical" className="items-start">
                <NavigationMenuList className="flex w-full flex-col items-center gap-4">
                  {linkItems.map(({ href, title, isCta, children }) =>
                    children ? (
                      <Collapsible
                        key={title}
                        className="flex flex-col items-center gap-y-3"
                      >
                        <CollapsibleTrigger className="group relative w-fit text-xl font-medium">
                          {title}
                          <ChevronDownIcon
                            className="absolute right-0 top-0 size-4 translate-x-full translate-y-1/2 transition duration-200 group-data-[state=open]:rotate-180"
                            aria-hidden="true"
                          />
                        </CollapsibleTrigger>
                        <CollapsibleContent asChild>
                          <ul className="grid list-none gap-y-3">
                            {children.map(({ href, title, description }) => (
                              <ListItem key={title} href={href} title={title}>
                                {description}
                              </ListItem>
                            ))}
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    ) : isCta ? (
                      <NavigationMenuItem key={title}>
                        <NavigationMenuLink asChild>
                          <Anchor
                            href={href}
                            variant={"default"}
                            className="text-xl font-medium"
                          >
                            {title}
                          </Anchor>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ) : (
                      <NavigationMenuItem key={title}>
                        <NavigationMenuLink asChild>
                          <a href={href} className="text-xl font-medium">
                            {title}
                          </a>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ),
                  )}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </ScrollArea>

          <div className="flex flex-col justify-center gap-y-4">
            <div className="flex flex-row place-content-center gap-x-2">
              <PhoneIcon aria-hidden className="size-6" />
              <a href={`tel:${APP_CONFIG.CLIENT.PHONE}`}>
                {APP_CONFIG.CLIENT.PHONE_FORMATTED}
              </a>
            </div>
            <div className="flex flex-row place-content-center gap-x-2">
              <MailIcon aria-hidden className="size-6" />
              <a href={`mailto:${APP_CONFIG.CLIENT.EMAIL}`}>
                {APP_CONFIG.CLIENT.EMAIL}
              </a>
            </div>
            <div className="flex flex-row place-content-center gap-x-2">
              <MapPinIcon aria-hidden className="size-6" />
              <address>
                <a href={APP_CONFIG.CLIENT.GOOGLE_MAPS} target="_blank">
                  {APP_CONFIG.CLIENT.ADDRESS}
                </a>
              </address>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "select-none leading-none no-underline transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-center text-lg font-medium">{title}</div>
          <p className="line-clamp-2 text-center leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
