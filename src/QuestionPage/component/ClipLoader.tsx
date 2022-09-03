import { useState } from 'react';
import GridLoader from 'react-spinners/GridLoader';

const Loading = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="sweet-loading">
      <GridLoader color={'#DEB962'} loading={loading} size={40} />
    </div>
  );
};

export default Loading;
