/**
 * Pulls a YouTube video ID out of pretty much any link format someone
 * might paste in from the admin side: watch?v=, youtu.be, shorts, embed,
 * or a live link. Returns null if it can't find one, so callers can fall
 * back to a placeholder gracefully instead of crashing.
 */
export function getYouTubeId(url) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      return parsed.pathname.split("/").filter(Boolean)[0] || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.searchParams.get("v")) {
        return parsed.searchParams.get("v");
      }
      const parts = parsed.pathname.split("/").filter(Boolean);
      const keywords = ["shorts", "embed", "live"];
      const idx = parts.findIndex((p) => keywords.includes(p));
      if (idx !== -1 && parts[idx + 1]) {
        return parts[idx + 1];
      }
    }
  } catch (err) {
    return null;
  }

  return null;
}

/**
 * Builds a thumbnail URL straight from YouTube's CDN. maxresdefault is
 * the sharpest option but is not generated for every video, so we default
 * to hqdefault which always exists.
 */
export function getYouTubeThumbnail(url, quality = "hqdefault") {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://img.youtube.com/vi/${id}/${quality}.jpg`;
}

export function getYouTubeEmbedUrl(url) {
  const id = getYouTubeId(url);
  if (!id) return null;
  return `https://www.youtube.com/embed/${id}`;
}

export function getYouTubeWatchUrl(url) {
  const id = getYouTubeId(url);
  if (!id) return url;
  return `https://www.youtube.com/watch?v=${id}`;
}
