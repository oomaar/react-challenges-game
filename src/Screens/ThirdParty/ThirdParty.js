import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import {
  ImageCard,
  ImagesContainer,
  ThirdPartyContainer,
  SearchContainer,
  SearchInputContainer,
  SearchIcon,
  SearchInput,
  SearchButton,
} from "./styledThirdParty";

export const ThirdParty = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  const searchURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=1&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
  const string = `https://api.unsplash.com/photos?page=1&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const search = () => setIsSearching((state) => !state);

  const getSearchResponse = async () => {
    const response = await fetch(`${searchURL}`);
    const data = await response.json();
    setImages(data.results);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getSearchResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearching]);

  useEffect(() => {
    const getResponse = async () => {
      setLoading(true);
      const response = await fetch(`${string}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
    };

    getResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputElement = useRef(null);

  useEffect(() => {
    toggleSearch && inputElement.current?.focus();
  }, [toggleSearch]);

  const searchUI = (
    <SearchContainer onSubmit={(e) => e.preventDefault()}>
      <SearchInputContainer toggleSearch={toggleSearch}>
        <SearchIcon onClick={() => setToggleSearch((state) => !state)}>
          <i className="bx bx-search-alt-2" />
        </SearchIcon>
        <SearchInput
          ref={inputElement}
          toggleSearch={toggleSearch}
          type="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton
          toggleSearch={toggleSearch}
          onClick={search}
          type="submit"
          disabled={!toggleSearch}
        >
          search
        </SearchButton>
      </SearchInputContainer>
    </SearchContainer>
  );

  if (loading) {
    return (
      <div>
        {searchUI}
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <ThirdPartyContainer>
        {searchUI}
        <ImagesContainer>
          {images.length !== 0 ? (
            images.map((image) => (
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
            ))
          ) : (
            <h1>No Search Results</h1>
          )}
        </ImagesContainer>
      </ThirdPartyContainer>
    );
  }
};
