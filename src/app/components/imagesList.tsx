'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ImagesList() {
  const [imgList, setImgList] = useState<any>(null);
  const [nextCursor, setNextCursor] = useState('');
  const [getNextImages, setGetNextImages] = useState(false);
  useEffect(() => {
    const getPicList = async () => {
      setGetNextImages(true);
      const res = await fetch('/api/pics');
      const jsonRes = await res.json();
      setImgList(jsonRes.json.resources);
      setNextCursor(jsonRes.json.next_cursor);
      setInterval(() => {
        setGetNextImages(false);
      }, 1000);
    };
    getPicList();
  }, []);

  // get more image using next_cursor
  async function getMoreImage(nextCursor: string) {
    const res = await fetch(`/api/pics?next_cursor=${nextCursor}`);
    const jsonRes = await res.json();
    const newData = imgList.concat(jsonRes.json.resources);
    setImgList(newData);
    setNextCursor(jsonRes.json.next_cursor);
  }

  return (
    <div className=' flex flex-col mt-12'>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-2 justify-center'>
        {imgList?.map((ele: any, i: number) => (
          <div
            key={i}
            className='md:h-[700px] md:w-auto w-[90%] h-auto bg-slate-400'
          >
            <Image
              src={ele.url}
              height={ele.height}
              width={ele.width}
              alt={ele.public_id}
              loading='lazy'
              className='h-[100%] w-[100%]'
            />
          </div>
        ))}
      </div>
      <div
        className='p-2 rounded-md bg-slate-400 text-white w-fit mx-auto border mt-11 hover:cursor-pointer hover:bg-slate-300'
        onClick={(e) => {
          getMoreImage(nextCursor);
        }}
      >
        {' '}
        Xem Thêm Hình
      </div>
      {getNextImages && (
        <Image
          src={'/placeholder-image.jpg'}
          alt='placeholder'
          width={500}
          height={500}
        />
      )}
    </div>
  );
}
