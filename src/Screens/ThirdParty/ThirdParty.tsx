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
import { ImagesType } from "./ThirdPartyTypes";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export const ThirdParty = () => {
  const [images, setImages] = useState<ImagesType>([]);
  const [loading, setLoading] = useState(false);
  const [toggleSearch, setToggleSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [pagesCount, setPagesCount] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);

  const searchURL = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=9&page=${pageNumber}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
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
    };

    getResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputElement = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    toggleSearch && inputElement.current?.focus();
  }, [toggleSearch]);

  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.getElementById("PDF")!);
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("shipping_label.pdf");
  };

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
      <ThirdPartyContainer id="PDF">
        <button
          onClick={() => {
            createPDF();
            console.log("Logged into the console");
          }}
        >
          Export PDF
        </button>
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
