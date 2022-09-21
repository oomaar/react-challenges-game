import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  ImageCard,
  ImagesContainer,
  ThirdPartyContainer,
} from "./styledThirdParty";

export const ThirdParty = () => {
  const string = `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(
    "🚀 ~ file: ThirdParty.js ~ line 9 ~ ThirdParty ~ loading",
    loading
  );

  useEffect(() => {
    const getResponse = async () => {
      setLoading(true);
      const response = await fetch(`${string}`);
      const data = await response.json();
      setImages(data);
      console.log(
        "🚀 ~ file: ThirdParty.js ~ line 15 ~ getResponse ~ data",
        data
      );
      setLoading(false);
    };

    getResponse();
  }, []);

  if (loading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <ThirdPartyContainer>
        <ImagesContainer>
          {images.map((image) => (
            <ImageCard key={image.id}>
              <img
                src={image.urls.small}
                alt={`from ${image.user.first_name}`}
              />
              <div>
                <img
                  src={image.user.profile_image.small}
                  alt={image.user.name}
                />
                <h3>{image.user.name}</h3>
                <p>
                  Date: {format(new Date(image.created_at), "dd MMMM yyyy")}
                </p>
              </div>
              <p>likes: {image.likes}</p>
              <div>
                <span>
                  <i className="bx bxl-instagram" />
                </span>
                <a
                  href={`https://instagram.com/${image.user.instagram_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {image.user.instagram_username}
                </a>
              </div>
              <div>
                <span>
                  <i className="bx bxl-twitter" />
                </span>
                <a
                  href={`https://twitter.com/${image.user.instagram_username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {image.user.twitter_username}
                </a>
              </div>
            </ImageCard>
          ))}
        </ImagesContainer>
      </ThirdPartyContainer>
    );
  }
};
