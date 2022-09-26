export default function Header(props) {
  const { id, title } = props;

  return (
    <h1 class="light" id={id}>
      {title}
    </h1>
  );
}
