"use client";

import { useState, useEffect } from "react";
import {
  HelpCircle,
  Plus,
  Edit2,
  Trash2,
  Check,
  Eye,
  EyeOff,
  Search,
  Loader2,
  List,
} from "lucide-react";

interface FAQ {
  id: number | string;
  category: "general" | "courses" | "goethe" | "pathways" | "admission" | string;
  categoryLabel?: string;
  question: string;
  answers: string[];
  list?: string[];
  postList?: string[];
  is_active: boolean;
  order_index?: number;
}

const CATEGORIES = [
  { id: "all", label: "All Questions" },
  { id: "general", label: "General Questions" },
  { id: "courses", label: "Courses & Learning" },
  { id: "goethe", label: "Goethe Exam" },
  { id: "pathways", label: "Study & Work" },
  { id: "admission", label: "Admission & Fees" },
];

export default function AdminFAQsPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const [search, setSearch] = useState("");
  const [toast, setToast] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [formData, setFormData] = useState({
    category: "general",
    categoryLabel: "General",
    question: "",
    answersText: "",
    listText: "",
    postListText: "",
    is_active: true,
  });

  async function fetchFaqs() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/faqs");
      const json = await res.json();
      if (json.success && json.data) {
        setFaqs(json.data);
      }
    } catch (err) {
      console.error("Failed to load FAQs:", err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFaqs();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function handleToggle(id: number | string, is_active: boolean) {
    try {
      const res = await fetch("/api/admin/faqs", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, is_active: !is_active }),
      });
      const data = await res.json();
      if (data.success) {
        setFaqs(faqs.map((f) => (String(f.id) === String(id) ? { ...f, is_active: !is_active } : f)));
        showToast("FAQ status updated");
      }
    } catch {
      alert("Error updating FAQ status");
    }
  }

  async function handleDelete(id: number | string, q: string) {
    if (!confirm(`Are you sure you want to delete this FAQ?\n\n"${q}"`)) return;
    try {
      const res = await fetch(`/api/admin/faqs?id=${id}`, { method: "DELETE" });
      const data = await res.json();
      if (data.success) {
        setFaqs(faqs.filter((f) => String(f.id) !== String(id)));
        showToast("FAQ deleted successfully");
      }
    } catch {
      alert("Error deleting FAQ");
    }
  }

  function openEdit(faq: FAQ) {
    setEditingFaq(faq);
    setFormData({
      category: faq.category,
      categoryLabel: faq.categoryLabel || CATEGORIES.find((c) => c.id === faq.category)?.label || "General",
      question: faq.question,
      answersText: Array.isArray(faq.answers) ? faq.answers.join("\n\n") : String(faq.answers || ""),
      listText: faq.list ? faq.list.join("\n") : "",
      postListText: faq.postList ? faq.postList.join("\n") : "",
      is_active: faq.is_active !== false,
    });
    setIsModalOpen(true);
  }

  function openAdd() {
    setEditingFaq(null);
    setFormData({
      category: activeTab === "all" ? "general" : activeTab,
      categoryLabel: CATEGORIES.find((c) => c.id === (activeTab === "all" ? "general" : activeTab))?.label || "General",
      question: "",
      answersText: "",
      listText: "",
      postListText: "",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  async function handleModalSave(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.question || !formData.answersText.trim()) return;

    setSaving(true);
    try {
      const payload = {
        category: formData.category,
        categoryLabel: CATEGORIES.find((c) => c.id === formData.category)?.label || "General",
        question: formData.question.trim(),
        answers: formData.answersText.split("\n\n").map((a) => a.trim()).filter(Boolean),
        list: formData.listText.trim()
          ? formData.listText.split("\n").map((l) => l.trim()).filter(Boolean)
          : undefined,
        postList: formData.postListText.trim()
          ? formData.postListText.split("\n").map((p) => p.trim()).filter(Boolean)
          : undefined,
        is_active: formData.is_active,
      };

      if (editingFaq) {
        const res = await fetch("/api/admin/faqs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id: editingFaq.id, ...payload }),
        });
        const data = await res.json();
        if (data.success) {
          setFaqs(faqs.map((f) => (String(f.id) === String(editingFaq.id) ? { ...f, ...payload } : f)));
          showToast("FAQ updated successfully");
        }
      } else {
        const res = await fetch("/api/admin/faqs", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        if (data.success && data.data) {
          setFaqs([...faqs, data.data]);
          showToast("New FAQ added successfully");
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving FAQ");
    } finally {
      setSaving(false);
    }
  }

  const filteredFaqs = faqs
    .filter((f) => (activeTab === "all" ? true : f.category === activeTab))
    .filter(
      (f) =>
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        (Array.isArray(f.answers) && f.answers.some((a) => a.toLowerCase().includes(search.toLowerCase())))
    );

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#BC0202]" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <HelpCircle className="text-[#BC0202]" size={26} />
            <span>Frequently Asked Questions</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all 28 questions across General, Courses, Goethe Exam, Pathways &amp; Admission
          </p>
        </div>

        <button
          onClick={openAdd}
          className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition"
        >
          <Plus size={16} />
          <span>Add New FAQ</span>
        </button>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      {/* Category Tabs & Search Bar */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200">
          {CATEGORIES.map((cat) => {
            const count =
              cat.id === "all" ? faqs.length : faqs.filter((f) => f.category === cat.id).length;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`cursor-pointer px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1.5 transition ${
                  isActive
                    ? "bg-[#BC0202] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive ? "bg-white/25 text-white" : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs by question or answer keyword..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200/90 rounded-xl shadow-2xs focus:outline-none focus:border-[#BC0202]"
          />
        </div>
      </div>

      {/* FAQs List */}
      <div className="space-y-3.5">
        {filteredFaqs.map((faq, index) => {
          const categoryName =
            CATEGORIES.find((c) => c.id === faq.category)?.label || faq.category;

          return (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl border p-4 sm:p-5 shadow-xs transition-all space-y-3 ${
                faq.is_active ? "border-slate-200/90" : "border-slate-200 opacity-60 bg-slate-50"
              }`}
            >
              {/* Question Row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <span className="w-7 h-7 rounded-lg bg-red-50 text-[#BC0202] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 leading-snug">
                      {faq.question}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {categoryName}
                      </span>
                      {!faq.is_active && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200 text-slate-600">
                          Hidden
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => openEdit(faq)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer"
                    title="Edit FAQ"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => handleToggle(faq.id, faq.is_active)}
                    className={`p-1.5 rounded-lg cursor-pointer transition ${
                      faq.is_active ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400"
                    }`}
                    title={faq.is_active ? "Visible" : "Hidden"}
                  >
                    {faq.is_active ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                  <button
                    onClick={() => handleDelete(faq.id, faq.question)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
                    title="Delete FAQ"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* Answers & Bullets */}
              <div className="pl-10 space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {Array.isArray(faq.answers) ? (
                  faq.answers.map((ans, aIdx) => <p key={aIdx}>{ans}</p>)
                ) : (
                  <p>{faq.answers}</p>
                )}

                {faq.list && faq.list.length > 0 && (
                  <ul className="space-y-1 pl-4 my-2 list-disc text-slate-700">
                    {faq.list.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {faq.postList && faq.postList.length > 0 && (
                  <div className="text-slate-500 italic pt-1">
                    {faq.postList.map((post, pIdx) => (
                      <p key={pIdx}>{post}</p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Add / Edit FAQ Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              {editingFaq ? "Edit FAQ Question" : "Add New FAQ Question"}
            </h2>

            <form onSubmit={handleModalSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                >
                  <option value="general">General Questions</option>
                  <option value="courses">Courses &amp; Learning</option>
                  <option value="goethe">Goethe Exam</option>
                  <option value="pathways">Study &amp; Work</option>
                  <option value="admission">Admission &amp; Fees</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  FAQ Question
                </label>
                <input
                  type="text"
                  required
                  value={formData.question}
                  onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                  placeholder="e.g. Can I learn German without any previous knowledge?"
                  className="w-full px-3.5 py-2 text-sm font-semibold border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Answer Paragraphs (separate multiple paragraphs with double enter)
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.answersText}
                  onChange={(e) => setFormData({ ...formData, answersText: e.target.value })}
                  placeholder="Write the full answer here..."
                  className="w-full px-3.5 py-2 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Optional Bullet Points (one per line)
                </label>
                <textarea
                  rows={3}
                  value={formData.listText}
                  onChange={(e) => setFormData({ ...formData, listText: e.target.value })}
                  placeholder="A1 - Beginner&#10;A2 - Elementary&#10;B1 - Intermediate"
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Optional Post-bullet note
                </label>
                <input
                  type="text"
                  value={formData.postListText}
                  onChange={(e) => setFormData({ ...formData, postListText: e.target.value })}
                  placeholder="e.g. Course and batch availability may vary."
                  className="w-full px-3.5 py-2 text-xs border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="faq-active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="rounded text-[#BC0202] focus:ring-[#BC0202]"
                />
                <label htmlFor="faq-active" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  FAQ is visible on the website
                </label>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="cursor-pointer px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="cursor-pointer px-5 py-2 text-xs font-bold text-white bg-[#BC0202] hover:bg-[#990202] rounded-xl shadow-sm transition disabled:opacity-50"
                >
                  {saving ? "Saving..." : "Save FAQ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
