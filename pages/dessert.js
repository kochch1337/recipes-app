import Image from "next/image";

export default function Dessert() {
  return (
    <div>
      <h2>DessertPage</h2>
      <p>Hier gibt den Nachtisch</p>
      <MyImage></MyImage>
    </div>
  );
}

const myLoader = ({ src, width, quality }) => {
  return `https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400/${src}?w=${width}&q=${
    quality || 75
  }`;
};

function MyImage() {
  return (
    <Image
      loader={myLoader}
      src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
      alt="Picture of the author"
      width={500}
      height={500}
      layout="responsive"
    />
  );
}
