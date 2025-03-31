import "./style.css";

interface Props {
  id: string; // destination of skip link
  isTag?: boolean;
  variant?: "primary" | "secondary";
  name: string; // where is the user going for this skiplink
  visibleOnFocusOnly?: boolean;
}

export default function SkipLink({
  id,
  isTag = false,
  name,
  visibleOnFocusOnly = false,
  variant = "primary"
}: Props) {
  /**
   * responsible for shifting the focus about
   * @param id
   * @returns focus applied to desired dom element
   */
  function handleFocus(id: string, isTag: boolean) {
    if (!id) return;

    const element = isTag
      ? (document.querySelector(id) as HTMLElement)
      : document.getElementById(id);

    element?.focus();
  }

  return (
    <button
      class={`skiplink ${visibleOnFocusOnly ? "skiplink--visible-on-focus" : "skiplink--visible"} btn btn--${variant}`}
      onClick={() => handleFocus(id ?? "main", isTag)}
    >
      Skip to {name ?? "main content"}
    </button>
  );
}
