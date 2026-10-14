import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard } from "@fortawesome/free-solid-svg-icons";

interface LoadingProps {
  /** Title shown under the spinner */
  label?: string;
}

const loadingStyles = `
  @keyframes hf-spin { to { transform: rotate(360deg); } }
  @keyframes hf-orbit { to { transform: rotate(360deg); } }
  @keyframes hf-icon {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.08) rotate(-6deg); }
  }
  @keyframes hf-glow {
    0%, 100% { box-shadow: 0 0 14px rgba(212, 175, 55, 0.2), inset 0 0 12px rgba(212, 175, 55, 0.08); }
    50% { box-shadow: 0 0 32px rgba(212, 175, 55, 0.5), inset 0 0 20px rgba(212, 175, 55, 0.15); }
  }
  @keyframes hf-shine { 0% { background-position: 200% 50%; } 100% { background-position: -40% 50%; } }
  @keyframes hf-slide { 0% { transform: translateX(-110%); } 100% { transform: translateX(220%); } }
  @keyframes hf-blink {
    0%, 100% { opacity: 0.2; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-5px); }
  }
  @keyframes hf-pan { from { background-position: 0 center; } to { background-position: -44px center; } }

  .hf-ring {
    border-radius: 9999px;
    background: conic-gradient(
      from 0deg,
      rgba(212, 175, 55, 0) 0deg,
      rgba(212, 175, 55, 0.06) 40deg,
      #D4AF37 110deg,
      #FF1E1E 160deg,
      rgba(212, 175, 55, 0.06) 220deg,
      rgba(212, 175, 55, 0) 360deg
    );
    -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px));
    mask: radial-gradient(farthest-side, transparent calc(100% - 5px), #000 calc(100% - 4px));
    animation: hf-spin 2.4s linear infinite;
  }

  .hf-orbit { animation: hf-orbit 1.6s linear infinite; }

  .hf-core {
    background: radial-gradient(circle at 30% 25%, rgba(245, 245, 220, 0.08), rgba(28, 22, 17, 0.95) 60%);
    animation: hf-glow 2.4s ease-in-out infinite;
  }

  .hf-icon { animation: hf-icon 2.4s ease-in-out infinite; }

  .hf-title {
    background: linear-gradient(
      100deg,
      #A39E93 0%,
      #A39E93 35%,
      #F5F5DC 48%,
      #D4AF37 55%,
      #A39E93 70%,
      #A39E93 100%
    );
    background-size: 200% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: hf-shine 2.8s linear infinite;
  }

  .hf-fill {
    background: linear-gradient(90deg, #8B0000, #D4AF37 45%, #FF1E1E 60%, #D4AF37 75%, #8B0000);
    animation: hf-slide 1.6s cubic-bezier(0.65, 0, 0.35, 1) infinite;
  }

  .hf-dot { animation: hf-blink 1.2s ease-in-out infinite; }

  .hf-strip {
    background-color: rgba(28, 22, 17, 0.75);
    background-image: linear-gradient(90deg, rgba(245, 245, 220, 0.3) 0 14px, transparent 14px);
    background-size: 44px 10px;
    background-repeat: repeat;
    background-position: 0 center;
    animation: hf-pan 1.6s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    .hf-ring, .hf-orbit, .hf-core, .hf-icon, .hf-title, .hf-fill, .hf-dot, .hf-strip {
      animation: none;
    }
  }
`;

export default function Loading({ label = "NOW LOADING" }: LoadingProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={label}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-defjam-bg"
    >
      <style>{loadingStyles}</style>

      {/* Background image + cinematic tint */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/bg.png)" }}
      />
      <div aria-hidden className="absolute inset-0 bg-defjam-bg/80 backdrop-blur-[3px]" />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(15, 12, 8, 0.92) 100%)",
        }}
      />

      {/* Film-strip edges */}
      <div aria-hidden className="hf-strip absolute inset-x-0 top-0 h-5" />
      <div aria-hidden className="hf-strip absolute inset-x-0 bottom-0 h-5" />

      {/* Loader */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <div className="relative h-28 w-28">
          <span aria-hidden className="hf-ring absolute inset-0" />
          <span aria-hidden className="hf-orbit absolute inset-0">
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-defjam-red-bright shadow-[0_0_12px_rgba(255,30,30,0.8)]" />
          </span>
          <div className="hf-core absolute inset-4 flex items-center justify-center rounded-full border border-defjam-gold/40">
            <FontAwesomeIcon
              icon={faClapperboard}
              className="hf-icon text-defjam-gold"
              style={{ width: "2.25rem", height: "2.25rem" }}
            />
          </div>
        </div>

        <h2 className="hf-title font-display text-xl font-bold uppercase tracking-[0.35em] sm:text-2xl">
          {label}
        </h2>

        <div
          aria-hidden
          className="h-1.5 w-56 overflow-hidden rounded-full border border-defjam-gold/20 bg-defjam-card sm:w-64"
        >
          <div className="hf-fill h-full w-1/2 rounded-full" />
        </div>

        <p className="font-gaming text-sm tracking-[0.3em] text-defjam-muted">
          SETTING THE REEL
          <span className="hf-dot ml-0.5 inline-block" style={{ animationDelay: "0s" }}>
            .
          </span>
          <span className="hf-dot ml-0.5 inline-block" style={{ animationDelay: "0.2s" }}>
            .
          </span>
          <span className="hf-dot ml-0.5 inline-block" style={{ animationDelay: "0.4s" }}>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
