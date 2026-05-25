"use client";

import { Background } from "@/components/layout/Background";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { BLOG_POSTS } from "@/data/blog";
import Image from "next/image";

export default function BlogPage() {
  const featured = BLOG_POSTS.find(p => p.featured);
  const rest = BLOG_POSTS.filter(p => !p.featured);

  return (
    <>
      <Background />
      <Navbar />

      <main className="w-full max-w-[1400px] mx-auto px-6 pt-32 pb-24 min-h-screen">
        <div className="mb-16">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500">BLOG</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-neutral-900 dark:text-white mb-6 leading-[1.1]">
            Insights &amp; ideas.
          </h1>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Strategy, design thinking, and practical advice for businesses building their digital presence.
          </p>
        </div>

        {/* Featured Post */}
        {featured && (
          <div className="mb-16">
            <TransitionLink
              href={`/blog/${featured.slug}`}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-full h-72 lg:h-auto relative overflow-hidden bg-black">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${featured.tagColor}`}>{featured.tag}</span>
                  <span className="text-xs text-neutral-400">Featured</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-tight text-neutral-900 dark:text-white mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition">{featured.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 bg-neutral-300 dark:bg-neutral-600 rounded-full" />
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </TransitionLink>
          </div>
        )}

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map(post => (
            <TransitionLink
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 rounded-2xl overflow-hidden hover:border-purple-500/30 dark:hover:border-purple-500/30 hover:shadow-xl transition-all duration-500 flex flex-col"
            >
              <div className="w-full h-48 relative overflow-hidden bg-black">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>{post.tag}</span>
                </div>
                <h3 className="text-lg font-serif font-bold tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition leading-snug">{post.title}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-neutral-400 mt-4 pt-4 border-t border-black/5 dark:border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-[8px] text-white font-bold select-none">
                      {post.author.avatar}
                    </div>
                    <span>{post.author.name}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </TransitionLink>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
