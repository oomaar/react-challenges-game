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
  CardImage,
  CardImageUser,
  CardImageDetails,
  CardImageLinks,
  CardImageInstagram,
} from "./styledThirdParty";
import { Pagination } from "../../Componetns/Pagination/Pagination";

export const ThirdParty = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [pagesCount, setPagesCount] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  const searchURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&page=${pageNumber}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
  const defaultURL = `https://api.unsplash.com/photos?page=${pageNumber}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  const search = () => setIsSearching((state) => !state);

  //   NOTESSSSS: https://unsplash.com/documentation#list-photos

  const getSearchResponse = async () => {
    const response = await fetch(`${searchURL}`);
    const data = await response.json();
    setImages(data.results);
    setLoading(false);
    setPagesCount(data.total_pages);
  };

  useEffect(() => {
    setLoading(true);
    getSearchResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSearching, pageNumber]);

  useEffect(() => {
    const getResponse = async () => {
      setLoading(true);
      const response = await fetch(`${defaultURL}`);
      const data = await response.json();
      setImages(data);
      setLoading(false);
      setToggleSearch(false);
      console.log(
        "🚀 ~ file: ThirdParty.js ~ line 54 ~ getResponse ~ data",
        response.per_page
      );
      console.log(
        "🚀 ~ file: ThirdParty.js ~ line 51 ~ getResponse ~ data",
        data
      );
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
                <CardImage
                  src={image.urls.small}
                  alt={`from ${image.user.first_name}`}
                />
                <CardImageDetails>
                  <CardImageUser>
                    <img
                      src={image.user.profile_image.small}
                      alt={image.user.name}
                    />
                    <h3>{image.user.name}</h3>
                    <p>{format(new Date(image.created_at), "dd MMMM yyyy")}</p>
                  </CardImageUser>
                  <CardImageLinks>
                    <span>
                      <i className="bx bxs-heart" /> {image.likes}
                    </span>
                    <CardImageInstagram>
                      <a
                        href={`https://instagram.com/${image.user.instagram_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span>
                          <i className="bx bxl-instagram" />
                        </span>
                        {image.user.instagram_username}
                      </a>
                    </CardImageInstagram>
                  </CardImageLinks>
                </CardImageDetails>
              </ImageCard>
            ))
          ) : (
            <h1>No Search Results</h1>
          )}
        </ImagesContainer>
        <Pagination
          pagesCount={pagesCount}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </ThirdPartyContainer>
    );
  }
};
