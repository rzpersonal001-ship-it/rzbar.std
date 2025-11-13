import { useState, useEffect } from "react";
import { getBlogPosts } from "../utils/firebase";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const { t } = useTranslation();
  const blogContent = t("blog", { returnObjects: true });

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts();
      const sorted = allPosts.sort((a, b) => b.createdAt - a.createdAt);
      setPosts(sorted);
    };
    fetchPosts();
  }, []);

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FFD93B] mb-12 text-center">
          {blogContent.title}
        </h1>

        {!selectedPost && (
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="cursor-pointer rounded-2xl overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                    loading="lazy"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-zinc-400 mb-3">{post.date}</p>
                  <p className="text-zinc-300">
                    {post.content?.slice(0, 120)}...
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {selectedPost && (
          <div>
            <button
              onClick={() => setSelectedPost(null)}
              className="mb-6 text-[#FFD93B] hover:underline"
            >
              {blogContent.back}
            </button>

            <h2 className="text-3xl font-bold mb-3">{selectedPost.title}</h2>
            <p className="text-sm text-zinc-400 mb-6">{selectedPost.date}</p>

            {selectedPost.image && (
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="rounded-xl mb-6 w-full max-h-[500px] object-cover"
              />
            )}

            {selectedPost.video && (
              <div className="mb-6 aspect-video">
                <iframe
                  src={selectedPost.video}
                  title={selectedPost.title}
                  className="w-full h-full rounded-xl"
                  allowFullScreen
                />
              </div>
            )}

            <p className="text-zinc-200 leading-relaxed whitespace-pre-line">
              {selectedPost.content}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
