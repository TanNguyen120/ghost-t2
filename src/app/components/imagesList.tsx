import Image from 'next/image';
import React, { useEffect, useState } from 'react';

async function getServerData() {
  console.log('akjhdf');
  const r = await fetch(
    `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/resources/image`,
    {
      mode: 'no-cors',
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.CLOUDINARY_API_KEY +
            ':' +
            process.env.CLOUDINARY_API_SECRET
        ).toString('base64')}`,
      },
    }
  );
  const json = await r.json();
  console.log(json);
  return json;
}
export default async function ImagesList() {
  const data = await getServerData();
  return (
    <div className=' flex flex-col'>
      {data.resources.map((ele: any, i: number) => (
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
