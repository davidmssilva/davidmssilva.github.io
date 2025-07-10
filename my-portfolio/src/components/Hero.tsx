import { useEffect, useRef } from "react";

const Hero = () => {
  const nameRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const finalName = "David Silva";
    let iteration = 0;
    const interval = 220;
    const maxIterations = finalName.length + 1;

    const scramble = setInterval(() => {
      if (!nameRef.current) return;

      nameRef.current.textContent = finalName
        .split("")
        .map((char, i) => {
          if (i < iteration) return finalName[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      iteration++;
      if (iteration > maxIterations) clearInterval(scramble);
    }, interval);

    return () => clearInterval(scramble);
  }, []);

  return (
    <section className="section" data-aos="fade-up">
      <div className="container hero">
        <h1>
          <span ref={nameRef}></span>
        </h1>
        <p>Software Engineer full-stack with front-end enthusiasm</p>
        <p>
          I’m a Software Engineer passionate about growing my full-stack skills,
          currently diving deeper into front-end tech. I’m motivated to sharpen
          both my technical and leadership abilities and always up for
          challenges that push me to learn and improve — personally and
          professionally.
        </p>
        <div>
          <button className="btn btn-white">Portfolio</button>
          <button className="btn btn-outline">Contact</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
