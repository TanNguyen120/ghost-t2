import { CldImage, CldUploadWidget } from 'next-cloudinary';
import ImagesList from './components/imagesList';
import UploadWidget from './components/uploadWidget';
import UploadImgSimp from './components/uploadImgSimp';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div> Ghost T2</div>
      <h3>Cloudinary Upload Widget Example</h3>
      <h3>An Image for me</h3>

      <UploadImgSimp />
      <ImagesList />

      <p>
        <a
          href='https://cloudinary.com/documentation/upload_widget'
          target='_blank'
        >
          Upload Widget User Guide
        </a>
      </p>
      <p>
        <a
          href='https://cloudinary.com/documentation/upload_widget_reference'
          target='_blank'
        >
          Upload Widget Reference
        </a>
      </p>
    </main>
  );
}
