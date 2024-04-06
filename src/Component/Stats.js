export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const Percentage = Math.round((numPacked / numItems) * 100);

  if (!numItems)
    return <p className="stats"> Start add some items to our packing list! </p>;
  return (
    <footer className="stats">
      {Percentage === 100 ? (
        "You Got Every Thing! Ready to go "
      ) : (
        <em>
          You need {numItems} items on your list , and you already packes{" "}
          {numPacked} ({Percentage}%)
        </em>
      )}
    </footer>
  );
}
