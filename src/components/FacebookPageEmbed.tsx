"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB: {
      XFBML: {
        parse(): void;
      };
    };
  }
}

const FacebookPageEmbed = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.FB) {
        window.FB.XFBML.parse();
      } else {
        const script = document.createElement("script");
        script.src =
          process.env.NEXT_PUBLIC_FB_SCRIPT_SRC ??
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.onload = () => {
          if (window.FB) window.FB.XFBML.parse();
        };
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <div
      className="fb-page"
      data-href={process.env.NEXT_PUBLIC_FB_PAGE_LINK}
      data-tabs="timeline"
      data-width=""
      data-height="100%"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote
        cite={process.env.NEXT_PUBLIC_FB_PAGE_LINK}
        className="fb-xfbml-parse-ignore"
      >
        <a href={process.env.NEXT_PUBLIC_FB_PAGE_LINK}>Pixel Genius Academy</a>
      </blockquote>
    </div>
  );
};

export default FacebookPageEmbed;
