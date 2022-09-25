export default function Header(props) {
  const { id, title } = props;

  return <h1 id={id}>{title}</h1>;
}
