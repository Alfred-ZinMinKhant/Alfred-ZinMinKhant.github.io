import React from "react";
import "./SocialMedia.scss";
import { socialMediaLinks } from "../../portfolio";

export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github ? (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-github"
        >
          <i className="fab fa-github"></i>
          <span className="tooltip" role="tooltip" id="tooltip-github">GitHub</span>
        </a>
      ) : null}

      {socialMediaLinks.linkedin ? (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-linkedin"
        >
          <i className="fab fa-linkedin-in"></i>
          <span className="tooltip" role="tooltip" id="tooltip-linkedin">LinkedIn</span>
        </a>
      ) : null}

      {socialMediaLinks.gmail ? (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-email"
        >
          <i className="fas fa-envelope"></i>
          <span className="tooltip" role="tooltip" id="tooltip-email">Email</span>
        </a>
      ) : null}

      {socialMediaLinks.myfol ? (
        <a
          href={socialMediaLinks.myfol}
          className="icon-button myfol"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-myfol"
        >
          <i className="fas fa-link"></i>
          <span className="tooltip" role="tooltip" id="tooltip-myfol">Myfol</span>
        </a>
      ) : null}

      {socialMediaLinks.facebook ? (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-facebook"
        >
          <i className="fab fa-facebook-f"></i>
          <span className="tooltip" role="tooltip" id="tooltip-facebook">Facebook</span>
        </a>
      ) : null}

      {socialMediaLinks.instagram ? (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-instagram"
        >
          <i className="fab fa-instagram"></i>
          <span className="tooltip" role="tooltip" id="tooltip-instagram">Instagram</span>
        </a>
      ) : null}

      {socialMediaLinks.twitter ? (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-twitter"
        >
          <i className="fab fa-twitter"></i>
          <span className="tooltip" role="tooltip" id="tooltip-twitter">Twitter</span>
        </a>
      ) : null}

      {socialMediaLinks.line ? (
        <a
          href={socialMediaLinks.line}
          className="icon-button line"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-line"
        >
          <i className="fab fa-line"></i>
          <span className="tooltip" role="tooltip" id="tooltip-line">Line</span>
        </a>
      ) : null}

      {socialMediaLinks.upwork ? (
        <a
          href={socialMediaLinks.upwork}
          className="icon-button upwork"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-upwork"
        >
          <i className="fas fa-briefcase"></i>
          <span className="tooltip" role="tooltip" id="tooltip-upwork">Upwork</span>
        </a>
      ) : null}

      {socialMediaLinks.kaggle ? (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="tooltip-kaggle"
        >
          <i className="fab fa-kaggle"></i>
          <span className="tooltip" role="tooltip" id="tooltip-kaggle">Kaggle</span>
        </a>
      ) : null}
    </div>
  );
}
