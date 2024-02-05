'use client';

import { useState } from 'react';

type LessonProps = {
  title: string;
  shortSummary?: string;
};

type LikeState = 'unset' | 'Liked' | 'Dislake';
export function Lesson({ title, shortSummary }: LessonProps) {
  const [likeState, setLikeState] = useState<LikeState>('unset');
  const setLike = () => setLikeState('Liked');
  return (
    <div>
      <h2>
        {title}{' '}
        <button type="button" onClick={setLike}>
          {likeState === 'unset' ? 'like' : likeState}
        </button>
      </h2>
      <p>{shortSummary}</p>
    </div>
  );
}
