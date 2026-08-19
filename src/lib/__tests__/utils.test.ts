import { getImageProxyFallbackUrl, POSTER_REFERRER_POLICY } from '@/lib/utils';

describe('poster image loading', () => {
  it('uses an origin-only referrer policy for protected poster hosts', () => {
    expect(POSTER_REFERRER_POLICY).toBe('origin');
  });

  it('encodes the original image URL in the same-origin fallback URL', () => {
    const originalUrl =
      'https://img9.doubanio.com/view/photo/poster.jpg?size=large&v=1';

    expect(getImageProxyFallbackUrl(originalUrl)).toBe(
      `/api/image-proxy?url=${encodeURIComponent(originalUrl)}`
    );
  });
});
