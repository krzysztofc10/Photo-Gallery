import React from 'react';
import PropTypes from 'prop-types';
import '../Css/Detail.css';

export function Detail(props) {
  const { sendId, durl } = props;

  return (
    <div>
      { sendId !== ''
     && (
     <>
       <img src={sendId} className="detailImage" alt="pic" />
       <a className="button" href={`${durl}/download?force=true`} download>
         Download photo
       </a>
     </>
     )}
    </div>
  );
}

Detail.propTypes = {
  durl: PropTypes.string,
  sendId: PropTypes.string,
};

Detail.defaultProps = {
  durl: '',
  sendId: '',
};
