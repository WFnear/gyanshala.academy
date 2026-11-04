"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  Plus,
  Edit2,
  Trash2,
  Star,
  ExternalLink,
  CheckCircle,
  X,
  MessageSquareQuote,
  Loader2,
} from "lucide-react";

interface StudentReview {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  is_active: boolean;
  order_index?: number;
}

const initialReviews: StudentReview[] = [
  {
    id: "rev-1",
    name: "Karan Pareek",
    image: "/Review/KaranPareek.png",
    rating: 5,
    review:
      "I had a wonderful experience learning German at Gyanshala Foreign Language Academy. The classes were well-structured, engaging, and easy to understand. Special thanks to Dilip Sir for his guidance, patience, and constant support. I truly appreciate his efforts and highly recommend this institute to anyone learning German.",
    is_active: true,
  },
  {
    id: "rev-2",
    name: "Anjali Choudhary",
    image: "/Review/AnjaliChoudhary.png",
    rating: 5,
    review:
      "Seit einem Jahr lerne ich Deutsch und glücklicherweise habe ich meine B1 Prüfung bestanden🏆🏆 . Zurzeit lerne ich B2 Kurs...Ich sammle hier viele Erfahrungen und das Umfeld des Unterrichts ist auch aüßerst einwandfrei und die Lehrer sind auch sehr hilfreich und unterstüztend uns beim Problem...Ich empfehle allen das Gyanshala institute zu beitreten",
    is_active: true,
  },
  {
    id: "rev-3",
    name: "Jhanvi Kumawat",
    image: "/Review/JhanviKumawat.png",
    rating: 5,
    review:
      "The German classes here are very interactive and practical. I like how the teachers focus on speaking from day one, instead of just theory. The sessions are fun, and I always feel motivated to practice more at home. It's a perfect institute for beginners who want to learn German seriously.",
    is_active: true,
  },
  {
    id: "rev-4",
    name: "Richa Singh",
    image: "/Review/RichaSingh.png",
    rating: 5,
    review:
      "I recently finished my German classes here and I have to say, the faculty is amazing. They really know their stuff and have a deep and thorough Knowledge of the German language. Instead of just making you memorize a textbook, they actually break down tricky grammar and sentence structures so it's easier to grasp the concepts. Definitely recommend.",
    is_active: true,
  },
  {
    id: "rev-5",
    name: "Suraj Dhayal",
    image: "/Review/Suraj dhayal.jpeg",
    rating: 5,
    review:
      "Gyanshala Foreign Language Academy is a finest institute in Lalkothi Jaipur for learning German language. The teachers are very supportive and hardworking. They are always ready to help you. The environment of the institute is very rich. Highly recommend!",
    is_active: true,
  },
  {
    id: "rev-6",
    name: "Ramjhan Chhimpa",
    image: "/Review/Ramjhan Chhimpa.jpeg",
    rating: 5,
    review:
      "I joined German language classes in Jaipur here and I must say the teaching quality is very good. The faculty is supportive, friendly, and always ready to clear doubts. The classes are interactive with lots of speaking practice, which makes learning enjoyable. Overall, a great place to improve German.",
    is_active: true,
  },
  {
    id: "rev-7",
    name: "Suvidhi Loonker",
    image: "/Review/Suvidhi Loonker.jpeg",
    rating: 5,
    review:
      "I had an incredible experience at this German coaching institute! The faculty members are extremely knowledgeable, approachable, and genuinely dedicated to ensuring each student's success. The learning atmosphere is positive, supportive, and highly conducive to acquiring language skills.",
    is_active: true,
  },
  {
    id: "rev-8",
    name: "Shivam Tak",
    image: "/Review/Shivam tak.png",
    rating: 5,
    review:
      "Gyanshala is actually having some quality teaching and support toward student. It is a really very good experience. All the details covered by faculty is really great. Every smallest information was well explained by faculty. I am really thankful to Gyanshala teachers for making German language so easy.",
    is_active: true,
  },
  {
    id: "rev-9",
    name: "Jatin Sharma",
    image: "/Review/Jatin Sharma.jpeg",
    rating: 5,
    review:
      "The Gyanshala Foreign Language Academy is an excellent place to learn languages. I am currently doing the English spoken course here, and I have seen a lot of improvement in myself. The teachers are knowledgeable, experienced, and very supportive with a friendly attitude.",
    is_active: true,
  },
  {
    id: "rev-10",
    name: "Deepak Chaudhary",
    image: "/Review/Deepak Choudhary.jpeg",
    rating: 5,
    review:
      "I recently completed a course at Gyanshala academy, and I must say it exceeded my expectations. The instructors were not only highly knowledgeable but also incredibly patient, catering to the varying skill levels of each student with tailored teaching methods.",
    is_active: true,
  },
  {
    id: "rev-11",
    name: "Khushi Sharma",
    image: "/Review/Khushi Sharma.jpeg",
    rating: 5,
    review:
      "I would 100% recommend this institute for all learners. I am learning German here and my experience here is just so amazing. Dilip sir and Ashveer sir are brilliant and fantastic teachers. They support and understand students and are the most helpful.",
    is_active: true,
  },
  {
    id: "rev-12",
    name: "Akshat Pandey",
    image: "/Review/Akshat Pandey.jpeg",
    rating: 5,
    review:
      "I started learning German here exact 1 year before and now I have completed B2 certification. From the level A1 to B2 I had the most amazing experience here while studying and interacting with others. Teachers here have very deep knowledge about everything like getting job in the German field.",
    is_active: true,
  },
  {
    id: "rev-13",
    name: "Rahul Soni",
    image: "/Review/Rahul Soni.jpeg",
    rating: 5,
    review:
      "Das ist ein schönes Institut und die Lehrer sind nett und hilfreich. Ich empfehle das Institut für alle, die Deutsch in Jaipur lernen wollen.",
    is_active: true,
  },
  {
    id: "rev-14",
    name: "Lavesh Rajput",
    image: "/Review/Lavesh Rajput.jpeg",
    rating: 5,
    review:
      "GYANSHALA is a great place to learn foreign languages, where you get a healthy environment and great support from the staff. Their personalised attention to their students help to learn even faster. Well equipped digital classroom, interaction with natives and supportive faculty.",
    is_active: true,
  },
  {
    id: "rev-15",
    name: "Jayalaxmi",
    image: "/Review/Jayalaxmi.jpeg",
    rating: 5,
    review:
      "Had an excellent experience here. The teachers are well qualified. It made learning german easy. This institute is highly recommended to everyone who wishes to learn any foreign language.",
    is_active: true,
  },
  {
    id: "rev-16",
    name: "Shailja Rathore",
    image: "/Review/Shailja Rathore.jpeg",
    rating: 5,
    review:
      "Wenn jemand in Jaipur deutsch lernen möchte, der am Gyanshala Institut einmal besuchen soll. Die Lehrer sind sehr hilfreich und freundlich. Das Lernen am Gyanshala fühlt nie schwer, sondern genießt man die Atmosphäre!",
    is_active: true,
  },
  {
    id: "rev-17",
    name: "Veronica Velasco",
    image: "/Review/Veronica Velasco.jpeg",
    rating: 5,
    review:
      "I had a fantastic experience learning German at Gyanshala Foreign Language Academy with Mr. Dilip Sinsinwar. Thanks to his excellent teaching methods and patient guidance, I was able to complete the A1 level in a short period of time.",
    is_active: true,
  },
  {
    id: "rev-18",
    name: "Sanju Punia",
    image: "/Review/Sanju Punia.jpeg",
    rating: 5,
    review:
      "Best german language institute in jaipur. I am from Haryana and joined here for B1 and B2 level. I am learning from Disha Mam and found the class best among all the classes I've taken earlier in Jaipur as well as Delhi. For students interested in studying or working in Germany, the academy offers great counseling services.",
    is_active: true,
  },
];

export default function AdminTestimonialsPage() {
  const [reviews, setReviews] = useState<StudentReview[]>(initialReviews);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<StudentReview | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "/Review/KaranPareek.png",
    rating: 5,
    review: "",
    is_active: true,
  });

  async function loadReviews() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/testimonials");
      const json = await res.json();
      if (json.success && json.data) {
        setReviews(json.data);
      }
    } catch (e) {
      console.error("Failed to load reviews:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadReviews();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openCreateModal() {
    setEditingReview(null);
    setFormData({
      name: "",
      image: "/Review/KaranPareek.png",
      rating: 5,
      review: "",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(item: StudentReview) {
    setEditingReview(item);
    setFormData({
      name: item.name,
      image: item.image,
      rating: item.rating || 5,
      review: item.review,
      is_active: item.is_active,
    });
    setIsModalOpen(true);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (editingReview) {
        const res = await fetch("/api/admin/testimonials", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingReview.id, ...formData }),
        });
        const data = await res.json();
        if (data.success) {
          setReviews((prev) =>
            prev.map((r) => (r.id === editingReview.id ? { ...r, ...formData } : r))
          );
          showToast(`Review from ${formData.name} updated!`);
        }
      } else {
        const res = await fetch("/api/admin/testimonials", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          setReviews((prev) => [data.data, ...prev]);
          showToast(`Review from ${formData.name} added!`);
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving review");
    }
  }

  async function toggleStatus(item: StudentReview) {
    const updatedStatus = !item.is_active;
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: item.id, is_active: updatedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setReviews((prev) =>
          prev.map((r) => (r.id === item.id ? { ...r, is_active: updatedStatus } : r))
        );
        showToast(`Review ${updatedStatus ? "activated" : "hidden"}`);
      }
    } catch {
      alert("Error updating review status");
    }
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`Are you sure you want to delete review by "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setReviews((prev) => prev.filter((r) => r.id !== id));
        showToast("Review deleted");
      }
    } catch {
      alert("Error deleting review");
    }
  }

  return (
    <div className="space-y-6">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle size={16} className="text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header matching Website Style */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#BC0202]">
            TESTIMONIALS
          </p>
          <h1 className="font-serif text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight mt-0.5">
            What Our Students Say
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            4.9 / 5.0 Rating (350+ Google Reviews) — Manage all {reviews.length} authentic student reviews displayed on the website.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#reviews"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#BC0202] hover:border-red-200 text-xs font-bold transition shadow-xs"
          >
            <ExternalLink size={14} />
            <span>View on Website</span>
          </Link>
          <button
            onClick={openCreateModal}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold shadow-sm shadow-red-700/20 transition cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Student Review</span>
          </button>
        </div>
      </div>

      {/* Reviews Grid - EXACT MATCH TO PUBLIC WEBSITE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col justify-between bg-white border rounded-2xl p-5 shadow-sm transition-all relative overflow-hidden ${
              item.is_active ? "border-slate-200/90 hover:border-red-200" : "border-slate-300 opacity-60 bg-slate-50"
            }`}
          >
            {/* Top Row: User Avatar, Name, 5 Stars, and Status */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">
                      {item.name}
                    </h3>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5 mt-0.5">
                      {[...Array(item.rating || 5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          className="fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Status Toggle */}
                <button
                  type="button"
                  onClick={() => toggleStatus(item)}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 cursor-pointer ${
                    item.is_active
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-200 text-slate-600"
                  }`}
                  title="Toggle Status"
                >
                  {item.is_active ? "Active" : "Hidden"}
                </button>
              </div>

              {/* Review Text */}
              <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-4">
                &ldquo;{item.review}&rdquo;
              </p>
            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-between pt-3 mt-4 border-t border-slate-100">
              <span className="text-[11px] font-semibold text-slate-400">
                Google Verified Review
              </span>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => openEditModal(item)}
                  className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#BC0202] hover:border-red-200 transition shadow-2xs cursor-pointer"
                  title="Edit Review"
                >
                  <Edit2 size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(item.id, item.name)}
                  className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-400 hover:text-red-600 hover:border-red-200 transition shadow-2xs cursor-pointer"
                  title="Delete Review"
                >
                  <Trash2 size={13} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with exact website fields */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingReview ? `Edit Review (${editingReview.name})` : "Add Student Review"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Karan Pareek"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <ImageUpload
                label="Student Photo"
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                aspectRatio="square"
                helperText="Upload reviewer profile photo (JPG, PNG, WebP)"
              />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Rating (Stars)
                </label>
                <select
                  value={formData.rating}
                  onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                >
                  <option value={5}>5 Stars (★★★★★)</option>
                  <option value={4}>4 Stars (★★★★☆)</option>
                  <option value={3}>3 Stars (★★★☆☆)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Review Text
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  placeholder="Paste student's feedback or Google review text here..."
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="rev_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-[#BC0202] rounded border-slate-300 focus:ring-red-500"
                />
                <label htmlFor="rev_active" className="text-xs font-medium text-slate-700">
                  Visible on website review slider
                </label>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#BC0202] text-white text-xs font-bold hover:bg-[#990202] cursor-pointer"
                >
                  {editingReview ? "Save Changes" : "Add Review"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
