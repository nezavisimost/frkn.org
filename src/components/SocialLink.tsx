import React from 'react';
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
} from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialProps {
  icon: IconDefinition;
  url: string;
}

const SocialLink = ({ icon, url }: SocialProps) => {
  return (
    <a
      href={url}
      className="cursor-pointer hover:text-zinc-600 transition-all duration-200"
    >
      <FontAwesomeIcon icon={icon} size="3x" />
    </a>
  );
};

export default SocialLink;
