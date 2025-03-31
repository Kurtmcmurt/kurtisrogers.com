import Icon from "@/components/atoms/Icon";
import "./style.css";

// icon data (dumb component)
import { linkedin } from "@/data/icons";

export default function Socials() {
  return (
    <nav class="socials">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/roguetrufflepig/" target="_blank">
            <Icon width={50} height={50} viewbox="0 0 24 24" icondata={linkedin} />
            <span class="sr-only">A link to my LinkedIn profile (opens a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
