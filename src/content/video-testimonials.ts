// ─────────────────────────────────────────────────────────────────────────────
// VIDEO TESTIMONIALS CONTENT FILE
// Add your video testimonials here. Supports YouTube, Loom, Vimeo, and
// direct video file URLs. No component changes needed — just add an object.
// ─────────────────────────────────────────────────────────────────────────────

export type VideoSource = "youtube" | "loom" | "vimeo" | "direct";

export interface VideoTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  businessType: string;
  resultAchieved: string; // Short result badge e.g. "20X ROAS"
  videoSource: VideoSource;
  /**
   * For YouTube: full URL e.g. https://www.youtube.com/watch?v=VIDEO_ID
   * For Loom: full URL e.g. https://www.loom.com/share/VIDEO_ID
   * For Vimeo: full URL e.g. https://vimeo.com/VIDEO_ID
   * For direct: path in /public e.g. /videos/testimonial-1.mp4
   */
  videoUrl: string;
  thumbnailUrl?: string; // Optional: custom thumbnail from /public
  featured: boolean;
}

// ─────────────────────────────────────────────────────────────────────────────
// ADD YOUR VIDEOS HERE
// ─────────────────────────────────────────────────────────────────────────────
export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  // PLACEHOLDER 1 — Replace videoUrl with your actual video link
  {
    id: "testimonial-1",
    clientName: "Rajesh Kumar",
    clientRole: "Founder",
    businessType: "Construction Compliance",
    resultAchieved: "20X ROAS",
    videoSource: "youtube",
    videoUrl: "", // TODO: Add your YouTube/Loom/Vimeo link here
    featured: true,
  },
  // PLACEHOLDER 2
  {
    id: "testimonial-2",
    clientName: "Sarah M.",
    clientRole: "Director",
    businessType: "UK Wellness Brand",
    resultAchieved: "85% Traffic Recovered",
    videoSource: "loom",
    videoUrl: "", // TODO: Add your video link here
    featured: true,
  },
  // PLACEHOLDER 3
  {
    id: "testimonial-3",
    clientName: "Priya Menon",
    clientRole: "CEO",
    businessType: "Organic Products",
    resultAchieved: "500+ Followers in 90 Days",
    videoSource: "youtube",
    videoUrl: "", // TODO: Add your video link here
    featured: false,
  },
  // PLACEHOLDER 4
  {
    id: "testimonial-4",
    clientName: "Arun Bose",
    clientRole: "Owner",
    businessType: "Artisan Chocolates",
    resultAchieved: "2X ROAS",
    videoSource: "loom",
    videoUrl: "", // TODO: Add your video link here
    featured: false,
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITY: Generate embed URL from video source
// ─────────────────────────────────────────────────────────────────────────────
export function getEmbedUrl(testimonial: VideoTestimonial): string | null {
  if (!testimonial.videoUrl) return null;

  switch (testimonial.videoSource) {
    case "youtube": {
      // Handle both youtu.be and youtube.com/watch formats
      const ytMatch = testimonial.videoUrl.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/
      );
      if (ytMatch) {
        return `https://www.youtube.com/embed/${ytMatch[1]}?rel=0&modestbranding=1`;
      }
      return null;
    }
    case "loom": {
      const loomMatch = testimonial.videoUrl.match(
        /loom\.com\/share\/([^?#]+)/
      );
      if (loomMatch) {
        return `https://www.loom.com/embed/${loomMatch[1]}`;
      }
      return null;
    }
    case "vimeo": {
      const vimeoMatch = testimonial.videoUrl.match(/vimeo\.com\/(\d+)/);
      if (vimeoMatch) {
        return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
      }
      return null;
    }
    case "direct":
      return testimonial.videoUrl;
    default:
      return null;
  }
}

export function getFeaturedVideoTestimonials(): VideoTestimonial[] {
  return VIDEO_TESTIMONIALS.filter((v) => v.featured);
}
