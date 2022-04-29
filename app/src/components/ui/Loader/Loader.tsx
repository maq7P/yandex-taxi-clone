import Image from 'next/image';
import preloaderImage from '../../../../public/images/preloader.png';

const Loader = () => {
  console.log(preloaderImage);

  return (
    <div className="w-screen h-screen">
      <Image
        src={preloaderImage.src}
        alt="preloader"
        layout="fill"
        priority={true}
      />
    </div>
  );
};

export default Loader;