import Icon from "@/components/atoms/Icon";
import "./style.css";
import icons from "@/data/icons";

export default function Socials() {
  return (
    <nav class="socials">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/kurtisrogers/" target="_blank">
            <Icon width={50} height={50} viewbox="0 0 24 24" icondata={icons.linkedin} />
            <span class="sr-only">A link to my LinkedIn profile (opens a new tab)</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/Kurtmcmurt/kurtisrogers.com/tree/develop" target="_blank">
            <Icon width={50} height={50} viewbox="0 0 24 24" icondata={icons.github} />
            <span class="sr-only">A link to the repo for this website (opens a new tab)</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
