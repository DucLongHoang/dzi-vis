"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Anchor } from "@/components/ui/anchor";
import type { LinkItem } from "@/lib/types";

type Props = {
  linkItems: LinkItem[];
};

export default function NavMenu({ linkItems }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex w-full justify-between gap-6">
        {linkItems.map(({ href, title, isCta, children }) =>
          children ? (
            <NavigationMenuItem key={title}>
              <NavigationMenuTrigger className="bg-transparent p-0 text-lg font-medium">
                {title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {children.map(({ href, title, description }) => (
                    <ListItem key={title} href={href} title={title}>
                      {description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : isCta ? (
            <NavigationMenuItem key={title}>
              <NavigationMenuLink asChild>
                <Anchor
                  href={href}
                  variant={"default"}
                  size={"lg"}
                  className="text-lg font-bold"
                >
                  {title}
                </Anchor>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={title}>
              <NavigationMenuLink asChild>
                <a href={href} className="text-lg font-medium">
                  {title}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
    </NavigationMenu>
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
            "block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-lg font-medium">{title}</div>
          <p className="line-clamp-2 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
