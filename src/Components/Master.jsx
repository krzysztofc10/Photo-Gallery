import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types';
import { imageReducer } from '../Reducers/imageReducer';
import { pageReducer } from '../Reducers/pageReducer';
import { useFetch, useInfiniteScroll } from '../Hooks/CustomHooks';
import '../Css/Master.css';

function Master(props) {
  const [images, imageDispatch] = useReducer(imageReducer, { images: [], fetching: true });
  const [page, pageDispatch] = useReducer(pageReducer, { page: 0 });

  const imagesLoaderRef = useRef(null);

  useFetch(page, imageDispatch);
  useInfiniteScroll(imagesLoaderRef, pageDispatch);
  const { sendId } = props;

  return (
    <div className="container">
      {images.images.map((image) => (
        <div className="images-container" key={image.id}>
          <div className="images-item">
            <div className="image">
              {/* eslint-disable-next-line */}
              <a onClick={ () => sendId(image.download_url, image.url) }>
                <img
                  src={image.download_url.replace(/(\/[0-9]{2,5}\/[0-9]{2,5}$)/g, '/1600/900')}
                  alt={image.author}
                />
              </a>
            </div>
            <div className="text">{image.author}</div>
          </div>
        </div>
      ))}
      {images.fetching && (
      <div>
        <h1>Loading images...</h1>
      </div>
      )}
      <div ref={imagesLoaderRef} />
    </div>
  );
}

Master.propTypes = {
  sendId: PropTypes.func,
};

Master.defaultProps = {
  sendId: {},
};

export { Master };
