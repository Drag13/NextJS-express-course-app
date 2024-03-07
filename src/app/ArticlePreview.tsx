'use client';

import { useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';
import { articleStorage } from './ArticleStorage';

type ArticlePreviewProps = {
  name: string;
  text: string;
};

export function ArticlePreview({ name, text }: ArticlePreviewProps) {
  const [liked, setLiked] = useState(articleStorage.liked(name));

  const like = () => {
    articleStorage.like(name);
    setLiked(true);
  };

  console.log(`LIKED VALUE`, liked);

  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>
      <button onClick={like} type="button" suppressHydrationWarning>
        {liked ? '👍' : 'like'}
      </button>
    </>
  );
}
