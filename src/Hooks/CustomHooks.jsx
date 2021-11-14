import { useEffect, useCallback } from 'react';

export const useFetch = (data, dispatch) => {
  useEffect(() => {
    dispatch({ type: 'FETCH_IMAGES', fetching: true });
    fetch(`https://picsum.photos/v2/list?page=${data.page}&limit=20`)
      .then((res) => res.json())
      .then((images) => {
        dispatch({ type: 'ADD_IMAGES', images });
        dispatch({ type: 'FETCH_IMAGES', fetching: false });
      })
      .catch((e) => {
        dispatch({ type: 'FETCH_IMAGES', fetching: false });
        return e;
      });
  }, [dispatch, data.page]);
};

export const useInfiniteScroll = (scrollRef, dispatch) => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: 'EXTRA_PAGE' });
          }
        });
      }).observe(node);
    },
    [dispatch],
  );
  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};
