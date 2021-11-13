import React, { useReducer } from 'react';
import { imageReducer } from '../Reducers/imageReducer';
import { pageReducer } from '../Reducers/pageReducer';
import { useFetch } from '../Hooks/CustomHooks';
import '../Css/Master.css';

function Master() {
  const [images, imageDispatch] = useReducer(imageReducer, { images: [], fetching: true });
  const [pager] = useReducer(pageReducer, { page: 0 });

  useFetch(pager, imageDispatch);

  return (
    <div className="container">
      {images.images.map((image) => (
        <div className="images-container" key={image.id}>
          <div className="images-item">
            <div className="image">
              <img
                src={image.download_url.replace(/(\/[0-9]{2,5}\/[0-9]{2,5}$)/g, '/1600/900')}
                alt={image.author}
              />
            </div>
            <div className="text">{image.author}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export { Master };
