import MusicReview from "../../Components/MusicReviewsComp/MusicReview";
import data from "../../assets/data.json";
import "./MusicReviews.css";
import { useLayoutEffect } from "react";

function Reviews() {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div>
        <h1>Music Reviews, LPs, CDs, Streaming and More...</h1>
        {data.map((item) => (
          <MusicReview
            key={item.Album}
            title={item.Album}
            description={`
          This area is for the review by a music critical listener.  You can submit your own review`}
            artist={item.Artist}
            releasedOn={"Columbia House Records"}
            releaseYear={item.ReleaseYear}
            rating={item.Rating}
            genre={item.Genre}
            style={item.Style}
            format={item.Format}
            image={item.ImageUrl}
          />
        ))}
        <MusicReview
          title={"Abraxas"}
          description={`
            The swirling atmospherics of the opening Singing Winds Crying Beats merge seamlessly into the languid Black Magic Woman the combustible Gypsy Queen and the vibrant Oye Como Va to produce a continuous 15-minute suite that portrays the band’s broad emotional range. 

            There are also the complex, jazz-influenced Incident At Neshabur, more percussion pyrotechnics on Se A Cabo, and the sublime instrumental Samba Pa Ti, which has become Carlos’s signature tune.
            
            "I felt Santana had a very dynamic range," Metallica's Rob Trujillo told us. "He’d bring in heavy guitars for the riff to get everyone excited, and with the use of percussion there was this indigenous quality to the beat, the rhythm, the flow of the music he was producing - not to mention all those nice, beautiful instrumental moments.
            
            “The album cover was really fascinating too. His artwork was psychedelic and trippy with beautiful women in it that made you look and go ‘wow’. There were many emotions stirred with that record."`}
          image={"https://m.media-amazon.com/images/I/91eRdbn09dL._SL1500_.jpg"}
          imageAlt={"an image of this album cover"}
          artist={"Santana"}
          releasedOn={"Polygram Records"}
          releaseYear={"1969"}
          rating={"Four Stars!"}
          ss
        />
        <MusicReview
          title={"Revolver"}
          description={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumm"
          }
          image={
            "https://m.media-amazon.com/images/I/61KgIpfj1UL._AC_UY218_.jpg"
          }
          imageAlt={"an image of this album Revolver cover"}
          artist={"The Beatles"}
          releasedOn={"Polygram Records"}
          releaseYear={"1969"}
          rating={"Four Stars!"}
          ss
        />
        <MusicReview
          title={"1989"}
          description={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumm"
          }
          artist={"Taylor Swift"}
          image={
            "https://m.media-amazon.com/images/I/61wablwq9HL._AC_UY218_.jpg"
          }
          imageAlt={"an image of this album cover"}
          releasedOn={"Polygram Records"}
          releaseYear={"1969"}
          rating={"Four Stars!"}
          ss
        />
      </div>
    </>
  );
}

export default Reviews;
