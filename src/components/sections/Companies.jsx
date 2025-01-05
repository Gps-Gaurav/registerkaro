import Image from 'next/image';

const Companies = () => {
  return (
    <div className="flex justify-center items-center bg-white py-8 rounded-lg shadow-md">
      <div className="flex justify-between items-center space-x-10">
        {/* Coinbase */}
        <Image
          src="/logos/coinbase.svg" // Replace with the actual path to the logo
          alt="Coinbase Logo"
          width={120}
          height={40}
        />
        {/* Spotify */}
        <Image
          src="/logos/spotify.svg" // Replace with the actual path to the logo
          alt="Spotify Logo"
          width={120}
          height={40}
        />
        {/* Slack */}
        <Image
          src="/logos/slack.svg" // Replace with the actual path to the logo
          alt="Slack Logo"
          width={120}
          height={40}
        />
        {/* Dropbox */}
        <Image
          src="/logos/dropbox.svg" // Replace with the actual path to the logo
          alt="Dropbox Logo"
          width={120}
          height={40}
        />
        {/* Webflow */}
        <Image
          src="/logos/webflow.svg" // Replace with the actual path to the logo
          alt="Webflow Logo"
          width={120}
          height={40}
        />
        {/* Zoom */}
        <Image
          src="/logos/zoom.svg" // Replace with the actual path to the logo
          alt="Zoom Logo"
          width={120}
          height={40}
        />
      </div>
    </div>
  );
};

export default Companies;
