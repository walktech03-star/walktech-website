'use client';

import { createClientSupabase } from "@/libsupabase";
import { useCallback, useEffect, useRef, useState } from 'react';

type Course = {
  id: string;
  title: string;
  instructor: string;
  price: number;
  status: string;
  created_at: string;
};

export default function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', instructor: '', price: '', status: 'active' });
  const [authenticated, setAuthenticated] = useState(false);
  const cancelledRef = useRef(false);

  const checkAuth = useCallback(async () => {
    try {
      const supabase = createClientSupabase(null as never);
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError || !session?.user) {
        window.location.href = "/admin/login";
        return;
      }
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", session.user.id)
        .single();
      if (profileError || !profile || profile.role !== "admin") {
        window.location.href = "/";
        return;
      }
      if (!cancelledRef.current) {
        setAuthenticated(true);
      }
    } catch {
      if (!cancelledRef.current) {
        window.location.href = "/admin/login";
      }
    } finally {
      if (!cancelledRef.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    cancelledRef.current = false;
    checkAuth();
    return () => { cancelledRef.current = true; };
  }, [checkAuth]);

  if (loading && !authenticated) {
    return (
      <main className="min-h-screen bg-navy-light flex items-center justify-center p-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold">Walk Tech Admin</h1>
          <p className="mt-2">Loading...</p>
        </div>
      </main>
    );
  }

  if (!authenticated) return null;

  useEffect(() => {
    if (!authenticated) return;
    cancelledRef.current = false;
    const fetchCourses = async () => {
      try {
        const supabase = createClientSupabase(null as never);
        const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
        if (!cancelledRef.current) {
          setCourses((data || []) as Course[]);
          setLoading(false);
        }
      } catch {
        if (!cancelledRef.current) {
          setLoading(false);
        }
      }
    };
    fetchCourses();
    return () => { cancelledRef.current = true; };
  }, [authenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClientSupabase(null as never);
    const course = { ...form, price: parseFloat(form.price) };
    if (editing) {
      await supabase.from('courses').update(course).eq('id', editing);
      setEditing(null);
    } else {
      await supabase.from('courses').insert(course);
    }
    setForm({ title: '', instructor: '', price: '', status: 'active' });
    const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    setCourses((data || []) as Course[]);
  };

  const deleteCourse = async (id: string) => {
    if (!window.confirm('Delete this course?')) return;
    const supabase = createClientSupabase(null as never);
    await supabase.from('courses').delete().eq('id', id);
    const { data } = await supabase.from('courses').select('*').order('created_at', { ascending: false });
    setCourses((data || []) as Course[]);
  };

  const editCourse = (course: Course) => {
    setEditing(course.id);
    setForm({ title: course.title, instructor: course.instructor, price: String(course.price), status: course.status });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm({ title: '', instructor: '', price: '', status: 'active' });
  };

  return (
    <main className="min-h-screen bg-navy-light">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Courses</h1>
          <p className="text-navy-medium">Manage your course catalog</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-navy">{editing ? 'Edit Course' : 'Add New Course'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Title</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2 border border-navy-light rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Instructor</label>
              <input type="text" value={form.instructor} onChange={(e) => setForm({ ...form, instructor: e.target.value })} required className="w-full px-4 py-2 border border-navy-light rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Price</label>
              <input type="number" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required className="w-full px-4 py-2 border border-navy-light rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2 border border-navy-light rounded">
                <option value="active">Active</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="bg-navy text-white px-6 py-2 rounded hover:bg-navy-light transition-colors">{editing ? 'Save Changes' : 'Add Course'}</button>
              {editing && <button type="button" onClick={cancelEdit} className="ml-2 text-navy-medium hover:text-navy">Cancel</button>}
            </div>
          </div>
        </form>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-light">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-navy">Title</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Instructor</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Price</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-light/20">
              {courses.map((course) => (
                <tr key={course.id}>
                  <td className="px-6 py-3 text-navy-medium">{course.title}</td>
                  <td className="px-6 py-3 text-navy-medium">{course.instructor}</td>
                  <td className="px-6 py-3 text-navy-medium">${course.price}</td>
                  <td className="px-6 py-3 text-navy-medium">{course.status}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => editCourse(course)} className="text-navy hover:underline text-sm mr-2">Edit</button>
                    <button onClick={() => deleteCourse(course.id)} className="text-red-500 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {courses.length === 0 && (
                <tr><td colSpan={5} className="px-6 py-8 text-center text-navy-medium">No courses found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}