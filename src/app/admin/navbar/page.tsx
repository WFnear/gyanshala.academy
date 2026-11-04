"use client";

import { useState, useEffect } from "react";
import {
  Compass,
  Plus,
  Trash2,
  Edit2,
  Save,
  Check,
  Eye,
  EyeOff,
  MoveUp,
  MoveDown,
  Layers,
  ExternalLink,
  ChevronRight,
  AlertCircle,
  Loader2,
} from "lucide-react";

interface SubItem {
  id: string;
  label: string;
  href: string;
  order_index: number;
  is_active: boolean;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  order_index: number;
  is_active: boolean;
  children?: SubItem[];
}

export default function NavbarAdminPage() {
  const [items, setItems] = useState<NavItem[]>([]);
  const [cta, setCta] = useState({ text: "Enquiry Now", href: "/enquiry", is_active: true });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Modal State for adding/editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<{ parentId?: string; item: any } | null>(null);
  const [modalForm, setModalForm] = useState({ label: "", href: "", is_active: true });

  useEffect(() => {
    async function loadNavbar() {
      try {
        const res = await fetch("/api/admin/cms/navbar");
        const json = await res.json();
        if (json.success && json.data) {
          setItems(json.data.items || []);
          if (json.data.cta) setCta(json.data.cta);
        }
      } catch (e) {
        console.error("Failed to load navbar data:", e);
      } finally {
        setLoading(false);
      }
    }
    loadNavbar();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  async function saveChanges(updatedItems: NavItem[], updatedCta = cta) {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/cms/navbar", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: updatedItems, cta: updatedCta }),
      });
      const data = await res.json();
      if (data.success) {
        setItems(data.items);
        setCta(data.cta);
        showToast("Navbar changes saved successfully!");
      }
    } catch (e) {
      alert("Error saving navbar changes");
    } finally {
      setSaving(false);
    }
  }

  function handleToggleActive(itemId: string, parentId?: string) {
    let updated: NavItem[];
    if (!parentId) {
      updated = items.map((i) => (i.id === itemId ? { ...i, is_active: !i.is_active } : i));
    } else {
      updated = items.map((p) => {
        if (p.id === parentId && p.children) {
          return {
            ...p,
            children: p.children.map((c) => (c.id === itemId ? { ...c, is_active: !c.is_active } : c)),
          };
        }
        return p;
      });
    }
    setItems(updated);
    saveChanges(updated);
  }

  function handleDelete(itemId: string, parentId?: string) {
    if (!confirm("Are you sure you want to delete this navigation item?")) return;
    let updated: NavItem[];
    if (!parentId) {
      updated = items.filter((i) => i.id !== itemId);
    } else {
      updated = items.map((p) => {
        if (p.id === parentId && p.children) {
          return {
            ...p,
            children: p.children.filter((c) => c.id !== itemId),
          };
        }
        return p;
      });
    }
    setItems(updated);
    saveChanges(updated);
  }

  function handleMove(index: number, direction: "up" | "down", parentId?: string) {
    let updated = [...items];
    if (!parentId) {
      const targetIndex = direction === "up" ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex >= updated.length) return;
      const temp = updated[index];
      updated[index] = updated[targetIndex];
      updated[targetIndex] = temp;
      updated = updated.map((item, idx) => ({ ...item, order_index: idx + 1 }));
    } else {
      updated = updated.map((p) => {
        if (p.id === parentId && p.children) {
          const children = [...p.children];
          const targetIndex = direction === "up" ? index - 1 : index + 1;
          if (targetIndex >= 0 && targetIndex < children.length) {
            const temp = children[index];
            children[index] = children[targetIndex];
            children[targetIndex] = temp;
          }
          return { ...p, children: children.map((c, idx) => ({ ...c, order_index: idx + 1 })) };
        }
        return p;
      });
    }
    setItems(updated);
    saveChanges(updated);
  }

  function openEditModal(item: any, parentId?: string) {
    setEditingItem({ parentId, item });
    setModalForm({ label: item.label, href: item.href, is_active: item.is_active });
    setIsModalOpen(true);
  }

  function openAddModal(parentId?: string) {
    setEditingItem({ parentId, item: null });
    setModalForm({ label: "", href: "", is_active: true });
    setIsModalOpen(true);
  }

  function handleModalSave(e: React.FormEvent) {
    e.preventDefault();
    if (!modalForm.label || !modalForm.href) return;

    let updated = [...items];
    if (!editingItem?.parentId) {
      // Top-level item
      if (editingItem?.item) {
        // Edit
        updated = updated.map((i) =>
          i.id === editingItem.item.id ? { ...i, label: modalForm.label, href: modalForm.href } : i
        );
      } else {
        // Add
        updated.push({
          id: "nav-" + Date.now(),
          label: modalForm.label,
          href: modalForm.href,
          order_index: updated.length + 1,
          is_active: modalForm.is_active,
        });
      }
    } else {
      // Submenu item
      const parentId = editingItem.parentId;
      updated = updated.map((p) => {
        if (p.id === parentId) {
          const children = p.children ? [...p.children] : [];
          if (editingItem.item) {
            // Edit
            const cIndex = children.findIndex((c) => c.id === editingItem.item.id);
            if (cIndex !== -1) {
              children[cIndex] = { ...children[cIndex], label: modalForm.label, href: modalForm.href };
            }
          } else {
            // Add
            children.push({
              id: "sub-" + Date.now(),
              label: modalForm.label,
              href: modalForm.href,
              order_index: children.length + 1,
              is_active: modalForm.is_active,
            });
          }
          return { ...p, children };
        }
        return p;
      });
    }

    setItems(updated);
    saveChanges(updated);
    setIsModalOpen(false);
  }

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
            <Compass className="text-[#BC0202]" size={26} />
            <span>Navbar Menu Management</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Edit menu labels, links, dropdowns, and submenus of the live website navbar
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => openAddModal()}
            className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition"
          >
            <Plus size={16} />
            <span>Add Menu Item</span>
          </button>
        </div>
      </div>

      {toast && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 animate-fade-in">
          <Check size={16} className="text-emerald-600" />
          <span>{toast}</span>
        </div>
      )}

      {/* CTA Button Editor Card */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold">
            CTA
          </div>
          <div>
            <div className="text-sm font-bold text-slate-900">Right Action Button</div>
            <div className="text-xs text-slate-500">
              Label: <strong className="text-slate-700">{cta.text}</strong> • Link:{" "}
              <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-700">{cta.href}</code>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              const text = prompt("Enter button label:", cta.text);
              if (text) {
                const href = prompt("Enter button link (/enquiry):", cta.href) || cta.href;
                const newCta = { ...cta, text, href };
                setCta(newCta);
                saveChanges(items, newCta);
              }
            }}
            className="cursor-pointer px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
          >
            Edit CTA Button
          </button>
          <button
            onClick={() => {
              const newCta = { ...cta, is_active: !cta.is_active };
              setCta(newCta);
              saveChanges(items, newCta);
            }}
            className={`cursor-pointer px-3 py-1.5 text-xs font-semibold rounded-lg transition ${
              cta.is_active ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-slate-100 text-slate-400"
            }`}
          >
            {cta.is_active ? "Visible" : "Hidden"}
          </button>
        </div>
      </div>

      {/* Navigation Items List */}
      <div className="space-y-3">
        {items.map((item, index) => {
          const hasChildren = item.children && item.children.length > 0;

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all"
            >
              {/* Item Header Row */}
              <div className="p-3.5 sm:p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-500 font-bold text-xs flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 truncate">{item.label}</span>
                      {hasChildren && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-50 text-[#BC0202] border border-red-100 shrink-0">
                          Dropdown ({item.children?.length})
                        </span>
                      )}
                      {!item.is_active && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 shrink-0">
                          Hidden
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 truncate">
                      Link: <span className="font-mono text-slate-600">{item.href}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                  {/* Move Up/Down */}
                  <button
                    onClick={() => handleMove(index, "up")}
                    disabled={index === 0}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30 cursor-pointer"
                    title="Move Up"
                  >
                    <MoveUp size={15} />
                  </button>
                  <button
                    onClick={() => handleMove(index, "down")}
                    disabled={index === items.length - 1}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 disabled:opacity-30 cursor-pointer"
                    title="Move Down"
                  >
                    <MoveDown size={15} />
                  </button>

                  {/* Add Submenu Item */}
                  <button
                    onClick={() => openAddModal(item.id)}
                    className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg flex items-center gap-1 cursor-pointer"
                    title="Add Dropdown Item"
                  >
                    <Plus size={13} />
                    <span className="hidden sm:inline">Add Submenu</span>
                  </button>

                  {/* Edit */}
                  <button
                    onClick={() => openEditModal(item)}
                    className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-600 cursor-pointer"
                    title="Edit Item"
                  >
                    <Edit2 size={15} />
                  </button>

                  {/* Toggle Active */}
                  <button
                    onClick={() => handleToggleActive(item.id)}
                    className={`p-1.5 rounded-lg cursor-pointer transition ${
                      item.is_active ? "text-emerald-600 hover:bg-emerald-50" : "text-slate-400 hover:bg-slate-100"
                    }`}
                    title={item.is_active ? "Hide Item" : "Show Item"}
                  >
                    {item.is_active ? <Eye size={15} /> : <EyeOff size={15} />}
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-red-500 cursor-pointer"
                    title="Delete Item"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>

              {/* Submenu Dropdown Items (If Any) */}
              {hasChildren && (
                <div className="bg-slate-50/70 border-t border-slate-100 p-2 sm:p-3 space-y-1.5 pl-6 sm:pl-10">
                  {item.children?.map((sub, sIdx) => (
                    <div
                      key={sub.id}
                      className="bg-white p-2 sm:p-2.5 rounded-xl border border-slate-200/70 flex items-center justify-between gap-2 shadow-2xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <ChevronRight size={13} className="text-slate-400 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 truncate">
                          {sub.label}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 truncate">
                          {sub.href}
                        </span>
                        {!sub.is_active && (
                          <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-500">
                            Hidden
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => handleMove(sIdx, "up", item.id)}
                          disabled={sIdx === 0}
                          className="p-1 hover:bg-slate-100 text-slate-400 disabled:opacity-30 cursor-pointer"
                        >
                          <MoveUp size={13} />
                        </button>
                        <button
                          onClick={() => handleMove(sIdx, "down", item.id)}
                          disabled={sIdx === item.children!.length - 1}
                          className="p-1 hover:bg-slate-100 text-slate-400 disabled:opacity-30 cursor-pointer"
                        >
                          <MoveDown size={13} />
                        </button>
                        <button
                          onClick={() => openEditModal(sub, item.id)}
                          className="p-1 hover:bg-slate-100 text-slate-600 cursor-pointer"
                        >
                          <Edit2 size={13} />
                        </button>
                        <button
                          onClick={() => handleToggleActive(sub.id, item.id)}
                          className={`p-1 cursor-pointer ${
                            sub.is_active ? "text-emerald-600" : "text-slate-400"
                          }`}
                        >
                          {sub.is_active ? <Eye size={13} /> : <EyeOff size={13} />}
                        </button>
                        <button
                          onClick={() => handleDelete(sub.id, item.id)}
                          className="p-1 hover:bg-red-50 text-red-500 cursor-pointer"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 animate-scale-in">
            <h2 className="text-lg font-bold text-slate-900 mb-4">
              {editingItem?.item
                ? `Edit ${editingItem.parentId ? "Submenu" : "Menu"} Item`
                : `Add New ${editingItem?.parentId ? "Submenu" : "Menu"} Item`}
            </h2>

            <form onSubmit={handleModalSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Menu Label
                </label>
                <input
                  type="text"
                  required
                  value={modalForm.label}
                  onChange={(e) => setModalForm({ ...modalForm, label: e.target.value })}
                  placeholder="e.g. German Courses"
                  className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Target Link (href)
                </label>
                <input
                  type="text"
                  required
                  value={modalForm.href}
                  onChange={(e) => setModalForm({ ...modalForm, href: e.target.value })}
                  placeholder="e.g. /german or /about-us"
                  className="w-full px-3.5 py-2.5 text-sm font-mono border border-slate-300 rounded-xl focus:border-[#BC0202] focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-active"
                  checked={modalForm.is_active}
                  onChange={(e) => setModalForm({ ...modalForm, is_active: e.target.checked })}
                  className="rounded text-[#BC0202] focus:ring-[#BC0202]"
                />
                <label htmlFor="modal-active" className="text-xs font-semibold text-slate-700 cursor-pointer">
                  Item is visible in Navbar
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
                  {saving ? "Saving..." : "Save Item"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
