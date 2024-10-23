import { heartConfetti } from "../explore/buttonEffect";

const HeartEyesImoji = () => {
  return (
    <svg
      style={{ opacity: "0.85", height: "150px", width: "150px" }}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        heartConfetti();
      }}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-4{fill:#f6fafd}.cls-6{fill:#ae2d4c}.cls-7{fill:#cf4054}.cls-10{fill:#fbb40a}",
          }}
        />
      </defs>
      <g data-name="13-love" id="_13-love">
        <circle cx={24} cy={24} r={23} style={{ fill: "#ffce52" }} />
        <path
          d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
          style={{ fill: "#ffe369" }}
        />
        <path
          d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
          style={{ fill: "#ffb32b" }}
        />
        <ellipse
          className="cls-4"
          cx={37}
          cy={9}
          rx=".825"
          ry="1.148"
          transform="rotate(-45.02 37 9)"
        />
        <ellipse
          className="cls-4"
          cx="30.746"
          cy="4.5"
          rx=".413"
          ry=".574"
          transform="rotate(-45.02 30.745 4.5)"
        />
        <ellipse
          className="cls-4"
          cx={34}
          cy={7}
          rx="1.65"
          ry="2.297"
          transform="rotate(-45.02 34 7)"
        />
        <path
          d="M34 39c0-2.76-4.47-5-10-5s-10 2.24-10 5l-.1.13A10.727 10.727 0 0 1 9 30.15 2.025 2.025 0 0 1 10.87 28c1.88 1.08 6.39 1 13.13 1s11.25.08 13.12-1A2.026 2.026 0 0 1 39 30.15a10.727 10.727 0 0 1-4.9 8.98z"
          style={{ fill: "#273941" }}
        />
        <path
          className="cls-6"
          d="m34 39 .1.13A17.882 17.882 0 0 1 24 42a17.882 17.882 0 0 1-10.1-2.87L14 39c0-2.76 4.47-5 10-5s10 2.24 10 5z"
        />
        <path
          className="cls-7"
          d="M16.5 9a4.465 4.465 0 0 1 4.5 4.8C21 21 13.5 25 12 25c-.72 0-8.38-3.7-8.97-10.39Q3 14.205 3 13.8a4.451 4.451 0 0 1 3.58-4.7A4.053 4.053 0 0 1 7.5 9c2.25 0 3.75 1.6 4.5 4 .75-2.4 2.25-4 4.5-4zM45 13.8q0 .4-.03.81C44.44 21.3 37.44 25 36 25c-.75 0-9-4-9-11.2A4.465 4.465 0 0 1 31.5 9c2.25 0 3.75 1.6 4.5 4 .75-2.4 2.25-4 4.5-4a4.053 4.053 0 0 1 .92.1A4.451 4.451 0 0 1 45 13.8z"
        />
        <path
          d="M10.87 30c1.88 1.08 6.39 1 13.13 1s11.25.08 13.12-1a1.926 1.926 0 0 1 1.793 1.536A11.043 11.043 0 0 0 39 30.15 2.026 2.026 0 0 0 37.12 28c-1.87 1.08-6.38 1-13.12 1s-11.25.08-13.13-1A2.025 2.025 0 0 0 9 30.15a11.015 11.015 0 0 0 .087 1.385A1.92 1.92 0 0 1 10.87 30z"
          style={{ fill: "#141e21" }}
        />
        <path
          d="M33.531 37.486A18.171 18.171 0 0 1 24 40a18.171 18.171 0 0 1-9.531-2.514A2.809 2.809 0 0 0 14 39l-.1.13A17.882 17.882 0 0 0 24 42a17.882 17.882 0 0 0 10.1-2.87L34 39a2.809 2.809 0 0 0-.469-1.514z"
          style={{ fill: "#8a293d" }}
        />
        <path
          className="cls-10"
          d="M36 25c-.71 0-8.131-3.59-8.921-10.081A6 6 0 0 0 27 15.8C27 23 35.25 27 36 27c1.44 0 8.44-3.7 8.97-10.39q.03-.41.03-.81a6.079 6.079 0 0 0-.07-.907C44.225 21.4 37.419 25 36 25zM12 25c-.71 0-8.131-3.59-8.921-10.081A6 6 0 0 0 3 15.8C3 23 11.25 27 12 27c1.44 0 8.44-3.7 8.97-10.39q.03-.41.03-.81a6.079 6.079 0 0 0-.07-.907C20.225 21.4 13.419 25 12 25z"
        />
        <path
          className="cls-6"
          d="M40.5 9c-2.25 0-3.75 1.6-4.5 4 .583-1.8 1.75-3 3.5-3a3.408 3.408 0 0 1 3.5 3.6c0 5.4-5.833 8.4-7 8.4-.56 0-6.518-2.775-6.977-7.793A8.167 8.167 0 0 1 29 13.6a3.366 3.366 0 0 1 2.784-3.525A3.243 3.243 0 0 1 32.5 10c1.75 0 2.917 1.2 3.5 3-.75-2.4-2.25-4-4.5-4a4.053 4.053 0 0 0-.92.1A4.451 4.451 0 0 0 27 13.8q0 .4.03.81C27.62 21.3 35.28 25 36 25c1.5 0 9-4 9-11.2A4.465 4.465 0 0 0 40.5 9zM16.5 9c-2.25 0-3.75 1.6-4.5 4 .583-1.8 1.75-3 3.5-3a3.408 3.408 0 0 1 3.5 3.6c0 5.4-5.833 8.4-7 8.4-.56 0-6.518-2.775-6.977-7.793A8.25 8.25 0 0 1 5 13.6a3.366 3.366 0 0 1 2.784-3.525A3.243 3.243 0 0 1 8.5 10c1.75 0 2.917 1.2 3.5 3-.75-2.4-2.25-4-4.5-4a4.053 4.053 0 0 0-.92.1A4.451 4.451 0 0 0 3 13.8q0 .4.03.81C3.62 21.3 11.28 25 12 25c1.5 0 9-4 9-11.2A4.465 4.465 0 0 0 16.5 9z"
        />
        <ellipse
          className="cls-4"
          cx={42}
          cy={13}
          rx=".825"
          ry="1.148"
          transform="rotate(-45.02 41.999 13)"
        />
        <ellipse
          className="cls-4"
          cx="40.746"
          cy="11.5"
          rx=".413"
          ry=".574"
          transform="rotate(-45.02 40.746 11.5)"
        />
        <ellipse
          className="cls-4"
          cx={18}
          cy={13}
          rx=".825"
          ry="1.148"
          transform="rotate(-45.02 18 13)"
        />
        <ellipse
          className="cls-4"
          cx="16.746"
          cy="11.5"
          rx=".413"
          ry=".574"
          transform="rotate(-45.02 16.745 11.5)"
        />
      </g>
    </svg>
  );
};

const NotLikeImoji = () => {
  return (
    <svg
      style={{ opacity: "0.85", height: "150px", width: "150px" }}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {}}
    >
      <defs>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".cls-3{fill:#f6fafd}.cls-4{fill:#141e21}.cls-7{fill:#fbb40a}",
          }}
        />
      </defs>
      <g data-name="08-sarcastic" id="_08-sarcastic">
        <circle cx={24} cy={24} r={23} style={{ fill: "#ffce52" }} />
        <path
          d="M21 36.014 19 36c0-3.158 6.915-4 11-4v2c-5.859 0-8.853 1.459-9 2.014z"
          style={{ fill: "#273941" }}
        />
        <path
          className="cls-3"
          d="M39.14 15.92c-.042-.074-.094-.142-.14-.214V17a2 2 0 0 1-4 0v-2h-5.46A5.931 5.931 0 0 0 28 19a6 6 0 0 0 12 0 5.871 5.871 0 0 0-.86-3.08z"
        />
        <path
          d="M37 19a2 2 0 0 0 2-2v-1.294a5.133 5.133 0 0 0-.54-.706H35v2a2 2 0 0 0 2 2z"
          fill="#273a41"
        />
        <path
          className="cls-3"
          d="M19.14 15.92c-.042-.074-.094-.142-.14-.214V17a2 2 0 0 1-4 0v-2H9.54A5.931 5.931 0 0 0 8 19a6 6 0 0 0 12 0 5.871 5.871 0 0 0-.86-3.08z"
        />
        <path
          d="M17 19a2 2 0 0 0 2-2v-1.294a5.133 5.133 0 0 0-.54-.706H15v2a2 2 0 0 0 2 2z"
          fill="#273a41"
        />
        <path
          d="M24 4c12.15 0 22 8.507 22 19h.975a23 23 0 0 0-45.95 0H2C2 12.507 11.85 4 24 4z"
          style={{ fill: "#ffe369" }}
        />
        <path
          d="M46 23c0 10.493-9.85 19-22 19S2 33.493 2 23h-.975c-.014.332-.025.665-.025 1a23 23 0 0 0 46 0c0-.335-.011-.668-.025-1z"
          style={{ fill: "#ffb32b" }}
        />
        <ellipse
          className="cls-3"
          cx="36.5"
          cy="8.5"
          rx=".825"
          ry="1.148"
          transform="rotate(-45.02 36.5 8.5)"
        />
        <ellipse
          className="cls-3"
          cx="30.246"
          cy={4}
          rx=".413"
          ry=".574"
          transform="rotate(-45.02 30.246 4)"
        />
        <ellipse
          className="cls-3"
          cx="33.5"
          cy="6.5"
          rx="1.65"
          ry="2.297"
          transform="rotate(-45.02 33.5 6.5)"
        />
        <path
          className="cls-7"
          d="M34 25a6 6 0 0 1-5.908-4.985 6 6 0 1 0 11.817-.009A6 6 0 0 1 34 25zM14 25a6 6 0 0 1-5.908-4.985 6 6 0 1 0 11.817-.009A6 6 0 0 1 14 25zM35 15h3.46a5.133 5.133 0 0 1 .54.706c.046.072.1.14.14.214a5.851 5.851 0 0 1 .831 2.655c.018-.189.029-.381.029-.575a5.871 5.871 0 0 0-.86-3.08c-.042-.074-.094-.142-.14-.214a5.133 5.133 0 0 0-.54-.706h-8.92A5.931 5.931 0 0 0 28 18a6.032 6.032 0 0 0 .034.634A5.927 5.927 0 0 1 29.54 15zM15 15h3.46a5.133 5.133 0 0 1 .54.706c.046.072.1.14.14.214a5.851 5.851 0 0 1 .831 2.655c.018-.189.029-.381.029-.575a5.871 5.871 0 0 0-.86-3.08c-.042-.074-.094-.142-.14-.214a5.133 5.133 0 0 0-.54-.706H9.54A5.931 5.931 0 0 0 8 18a6.032 6.032 0 0 0 .034.634A5.927 5.927 0 0 1 9.54 15z"
        />
      </g>
    </svg>
  );
};

const OptionInExplore = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const MoreIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const BlockAndReport = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const ReportIcon = () => {
  return (
    <svg
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export {
  HeartEyesImoji,
  NotLikeImoji,
  OptionInExplore,
  MoreIcon,
  BlockAndReport,
  CloseIcon,
  ReportIcon,
};
