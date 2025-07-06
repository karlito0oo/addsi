import React, { memo } from 'react';

interface GoogleMapProps {
  iframeHtml: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ iframeHtml }) => {
  return (
    <div className="mt-8 rounded-xl overflow-hidden">
      <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
    </div>
  );
};

export default memo(GoogleMap); 