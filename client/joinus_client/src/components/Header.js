export default function Header(props) {
  const { id, title } = props;

  return (
    <h1 className="light" id={id}>
      {title}
    </h1>
  );
}
