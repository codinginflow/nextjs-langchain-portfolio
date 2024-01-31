import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media",
  description: "My social media channels and how to work with me.",
};

export default function Page() {
  return (
    <section className="space-y-6">
      <H1>Social Media</H1>
      <section className="space-y-3">
        <H2>My channels</H2>
        <p>
          I create daily short form content on YouTube, Instagram Reels, and
          TikTok. I also release about one multi-hour-long tutorial on Youtube
          every month. I put a ton of effort into my tutorials to make them as
          clear and concise as possible.
        </p>
        <p>Links to all my social accounts:</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.youtube.com/codinginflow?sub_confirmation=1"
              className="text-primary hover:underline"
            >
              YouTube
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/codinginflow"
              className="text-primary hover:underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@codinginflow"
              className="text-primary hover:underline"
            >
              TikTok
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/codinginflow"
              className="text-primary hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/codinginflow"
              className="text-primary hover:underline"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/codinginflow"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/codinginflow"
              className="text-primary hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://www.codinginflow.com/blog"
              className="text-primary hover:underline"
            >
              Blog
            </a>
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Popular content</H2>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLrnPJCHvNZuDG6BWjUFVxeWyYlve_SVJO"
              className="text-primary hover:underline"
            >
              Full-stack web development playlist
            </a>{" "}
            - Learn full-stack web development from zero by building
            progressively more advanced projects. We focus on{" "}
            <span className="fon-bold">React.js, Next.js, and Node.js</span>.
            It&apos;s a ton of fun!
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLrnPJCHvNZuD3YXjsWeARnZWoFG6G7ATz"
              className="text-primary hover:underline"
            >
              Web dev shorts playlist
            </a>{" "}
            - All my web development related Youtube Shorts in one playlist.
          </li>
        </ul>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Discord server</H2>
        <p>
          I welcome you to{" "}
          <a
            href="https://codinginflow.com/discord"
            className="text-primary hover:underline"
          >
            join my Discord server
          </a>{" "}
          where you can chat with me and other developers. We are already more
          than <span className="font-bold">7000 members</span> and growing more
          every day!
        </p>
        <p>
          We have discussion forums, job boards, and even a meme channel. You
          can climb a ranking system by posting and helping others. It&apos;s a
          ton of fun!
        </p>
        <hr className="border-muted" />
      </section>
      <section className="space-y-3">
        <H2>Business inquiries</H2>
        <p>
          If you want to work with me on a project or get a shoutout for your
          product on my social media channels, please contact me via email at{" "}
          <a
            href="mailto:florian@codinginflow.com"
            className="text-primary hover:underline"
          >
            florian@codinginflow.com
          </a>
        </p>
        <p>
          I&apos;ve worked with many different companies in the past, including{" "}
          <a
            href="https://getstream.io/"
            className="text-primary hover:underline"
          >
            Stream
          </a>
          ,{" "}
          <a href="https://clerk.com/" className="text-primary hover:underline">
            Clerk
          </a>
          ,{" "}
          <a
            href="https://www.packtpub.com/"
            className="text-primary hover:underline"
          >
            Packt
          </a>
          ,{" "}
          <a
            href="https://brilliant.org/"
            className="text-primary hover:underline"
          >
            Brilliant
          </a>{" "}
          and many more.
        </p>
      </section>
    </section>
  );
}
