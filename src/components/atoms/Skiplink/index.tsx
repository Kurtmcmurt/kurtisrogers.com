import Button from "@/components/atoms/Button";
import "./style.css";

interface Props {
  id: string; // destination of skip link
  isTag?: boolean;
  name: string; // where is the user going for this skiplink
  classes?: string[];
}

export default function SkipLink({ id, isTag = false, name, classes }: Props) {
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
    <Button classes={classes} callback={() => handleFocus(id ?? "main", isTag)}>
      Skip to {name ?? "main content"}
    </Button>
  );
}
