import React from "react";

const Introduction = () => {
  return (
    <div>
      <h2 className="pb-5 font-semibold text-xl">Introduction</h2>
      <p className="text-[#636363]">
        Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with
        and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented
        Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Under the hood, Nest makes use of robust HTTP Server
        frameworks like Express (the default) and optionally can be configured to use Fastify as well! Nest provides a level of abstraction above
        these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to
        use the myriad of third-party modules which are available for the underlying platform.
      </p>
      <p className="text-[#636363] pt-5">
        Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with
        and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented
        Programming), FP (Functional Programming), and FRP (Functional Reactive Programming). Under the hood, Nest makes use of robust HTTP Server
        frameworks like Express (the default) and optionally can be configured to use Fastify as well! Nest provides a level of abstraction above
        these common Node.js frameworks (Express/Fastify), but also exposes their APIs directly to the developer. This gives developers the freedom to
        use the myriad of third-party modules which are available for the underlying platform.
      </p>
    </div>
  );
};

export default Introduction;
