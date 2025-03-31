import "./style.css";

interface Props {
  title?: string;
  byline?: string;
  body: string;
}

export default function Card({ title, byline, body }: Props) {
  return (
    <div>
      {title} {byline} {body}
    </div>
  );
}
