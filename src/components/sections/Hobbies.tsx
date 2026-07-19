import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const images = [
  { src: "/hobbies/1.jpeg", alt: "1", className: "left-[2%] top-4 -rotate-8 z-[1]" },
  { src: "/hobbies/2.jpeg", alt: "2", className: "left-[14%] top-16 rotate-6 z-[2]" },
  { src: "/hobbies/3.jpeg", alt: "3", className: "left-[27%] top-2 -rotate-5 z-[3]" },
  { src: "/hobbies/4.jpeg", alt: "4", className: "left-[41%] top-12 rotate-7 z-[4]" },
  { src: "/hobbies/5.jpeg", alt: "5", className: "left-[58%] top-4 -rotate-6 z-[5]" },
  { src: "/hobbies/6.jpeg", alt: "6", className: "left-[73%] top-10 rotate-5 z-[6]" },

  { src: "/hobbies/7.jpeg", alt: "7", className: "left-[8%] top-[22%] -rotate-7 z-[7]" },
  { src: "/hobbies/8.jpeg", alt: "8", className: "left-[22%] top-[28%] rotate-4 z-[8]" },
  { src: "/hobbies/9.jpeg", alt: "9", className: "left-[38%] top-[24%] -rotate-5 z-[9]" },
  { src: "/hobbies/10.jpeg", alt: "10", className: "left-[54%] top-[30%] rotate-6 z-[10]" },
  { src: "/hobbies/11.jpeg", alt: "11", className: "left-[70%] top-[23%] -rotate-4 z-[11]" },

  { src: "/hobbies/12.jpeg", alt: "12", className: "left-[4%] top-[47%] rotate-5 z-[12]" },
  { src: "/hobbies/13.jpeg", alt: "13", className: "left-[20%] top-[53%] -rotate-6 z-[13]" },
  { src: "/hobbies/14.jpeg", alt: "14", className: "left-[37%] top-[49%] rotate-4 z-[14]" },
  { src: "/hobbies/15.jpeg", alt: "15", className: "left-[55%] top-[55%] -rotate-5 z-[15]" },
];

export default function Hobbies() {
  return (
    <section
      id="hobbies"
      className="relative overflow-hidden bg-black py-36"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Giant Typography */}
        <h1 className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 text-[18rem] font-black uppercase tracking-[-0.08em] text-white/[0.025] select-none">
          BEYOND
        </h1>

        {/* Ambient Lights */}
        <div className="absolute left-[-180px] top-10 h-[520px] w-[520px] rounded-full bg-[#DEDBC8]/8 blur-[140px]" />

        <div className="absolute right-[-180px] top-32 h-[480px] w-[480px] rounded-full bg-sky-500/5 blur-[150px]" />

        <div className="absolute bottom-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#DEDBC8]/6 blur-[160px]" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,.9) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-black" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 text-center">

          <div className="mb-6 flex items-center justify-center gap-5">
            <div className="h-px w-16 bg-neutral-700" />

            <span className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              OUTSIDE THE TERMINAL
            </span>

            <div className="h-px w-16 bg-neutral-700" />
          </div>

          <h2 className="text-5xl font-bold tracking-tight text-[#F5F1E8] md:text-7xl">
            Beyond Code<span className="text-[#DEDBC8]">.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-neutral-400">
            A collection of moments that shape who I am beyond engineering —
            photography, music, travel, books, and the experiences that quietly
            inspire the way I build.
          </p>

        </div>

        {/* Cards */}
        <DraggableCardContainer className="relative mx-auto h-[760px] w-full">
          {images.map((image) => (
            <DraggableCardBody
              key={image.src}
              className={`absolute ${image.className} !h-80 !w-60 p-0`}
            >
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="pointer-events-none h-full w-full select-none rounded-[28px] object-cover"
              />
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
}