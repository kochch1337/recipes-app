import Image from "next/image";

export default function Veggie() {
  return (
    <div>
      <h2>Veggie Page</h2>
      <p>Hier gibt vegetarisch</p>
      <MyImage></MyImage>
    </div>
  );
}

function MyImage() {
  return (
    <Image
      src="/../public/pizza.jpg"
      alt="Picture of the author"
      width={500}
      height={500}
      layout="responsive"
    />
  );
}
