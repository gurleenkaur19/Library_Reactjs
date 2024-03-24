import Banner from "../components/Banner";

import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";

const sliderContent = [
  {
    title: "Books We Love",
    books: [
      {
        id: 1,
        title: "The Green Mile",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81TXkn53+KL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 2,
        title: "Harry Potter",
        author: "J.K. Rowling",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML._AC_UL320_SR320,320_.jpg",
      },
      {
        id: 3,
        title: "Carrie",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91P7rIp-ayL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 4,
        title: "Frankenstein",
        author: "Mary Wollstonecraft Shelley",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/419KWX6-dML._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 5,
        title: "Divergent",
        author: "Veronica Roth",
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618526890i/13335037.jpg",
      },
      {
        id: 6,
        title: "Graveyard",
        author: "Dave McKean",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81M-wGpe8uL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 7,
        title: "Planet of the Apes",
        author: "A Novel Mass Market Paperback",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61Z6IE-oKyL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 8,
        title: "Journey to Center",
        author: "y Jules Verne",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/616W6cTSO-L._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 9,
        title: "A Study in Scarlet",
        author: "by Arthur Conan Doyle",
        image: "https://m.media-amazon.com/images/I/41BqQ+FrvZL.jpg",
      },
      {
        id: 10,
        title: "The End & Death",
        author: "by Dan Abnett",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/816z6FNi2HL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 11,
        title: "The Little Prince",
        author: "Antoine de Saint-Exupery",
        image:
          "https://m.media-amazon.com/images/I/41InPgynHYL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
      },
      {
        id: 12,
        title: "Bright Places",
        author: "Jennifer Niven",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/A17ol+VOLhL._AC_UL232_SR232,232_.jpg",
      },
    ],
  },
  {
    title: "Browse By subject",
    books: [
      {
        id: 1,
        title: "Physics",
        author: "Stephen King",
        image: "https://ars.els-cdn.com/content/image/X26660326.jpg",
      },
      {
        id: 2,
        title: "Chemistry",
        author: "Stephen King",
        image:
          "https://m.media-amazon.com/images/I/51FBnVAAaEL._SX444_BO1,204,203,200_.jpg",
      },
      {
        id: 3,
        title: "Biology",
        author: "Stephen King",
        image:
          "https://img.elibs.shop/file/elibimg/13460-a0b607f5333db6a888e9ab49977f1927-g.jpg",
      },
      {
        id: 4,
        title: "Maths",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61kMnR4FKnL._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 5,
        title: "English",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/810+oL3M0cL._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 6,
        title: "Political Science",
        author: "Stephen King",
        image:
          "https://img.elibs.shop/file/elibimg/26542-b367ea01ec28736f6500c2be55f67b42-d__57336__65441__41692__48973__83636__89471__03737__68967__71189__61058-5.png",
      },
      {
        id: 7,
        title: "History",
        author: "Stephen King",
        image: "https://m.media-amazon.com/images/I/51NmtbZOoXL._SL500_.jpg",
      },
      {
        id: 8,
        title: "Geography",
        author: "Stephen King",
        image:
          "https://m.media-amazon.com/images/I/41mRJbpfFDL._SY264_BO1,204,203,200_QL40_ML2_.jpg",
      },
      {
        id: 9,
        title: "Psychology",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81pW2AKLbNL._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 10,
        title: "Physical education",
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91rxY7ZdgRL._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 11,
        title: "Economics",
        author: "Stephen King",
        image:
          "https://m.media-amazon.com/images/I/717nwo9iyGL._AC_UY436_QL65_.jpg",
      },
      {
        id: 12,
        title: "IT",
        author: "Stephen King",
        image:
          "https://m.media-amazon.com/images/I/71Rpo7g3+TL._AC_UY436_QL65_.jpg",
      },
    ],
  },
  {
    title: "Kids",
    books: [
      {
        id: 1,
        title: "I Love You",
        author: "Amelia Hepworth",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 2,
        title: "Grumpy Monkey",
        author: "Suzzane Lang",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/916o5aNYaDL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 3,
        title: "Share Everything!",
        author: "Robert Munsch",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81i-QStcTUL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 4,
        title: "The Little Mermaid",
        author: "ichael Teitelbaum",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71xyCHSIqQL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 5,
        title: "Diary of kid",
        author: "Marcus Pfisher",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91XUENePBlL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 6,
        title: "Be Kind",
        author: "Pat Zietlow Miller",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91R47lhQNYL._AC_UL348_SR348,348_.jpg",
      },
      {
        id: 7,
        title: "The Gruffalo",
        author: "Julia Donaldson",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/81JqILz3c-L._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 8,
        title: "Pusheen the Cat",
        author: "Claire Belton",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/612UHcNCaFL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 9,
        title: "The Secret Key",
        author: "Lena Jones",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/61GI37O23OL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 10,
        title: "Proudest Blue",
        author: "Ibtihaj Muhammad",
        image:
          "https://m.media-amazon.com/images/I/51EH4KLq2yL._SY498_BO1,204,203,200_.jpg",
      },
      {
        id: 11,
        title: "The Giving Tree",
        author: "Shel Silverstein",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71wiGMKadmL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 12,
        title: "No, David!",
        author: "David Shannon",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71b8IeOtp4L._AC_UL232_SR232,232_.jpg",
      },
    ],
  },
  {
    title: "Romance",
    books: [
      {
        id: 1,
        title: "The Silent Wife",
        author: "Kerry Fisher",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71hct4LOzVL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 2,
        title: "The Bad Boy's Girl",
        author: "Blair Holden",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/71IuoGvtYpL._AC_UL232_SR232,232_.jpg",
      },
      {
        id: 3,
        title: "The Stopover",
        author: "T L Swan",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3Gc7M6UoqPBw1BlE5LJ22rizi9s8sERPVmu6dy-NX3-gHbMKlxVPqmCK1tN24m5N3-DhQxxI&usqp=CAc",
      },
      {
        id: 4,
        title: "Ugly Love",
        author: "Colleen Hoover",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOgSG1-UMKT7oPYcFiAGZkzndaGMhcsp2kceuqD-D-SrKE1tVFFzXBhQXm6k_rNTpwQ3_QoVA&usqp=CAc",
      },
      {
        id: 5,
        title: "The Last Song",
        author: "Nicholas Sparks",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRo56mjtAAbMrHQOI1GG3mQ0J_LCH58D5FoY3f6oo7mpwScsYP4Nx9_yUtN1Q&usqp=CAc",
      },
      {
        id: 6,
        title: "The Selection",
        author: "Kiera Cass",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSg4w49RtfBDK_ji6nLHGY-GpbHI6gOZP1U7vq4UO_7U870vNGFTBmxq_P0UCE&usqp=CAc",
      },
      {
        id: 7,
        title: "Cruel Prince",
        author: "Holly Black",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSEtXCZjowiApjFHRqpSrj9B_tCvrySKYUGOxNaqEaz251hOpgsK-r0euaqSas&usqp=CAc",
      },
      {
        id: 8,
        title: "Beautiful Disaster",
        author: "Jamie McGuire",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQbu-Vk5gdVtOZ6tQhYqZM5DVwUinTvKOd2STHEuYURV9JtcFBaWD7KTyQNBGF60m3D80AVv_A&usqp=CAc",
      },
      {
        id: 9,
        title: "from Blood And",
        author: "Jennifer L. Armentrout",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSS3PXo-JD5bjKKstGJtVHFANBExb2WqZljd91WaH7uIMAg6ikkNjtqu4Z2JgA&usqp=CAc",
      },
      {
        id: 10,
        title: "First Sight",
        author: "Nicholas Sparks",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQpmgT-PT9RDtkjufVqQLM0SDb1Q4im6WN7GvK-IhE514ZYUrsPFnL5ve8QmJNq0EZaLbSaGgw&usqp=CAc",
      },
      {
        id: 11,
        title: "All He Will Ever Be",
        author: "W. Winters",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT0al2ZXYppxgmFfe_Y9vyWcM-9_O76WesHMI3ylqHza6MCdt3mviCF2uSyJaPmTOSN4Tuzk25F&usqp=CAc",
      },
      {
        id: 12,
        title: "Sweetest Oblivion",
        author: "Danielle Lori",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRmzOqd60kkab8pWJuOlLT8IqAcislXxskvGSSR0-eIyijRiNZuLKEbsU77P_Z0uzYD7T5ra5s&usqp=CAc",
      },
    ],
  },
  {
    title: "Thrillers",
    books: [
      {
        id: 1,
        title: "The Apartment",
        author: "K.L.Slater",
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTk2bvJgWI3Vl9JN1wikKkqnkLWy-E95zDr1LIrfLnGB4130-XndXSq434_ag&usqp=CAc",
      },
      {
        id: 2,
        title: "Stranger's Wife",
        author: "Anna-Lou Weatherley",
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS1gQFiK7qIMyadsQ4L-Ns0n1unC4JoejNuCUwkvyYIwzHNpeTx0Vwe5zRp2A&usqp=CAc",
      },
      {
        id: 3,
        title: "Family Across",
        author: "Nicole Trope",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_rl0MLNepreJ1L5FlyTEooAZ4Asr-n9pw7tVV6kJP4z8gDMmnOllJ64fdiI21wro5E57i5rGH&usqp=CAc",
      },
      {
        id: 4,
        title: "The Accident",
        author: "Daniel Hurst",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTOI79M8YBh4UTU2TUJlF4ZXWjq-zyjPWc0hPYQdhAPEn7i-humkTV4TrtzTcSa03Z6b_yYrKpt&usqp=CAc",
      },
      {
        id: 5,
        title: "Her Silent Cry",
        author: "Lisa Regan",
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRtzW5jUW6FYeMqkA0lQTTy6-iKIuvtugtEO32_8JAcfDnan57PnEDWFzYB7Akgnuz0hDStEKGq&usqp=CAc",
      },
      {
        id: 6,
        title: "What Lies Between",
        author: "John Marrs",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQq2KfJgq6HE7KVtw82Su2tdAoe4x2ipSa_J1G9FOAh_Y6HJ77T-mIazFK0Hw&usqp=CAc",
      },
      {
        id: 7,
        title: "Where the Forest",
        author: "Glendy Vanderah",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR0vCItl_Uy7apgEFSRNYHnJ-g2a0IRYoGkZYIF48MuaX33hozbg6ZvbcnPjA&usqp=CAc",
      },
      {
        id: 8,
        title: "The Collector",
        author: "K.R.Alexander",
        image:
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRNXdeLUargoOoduhrkYA2mZjnpO6_SxSz9qZLfgU8h0VOVJnIA5fJQL1-eag&usqp=CAc",
      },
      {
        id: 9,
        title: "Shatter Me",
        author: "Tahereh Mafi",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS71to9x7NqALbWusAgjZgA3QJ7H-TxQMj5vsxX84p-oZfLmbcsGLmQ8lHYLHn2txPKm-npDlR1&usqp=CAc",
      },
      {
        id: 10,
        title: "Revenge",
        author: "Lisa Jackson",
        image:
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWZo5U3Pv_UbWkPQeVM_6hanYA73qE8JoWg0IN5OPcgfDaR6QkNHTw1U8onrk&usqp=CAc",
      },
      {
        id: 11,
        title: "The Raft",
        author: "S.A.Bodeen",
        image:
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQagMWSxFKlF2H8sA8zN201d-4yzUuiDY2anXuKfOIGRRBODvswN8r8TGPENA&usqp=CAc",
      },
      {
        id: 12,
        title: "The Years",
        author: "Annie Ernaux",
        image:
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRHLV6TBwi3Fqe-5KsWVy3xErY9lHneu8hkYOZhdVwMYgOfnK5fNdZ3Oh3KgMk&usqp=CAc",
      },
    ],
  },
];

function Home() {
  return (
    <div>
      <Banner />
      <Wrapper />
      {sliderContent.map((slider, index) => (
        <Slider key={index} title={slider.title} books={slider.books} />
      ))}
    </div>
  );
}

export default Home;
