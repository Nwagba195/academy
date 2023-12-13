import React from "react";

const Footer = () => {
  return (
    <div className="mx-4 xl:mx-[204px] p-4 bg-[#FAFAFA] mt-8 md:mt-24 rounded-2xl space-y-8">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8">
        <p className="p-6 bg-purple-50 rounded-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </p>
        <div className="flex flex-col items-center justify-center space-y-3">
          <img className="h-16 w-auto" src="/Group.svg" alt="Your Company" />
          <h1 className="font-black">ACADEMY</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="space-y-4">
          <div>. MEMBERSHIP CERTIFICATE</div>
          <img src="/Certificate.svg" alt="Certificate" />
        </div>
        <div className="space-y-4">
          <div>.CATEGORIES</div>
          <div>
            <ul className="space-y-2">
              <li>Designing</li>
              <li>Programming</li>
              <li>Graphics</li>
              <li>Front end</li>
              <li>Composition</li>
              <li>Tailoring</li>
              <li>Database</li>
              <li>Sport</li>
              <li>Cooking</li>
              <li>Driving</li>
              <li>Photography</li>
              <li>Camerawork</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div>.QUICK ACCESS</div>
          <div>
            <ul className="space-y-2">
              <li>What We Offer</li>
              <li>Careers</li>
              <li>Leadership</li>
              <li>About</li>
              <li>Catalog</li>
              <li>Degrees</li>
              <li>For Enterprise</li>
              <li>For Government</li>
              <li>For Campus</li>
              <li>Become A partner</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
        <div className="space-y-4">
          <div>.NEW COMMENT</div>
          <div>
            <ul className="space-y-2">
              <li className="p-4 bg-[#F5F5F5] rounded-xl">
                <p className="font-semibold">Ellsmartx</p>
                <p>How nice Does This Look 😍 I Feel it Should Be Delicious</p>
              </li>
              <li className="p-4 bg-[#F5F5F5] rounded-xl">
                <p className="font-semibold">Cassia</p>
                <p>
                  Take a rest, I&apos;ll be cheer up you again in 2 next game go
                  go go
                </p>
              </li>
              <li className="p-4 bg-[#F5F5F5] rounded-xl">
                <p className="font-semibold">Amanda</p>
                <p>you were stunning today, jan! 💗 great match 👍🏽👍🏽</p>
              </li>
              <li className="p-4 bg-[#F5F5F5] rounded-xl">
                <p className="font-semibold">Denis Simonassi</p>
                <p>It was a great match today Janzi! You did great😉🇩🇪</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
