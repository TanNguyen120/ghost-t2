'use client';
import { CldUploadWidget } from 'next-cloudinary';
import React from 'react';

const UploadImgSimp = () => {
  return (
    <CldUploadWidget uploadPreset='ml_default'>
      {({ open }) => {
        return <button onClick={() => open()}>Up hinh o day</button>;
      }}
    </CldUploadWidget>
  );
};

export default UploadImgSimp;
