import { RocketIcon } from "@radix-ui/react-icons";

import { Dock, DockIcon, DockItem, DockLabel } from "@/lib/motion-primitives/components/Dock";

const data = [
  {
    title: "Home",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Products",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Activity",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Change Log",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Email",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Theme",
    icon: (
      <RocketIcon className="h-full w-full text-neutral-600 " />
    ),
    href: "#",
  },
];

export function AppleStyleDock() {
  return (
    <div className="fixed bottom-2 max-w-full">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
