import { IconCopy, IconCheck } from "@tabler/icons-solidjs";
import { Show, createSignal } from "solid-js";

export const InstallButton = () => {
  const code = "npm install @thisbeyond/solid-dnd";
  const [copied, setCopied] = createSignal(false);
  const iconClass = "h-1.5em inline ml-1 align-bottom";
  return (
    <button
      class={
        "mx-auto lg:mx-0 bg-white text-gray-800 " +
        "font-bold rounded-lg my-6 py-4 px-8 shadow-lg " +
        "focus:outline-none focus:shadow-outline transform transition " +
        "hover:scale-105 duration-300 ease-in-out font-mono " +
        "active:scale-100 "
      }
      onClick={() => {
        navigator.clipboard.writeText(code);
        setCopied(true);
      }}
    >
      {code}
      <Show when={copied()} fallback={<IconCopy class={iconClass} />}>
        <IconCheck class={iconClass} />
      </Show>
    </button>
  );
};
