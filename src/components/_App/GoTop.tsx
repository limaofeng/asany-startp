import React, { useCallback, useEffect } from 'react';

import * as Icon from 'react-feather';

type GoTopProps = {
  scrollStepInPx: any;
  delayInMs: any;
};

const GoTop = ({ scrollStepInPx, delayInMs }: GoTopProps) => {
  const [thePosition, setThePosition] = React.useState(false);
  const timeoutRef = React.useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setThePosition(true);
      } else {
        setThePosition(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onScrollStep = useCallback(() => {
    if (window.pageYOffset === 0) {
      clearInterval(timeoutRef.current);
    }
    window.scroll(0, window.pageYOffset - scrollStepInPx);
  }, [scrollStepInPx]);

  const scrollToTop = useCallback(() => {
    timeoutRef.current = (setInterval(
      onScrollStep,
      delayInMs
    ) as unknown) as number;
  }, [delayInMs, onScrollStep]);

  const renderGoTopIcon = () => {
    return (
      <div
        className={`go-top ${thePosition ? 'active' : ''}`}
        onClick={scrollToTop}
      >
        <Icon.ArrowUp />
      </div>
    );
  };

  return <React.Fragment>{renderGoTopIcon()}</React.Fragment>;
};

export default GoTop;
