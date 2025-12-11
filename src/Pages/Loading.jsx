import React from 'react';
import { Helmet } from 'react-helmet';

const Loading = () => {
  return (
    <>
     <div>
      <Helmet>
        <title>GameHub - Loading</title>
      </Helmet>
    </div>
    <div>
      <span className="loading loading-spinner loading-xl"></span>

    </div>
    </>
  );
};

export default Loading;