'use client';
import { CldUploadWidget } from 'next-cloudinary';
import React, { useEffect, useState } from 'react';
import vietHoaJson from '../../../public/lang/vietHoa.json';

const UploadImgSimp = () => {
  // Type script ma xai any vi luoi :))
  const [uploadResult, setUploadResult] = useState<any>();
  const [closeWidget, setCloseWidget] = useState(false);
  useEffect(() => {
    console.log(uploadResult);
    if (uploadResult?.event === 'success') {
      alert('up hình thành công.');
    }
  }, [uploadResult]);
  useEffect(() => {
    if (closeWidget) {
      window.location.reload();
    }
  }, [closeWidget]);

  const vieJson = vietHoaJson.en;

  return (
    <CldUploadWidget
      uploadPreset='ml_default'
      onSuccess={(result, { widget }) => {
        setUploadResult(result);
      }}
      onClose={() => {
        setCloseWidget(true);
      }}
      options={{
        language: 'vie',
        text: {
          vie: vieJson,
        },
      }}
    >
      {({ open }) => {
        return (
          <button
            className=' p-2 rounded-lg bg-blue-200 hover:cursor-pointer hover:bg-blue-300 border border-blue-500 font-semibold'
            onClick={() => open()}
          >
            Up Hình Ở Đây{' '}
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default UploadImgSimp;
