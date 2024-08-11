import { CldImage, CldUploadWidget } from 'next-cloudinary';
import ImagesList from './components/imagesList';
import UploadWidget from './components/uploadWidget';
import UploadImgSimp from './components/uploadImgSimp';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <UploadImgSimp />
      <ImagesList />
    </main>
  );
}
