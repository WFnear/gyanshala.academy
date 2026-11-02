"use client";

import { useState } from "react";
import { ShieldCheck, Plus, UserCheck, Trash2, Edit2, Key } from "lucide-react";

interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: "Super Admin" | "Admin" | "Editor" | "Counselor";
  status: "Active" | "Inactive";
  lastLogin: string;
}

const initialUsers: AdminUser[] = [
  {
    id: "usr-1",
    name: "Dilip Sinsinwar Sir",
    email: "admin@gyanshala.in",
    role: "Super Admin",
    status: "Active",
    lastLogin: "Today, 02:15 PM",
  },
  {
    id: "usr-2",
    name: "Admissions Desk",
    email: "admissions@gyanshala.in",
    role: "Counselor",
    status: "Active",
    lastLogin: "Yesterday, 06:10 PM",
  },
  {
    id: "usr-3",
    name: "Content Manager",
    email: "content@gyanshala.in",
    role: "Editor",
    status: "Active",
    lastLogin: "27 Oct 2026",
  },
];

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>(initialUsers);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<AdminUser["role"]>("Admin");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser: AdminUser = {
      id: `usr-${Date.now()}`,
      name,
      email,
      role,
      status: "Active",
      lastLogin: "Never",
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
    setName("");
    setEmail("");
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this admin user account?")) {
      setUsers(users.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="border-l-4 border-[#BC0202] pl-3.5">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Admin Users &amp; Roles
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Manage administrative access, roles and permissions for Gyanshala team members
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition cursor-pointer self-start sm:self-auto"
        >
          <Plus size={16} />
          <span>Invite New Admin</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50/80 border-b border-slate-200/80 text-slate-500 font-bold uppercase text-[11px] tracking-wider">
              <tr>
                <th className="py-3 px-4">Admin User</th>
                <th className="py-3 px-4">Email</th>
                <th className="py-3 px-4">Role</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Last Activity</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/70 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#BC0202]/10 text-[#BC0202] font-black flex items-center justify-center text-xs">
                      {u.name.charAt(0)}
                    </div>
                    <span>{u.name}</span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-600">{u.email}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-[#BC0202] border border-red-200">
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-xs text-slate-500">{u.lastLogin}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDelete(u.id)}
                      disabled={u.role === "Super Admin"}
                      className="p-1.5 text-slate-400 hover:text-red-600 disabled:opacity-30 rounded-lg transition"
                      title="Remove User"
                    >
                      <Trash2 size={15} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Invite Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
              <h2 className="text-lg font-bold text-slate-900">
                Add Team Member
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Ashveer Singh"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="team@gyanshala.in"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Assign Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as any)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 focus:bg-white focus:outline-none focus:border-[#BC0202]"
                >
                  <option value="Admin">Admin (Full Content &amp; Leads)</option>
                  <option value="Counselor">Counselor (Leads &amp; Students Only)</option>
                  <option value="Editor">Editor (Website Content &amp; Blogs Only)</option>
                </select>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-[#BC0202] hover:bg-[#990202] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md transition cursor-pointer"
                >
                  Create Admin Account
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
