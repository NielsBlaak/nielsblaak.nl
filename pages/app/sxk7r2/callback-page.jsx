import { useEffect } from 'react';

export default function SpotifyCallback() {
  useEffect(() => {
    window.location = 'play-any-song://redirect' + window.location.hash;
  }, []);

  return <p>Redirecting back to the app…</p>;
}
