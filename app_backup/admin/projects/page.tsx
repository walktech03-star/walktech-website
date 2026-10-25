'use client';

import { createClientSupabase } from "@/libsupabase";
import { useCallback, useEffect, useRef, useState } from 'react';

type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at: string;
};

export default function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({ title: '', description: '', status: 'active' });
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
    const fetchProjects = async () => {
      try {
        const supabase = createClientSupabase(null as never);
        const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        if (!cancelledRef.current) {
          setProjects((data || []) as Project[]);
          setLoading(false);
        }
      } catch {
        if (!cancelledRef.current) {
          setLoading(false);
        }
      }
    };
    fetchProjects();
    return () => { cancelledRef.current = true; };
  }, [authenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClientSupabase(null as never);
    if (editing) {
      await supabase.from('projects').update(form).eq('id', editing);
      setEditing(null);
    } else {
      await supabase.from('projects').insert(form);
    }
    setForm({ title: '', description: '', status: 'active' });
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    setProjects((data || []) as Project[]);
  };

  const deleteProject = async (id: string) => {
    if (!window.confirm('Delete this project?')) return;
    const supabase = createClientSupabase(null as never);
    await supabase.from('projects').delete().eq('id', id);
    const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
    setProjects((data || []) as Project[]);
  };

  const editProject = (project: Project) => {
    setEditing(project.id);
    setForm({ title: project.title, description: project.description, status: project.status });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm({ title: '', description: '', status: 'active' });
  };

  return (
    <main className="min-h-screen bg-navy-light">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Project Ideas</h1>
          <p className="text-navy-medium">Manage project submissions</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-navy">{editing ? 'Edit Project' : 'Add New Project'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Title</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required className="w-full px-4 py-2 border border-navy-light rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Description</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required className="w-full px-4 py-2 border border-navy-light rounded" rows={3} />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Status</label>
              <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} className="w-full px-4 py-2 border border-navy-light rounded">
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="archived">Archived</option>
              </select>
            </div>
            <div className="flex items-end">
              <button type="submit" className="bg-navy text-white px-6 py-2 rounded hover:bg-navy-light transition-colors">{editing ? 'Save Changes' : 'Add Project'}</button>
              {editing && <button type="button" onClick={cancelEdit} className="ml-2 text-navy-medium hover:text-navy">Cancel</button>}
            </div>
          </div>
        </form>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-light">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-navy">Title</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Description</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-light/20">
              {projects.map((project) => (
                <tr key={project.id}>
                  <td className="px-6 py-3 text-navy-medium">{project.title}</td>
                  <td className="px-6 py-3 text-navy-medium">{project.description}</td>
                  <td className="px-6 py-3 text-navy-medium">{project.status}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => editProject(project)} className="text-navy hover:underline text-sm mr-2">Edit</button>
                    <button onClick={() => deleteProject(project.id)} className="text-red-500 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {projects.length === 0 && (
                <tr><td colSpan={4} className="px-6 py-8 text-center text-navy-medium">No projects found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}