import Image from 'next/image';

export default function HomeSpeedImage() {
  return (
    <div className="relative max-w-[450px] max-h-[450px] flex flex-col items-end">
      <Image
        src="/images/SpeedTrain.png"
        alt="Home Speed"
        width={450}
        height={450}
        className="z-0"
      />
      <span className="absolute bottom-[-9%] left-[-9%] z-[-1]">
        <svg
          width="93"
          height="93"
          viewBox="0 0 93 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3"></circle>
          <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3"></circle>
        </svg>
      </span>
    </div>
  );
}
