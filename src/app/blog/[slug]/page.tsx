import { BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";
import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import { Icon } from "@iconify/react";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const Content = post.Content;

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full min-h-screen pt-24 pb-24">
        {/* Full-width Hero Cover */}
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-24 relative mt-8">
          <div className="w-full h-[50vh] lg:h-[70vh] rounded-[2rem] overflow-hidden relative shadow-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            {/* Gradient overlay to ensure text is legible if needed, or just let the image shine */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-16 flex flex-col justify-end h-full">
              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${post.tagColor} bg-black/50 backdrop-blur-md`}>
                    {post.tag}
                  </span>
                  <span className="text-white/80 text-sm font-medium">{post.date}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-lg">
                  {post.title}
                </h1>
                <p className="text-lg lg:text-2xl text-white/90 font-medium max-w-3xl leading-relaxed drop-shadow-md">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Wrapper */}
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between border-y border-black/10 dark:border-white/10 py-6 mb-16">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                {post.author.avatar}
              </div>
              <div>
                <p className="text-base font-bold text-neutral-900 dark:text-white">{post.author.name}</p>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 mt-6 md:mt-0">
              <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                <Icon icon="solar:clock-circle-linear" width="18" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-purple-600 hover:text-white transition flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                  <Icon icon="solar:link-circle-linear" width="20" />
                </button>
                <button className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 hover:bg-[#1DA1F2] hover:text-white transition flex items-center justify-center text-neutral-600 dark:text-neutral-400">
                  <Icon icon="ri:twitter-x-line" width="18" />
                </button>
              </div>
            </div>
          </div>

          {/* Actual Lesson/Article Content injected here */}
          <article className="prose-container">
            <Content />
          </article>

          {/* Bottom Article Author bio */}
          <div className="mt-24 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl p-8 lg:p-12 flex flex-col sm:flex-row gap-8 items-center text-center sm:text-left">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold text-4xl shadow-xl shrink-0">
              {post.author.avatar}
            </div>
            <div>
              <p className="text-sm font-bold tracking-wider text-purple-600 dark:text-purple-400 uppercase mb-2">Written by</p>
              <h3 className="text-2xl font-serif font-bold text-neutral-900 dark:text-white mb-3">{post.author.name}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                {post.author.role} at Harbi Agency. Passionate about turning complex design principles into actionable frameworks for growing businesses.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
