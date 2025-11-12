import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  addBlogPost,
  logoutAdmin,
} from "../utils/firebase";

const AdminPanel = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [newPost, setNewPost] = useState({
    title: "",
    date: "",
    image: "",
    video: "",
    content: "",
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ Redirect jika belum login
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((user) => {
      if (!user) navigate("/admin-login");
      else setUser(user);
    });
    return () => unsub();
  }, [navigate]);

  // ✅ Handle input perubahan
  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  // ✅ Simpan post (tanpa Firebase Storage)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPost.title || !newPost.date || !newPost.content) {
      alert("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    try {
      let imageUrl = newPost.image;

      // 🔹 Jika admin memilih file, hanya buat URL lokal (preview)
      if (file) {
        const fileName = `${Date.now()}-${file.name}`;
        imageUrl = `/uploads/${fileName}`;

        // Menyimpan file di localStorage agar bisa di-preview sementara (browser-only)
        const reader = new FileReader();
        reader.onload = () => {
          localStorage.setItem(fileName, reader.result);
        };
        reader.readAsDataURL(file);
      }

      // 🔹 Simpan data ke Firestore
      await addBlogPost({
        ...newPost,
        image: imageUrl,
      });

      alert("✅ Blog post published!");
      setNewPost({ title: "", date: "", image: "", video: "", content: "" });
      setFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Error adding post. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Logout admin
  const handleLogout = async () => {
    await logoutAdmin();
    navigate("/admin-login");
  };

  return (
    <section className="min-h-screen bg-zinc-950 text-white px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#FFD93B]">
            Admin Panel
            {user && (
              <span className="text-sm text-zinc-400 ml-2">
                (logged in as {user.email})
              </span>
            )}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded font-medium"
          >
            Logout
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-6 rounded-xl mb-10 space-y-4"
        >
          <input
            name="title"
            placeholder="Post title"
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
            value={newPost.title}
            onChange={handleChange}
            required
          />

          <input
            name="date"
            placeholder="Date (e.g. Nov 10, 2025)"
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
            value={newPost.date}
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
          />

          {/* ✅ Preview file */}
          {file && (
            <div className="mt-2">
              <p className="text-sm text-zinc-400 mb-1">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </p>
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="rounded-xl max-h-64 border border-zinc-700"
              />
            </div>
          )}

          <p className="text-sm text-zinc-500">
            * Untuk saat ini, gambar tidak di-upload. Simpan manual ke
            <code> /public/uploads/ </code> atau masukkan URL gambar statis.
          </p>

          <input
            name="image"
            placeholder="Image URL (optional)"
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
            value={newPost.image}
            onChange={handleChange}
          />

          <input
            name="video"
            placeholder="Video embed URL (optional)"
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
            value={newPost.video}
            onChange={handleChange}
          />

          <textarea
            name="content"
            placeholder="Write your post content..."
            rows={6}
            className="w-full px-3 py-2 rounded bg-zinc-800 border border-zinc-700"
            value={newPost.content}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-yellow-400/60" : "bg-[#FFD93B] hover:bg-yellow-400"
            } text-zinc-950 font-bold py-2 px-6 rounded transition`}
          >
            {loading ? "Uploading..." : "Publish"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminPanel;
