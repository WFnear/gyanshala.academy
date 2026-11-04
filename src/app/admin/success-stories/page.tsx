"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageUpload from "@/components/admin/ImageUpload";
import {
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  ExternalLink,
  X,
  GraduationCap,
  MapPin,
} from "lucide-react";

interface StudentInGermany {
  id: string | number;
  name: string;
  image: string;
  degree?: string;
  university?: string;
  destination?: string;
  course_cleared?: string;
  is_active: boolean;
}

const initialStudents: StudentInGermany[] = [
  {
    id: "sig-1",
    name: "Jayalakshmi S",
    degree: "PhD in Medical Microbiology",
    university: "Universitätsklinikum, Heidelberg",
    image: "/studentsingermany/JAAYALAXMI.png",
    is_active: true,
  },
  {
    id: "sig-2",
    name: "Lavesh Rajput",
    degree: "Technical Logistics",
    university: "University of Duisburg-Essen",
    image: "/studentsingermany/LAVESH RAJPUT.png",
    is_active: true,
  },
  {
    id: "sig-3",
    name: "Mehul Kumawat",
    degree: "Water Science and Engineering",
    university: "Karlsruhe Institute of Technology, Karlsruhe",
    image: "/studentsingermany/MEHUL KUMAWAT.png",
    is_active: true,
  },
  {
    id: "sig-4",
    name: "Rahul Soni",
    degree: "Computational Mechanics",
    university: "Essen Duisburg Universität, Essen",
    image: "/studentsingermany/RAHUL SONI.png",
    is_active: true,
  },
  {
    id: "sig-5",
    name: "Deepak Choudhary",
    degree: "Masters in Business Administration",
    university: "Otto-von-Guericke-University Magdeburg",
    image: "/studentsingermany/DEEPAK CHOUDHARY.png",
    is_active: true,
  },
  {
    id: "sig-6",
    name: "Ankit Maan",
    degree: "Master's in Digital Technologies",
    university: "TU Clausthal, Wolfsburg",
    image: "/studentsingermany/ANKIT MAAN.png",
    is_active: true,
  },
  {
    id: "sig-7",
    name: "Akshat Pandey",
    degree: "MS in Technische Logistik",
    university: "Universität Duisburg-Essen, Osnabrück",
    image: "/studentsingermany/AKSHAT PANDEY.png",
    is_active: true,
  },
  {
    id: "sig-8",
    name: "Suvidhi Loonker",
    degree: "MSc International Management",
    university: "Hochschule Fulda",
    image: "/studentsingermany/SUVIDHI LOONKER.png",
    is_active: true,
  },
  {
    id: "sig-9",
    name: "Anukalp Lawania",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    image: "/studentsingermany/ANUKALP LAWANIA.png",
    is_active: true,
  },
  {
    id: "sig-10",
    name: "Shubhangi",
    degree: "M.Sc. in Data Science",
    university: "Ludwig Maximilian University of Munich",
    image: "/studentsingermany/SHUBHANGI.png",
    is_active: true,
  },
  {
    id: "sig-11",
    name: "Shubham Gupta",
    degree: "MS in Technical Logistics",
    university: "Universität Duisburg-Essen, Magdeburg",
    image: "/studentsingermany/Shubham Gupta.png",
    is_active: true,
  },
  {
    id: "sig-12",
    name: "Saurabh Yadav",
    degree: "MSc in Mechatronics",
    university: "Universität Duisburg-Essen, Mülheim an der Ruhr, NRW",
    image: "/studentsingermany/SAURAV YADAV.png",
    is_active: true,
  },
  {
    id: "sig-13",
    name: "Riya Ahuja",
    degree: "MSc in Data Science",
    university: "Technical University of Braunschweig",
    image: "/studentsingermany/RIYA AHUJA.png",
    is_active: true,
  },
  {
    id: "sig-14",
    name: "Shivam Tak",
    degree: "Commercial Vehicle Technology",
    university: "RPTU Rheinland-Pfälzische Technische Universität",
    image: "/studentsingermany/SHIVAM TAK.png",
    is_active: true,
  },
  {
    id: "sig-15",
    name: "Yuganshu Sharma",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    image: "/studentsingermany/YUGANSHU SHARMA.png",
    is_active: true,
  },
  {
    id: "sig-16",
    name: "Shailja Rathore",
    degree: "Scientific Instrumentation (M.Sc.)",
    university: "Ernst-Abbe-Hochschule Jena",
    image: "/studentsingermany/SHAILJJA RATHOD.png",
    is_active: true,
  },
];

export default function StudentsInGermanyAdminPage() {
  const [students, setStudents] = useState<StudentInGermany[]>(initialStudents);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<StudentInGermany | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    degree: "",
    university: "",
    image: "",
    is_active: true,
  });
  const [toast, setToast] = useState<string | null>(null);

  async function loadStudents() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/homepage/students");
      const json = await res.json();
      if (json.success && json.data) {
        setStudents(json.data);
      }
    } catch (e) {
      console.error("Failed to load students:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  }

  function openAddModal() {
    setEditingStudent(null);
    setFormData({
      name: "",
      degree: "",
      university: "",
      image: "/studentsingermany/AKSHAT PANDEY.png",
      is_active: true,
    });
    setIsModalOpen(true);
  }

  function openEditModal(student: StudentInGermany) {
    setEditingStudent(student);
    setFormData({
      name: student.name,
      degree: student.degree || student.course_cleared || "",
      university: student.university || student.destination || "",
      image: student.image,
      is_active: student.is_active,
    });
    setIsModalOpen(true);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name) return;

    try {
      if (editingStudent) {
        const res = await fetch("/api/admin/homepage/students", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: editingStudent.id,
            ...formData,
            course_cleared: formData.degree,
            destination: formData.university,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStudents((prev) =>
            prev.map((s) =>
              s.id === editingStudent.id
                ? {
                    ...s,
                    ...formData,
                    course_cleared: formData.degree,
                    destination: formData.university,
                  }
                : s
            )
          );
          showToast("Student updated!");
        }
      } else {
        const res = await fetch("/api/admin/homepage/students", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            course_cleared: formData.degree,
            destination: formData.university,
          }),
        });
        const data = await res.json();
        if (data.success) {
          setStudents([data.data, ...students]);
          showToast("New student added!");
        }
      }
      setIsModalOpen(false);
    } catch {
      alert("Error saving student data");
    }
  }

  async function handleToggle(student: StudentInGermany) {
    const updatedStatus = !student.is_active;
    try {
      const res = await fetch("/api/admin/homepage/students", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: student.id, is_active: updatedStatus }),
      });
      const data = await res.json();
      if (data.success) {
        setStudents((prev) =>
          prev.map((s) => (s.id === student.id ? { ...s, is_active: updatedStatus } : s))
        );
        showToast("Visibility updated");
      }
    } catch {
      alert("Error updating visibility");
    }
  }

  async function handleDelete(id: string | number, name: string) {
    if (!confirm(`Delete student "${name}"?`)) return;
    try {
      const res = await fetch(`/api/admin/homepage/students?id=${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (data.success) {
        setStudents((prev) => prev.filter((s) => s.id !== id));
        showToast("Student deleted");
      }
    } catch {
      alert("Error deleting student");
    }
  }

  return (
    <div className="space-y-6">
      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-xl border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle size={16} className="text-emerald-400" />
          <span>{toast}</span>
        </div>
      )}

      {/* Header - EXACT MATCH TO PUBLIC WEBSITE */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#A61911]">
            STUDENT SUCCESS STORIES
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-zinc-900 tracking-tight mt-1">
            Our Students in Germany
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
            Manage all 16 alumni cards with authentic degree and German university details.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link
            href="/#students-in-germany"
            target="_blank"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#BC0202] hover:border-red-200 text-xs font-bold transition shadow-xs"
          >
            <ExternalLink size={14} />
            <span>View on Website</span>
          </Link>
          <button
            onClick={openAddModal}
            className="flex items-center gap-2 px-4 py-2 bg-[#BC0202] hover:bg-[#990202] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition cursor-pointer"
          >
            <Plus size={16} />
            <span>Add Student Card</span>
          </button>
        </div>
      </div>

      {/* Students Grid - EXACT MATCH TO OFFICIAL POSTER & WEBSITE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {students.map((student) => {
          const deg = student.degree || student.course_cleared;
          const uni = student.university || student.destination;
          return (
            <div
              key={student.id}
              className={`bg-white border rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between transition-all group ${
                student.is_active ? "border-zinc-200 hover:shadow-md hover:border-red-200" : "border-slate-300 opacity-60 bg-slate-100"
              }`}
            >
              <div>
                {/* Square Aspect Ratio Image */}
                <div className="relative aspect-square bg-zinc-100 overflow-hidden">
                  <Image
                    src={student.image}
                    alt={student.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button
                    type="button"
                    onClick={() => handleToggle(student)}
                    className={`absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full text-[10px] font-bold shadow-sm cursor-pointer ${
                      student.is_active ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {student.is_active ? "Active" : "Hidden"}
                  </button>
                </div>

                {/* Name & Academic Details (Exact match to official PDF) */}
                <div className="p-3 bg-white border-t border-zinc-100 text-center">
                  <h3 className="font-bold text-sm sm:text-base text-zinc-900 group-hover:text-[#BC0202] transition-colors leading-snug">
                    {student.name}
                  </h3>
                  {deg && (
                    <p className="text-xs font-semibold text-[#BC0202] mt-1 leading-snug">
                      {deg}
                    </p>
                  )}
                  {uni && (
                    <p className="text-[11px] font-medium text-slate-500 mt-0.5 leading-snug">
                      {uni}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Alumni Card
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => openEditModal(student)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#BC0202] shadow-2xs cursor-pointer"
                    title="Edit Student"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(student.id, student.name)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-400 hover:text-red-600 shadow-2xs cursor-pointer"
                    title="Delete Student"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal with Authentic Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-bold text-slate-900">
                {editingStudent ? `Edit ${editingStudent.name}` : "Add Student Card"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-4 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Student Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Jayalakshmi S"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Degree / Program in Germany
                </label>
                <input
                  type="text"
                  value={formData.degree}
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  placeholder="e.g. PhD in Medical Microbiology"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  German University &amp; City
                </label>
                <input
                  type="text"
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  placeholder="e.g. Universitätsklinikum, Heidelberg"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#BC0202]"
                />
              </div>

              <ImageUpload
                label="Student Photo"
                value={formData.image}
                onChange={(url) => setFormData({ ...formData, image: url })}
                aspectRatio="square"
                helperText="Upload student photo from your computer or phone"
              />

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="stu_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                  className="w-4 h-4 text-[#BC0202] rounded border-slate-300 focus:ring-red-500"
                />
                <label htmlFor="stu_active" className="text-xs font-medium text-slate-700">
                  Visible on website slider
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
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
