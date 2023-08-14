import MusicReview from "../../Components/MusicReviewsComp/MusicReview";

function Reviews() {
  return (
    <>
      <div>
        <h1>Music Reviews, LPs, CDs, Streaming and More...</h1>
        <MusicReview
          title={"Abraxas"}
          description={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumm"
          }
          image={"https://m.media-amazon.com/images/I/91eRdbn09dL._SL1500_.jpg"}
          imageAlt={"an image of this album cover"}
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
          ss
        />
        <MusicReview
          title={"1989"}
          description={
            "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsumm"
          }
          image={
            "https://m.media-amazon.com/images/I/61wablwq9HL._AC_UY218_.jpg"
          }
          imageAlt={"an image of this album cover"}
          ss
        />
      </div>
    </>
  );
}

export default Reviews;
