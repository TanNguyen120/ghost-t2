'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function ImagesList() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getPicList = async () => {
      const res = await fetch('/api/pics');
      const jsonRes = await res.json();
      setData(jsonRes.json);
    };
    getPicList();
  }, []);
  return (
    <div className=' flex flex-col'>
      {data?.resources?.map((ele: any, i: number) => (
        <div key={i}>
          <Image
            src={ele.url}
            height={ele.height / 2}
            width={ele.width / 2}
            alt={ele.public_id}
          />
        </div>
      ))}
    </div>
  );
}
