import React from 'react';

import OwlCarousel from 'react-owl-carousel3';

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplay: true,
  items: 1,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
};

type ProductSliderProps = {
  images: any[];
};

const ProductSlider = ({ images }: ProductSliderProps) => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <>
      {display ? (
        <OwlCarousel
          className="products-details-image products-details-image-slides owl-carousel owl-theme"
          {...options}
        >
          {images &&
            images.map((img: any, idx: number) => (
              <div className="single-image-box" key={idx}>
                <img src={img.img} alt="img" />
              </div>
            ))}
        </OwlCarousel>
      ) : (
        ''
      )}
    </>
  );
};

export default ProductSlider;
