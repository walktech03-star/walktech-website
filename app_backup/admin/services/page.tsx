'use client';

import { createClientSupabase } from "@/libsupabase";
import { useCallback, useEffect, useRef, useState } from 'react';

type Service = {
  id: string;
  name: string;
  description: string;
  slug: string;
  is_active: boolean;
  sort_order: number;
  created_at: string;
};

export default function AdminServices() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: '',
    description: '',
    slug: '',
    is_active: 'true',
    sort_order: '0',
  });
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

  useEffect(() => {
    if (!authenticated) return;
    cancelledRef.current = false;
    const fetchServices = async () => {
      try {
        const supabase = createClientSupabase(null as never);
        const { data } = await supabase.from('engineering_services').select('*').order('sort_order', { ascending: true });
        if (!cancelledRef.current) {
          setServices((data || []) as Service[]);
          setLoading(false);
        }
      } catch {
        if (!cancelledRef.current) {
          setLoading(false);
        }
      }
    };
    fetchServices();
    return () => { cancelledRef.current = true; };
  }, [authenticated]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClientSupabase(null as never);
    const service = {
      name: form.name,
      description: form.description,
      slug: form.slug,
      is_active: form.is_active === 'true',
      sort_order: parseInt(form.sort_order, 10),
    };
    if (editing) {
      await supabase.from('engineering_services').update(service).eq('id', editing);
      setEditing(null);
    } else {
      await supabase.from('engineering_services').insert(service);
    }
    setForm({ name: '', description: '', slug: '', is_active: 'true', sort_order: '0' });
    const { data } = await supabase.from('engineering_services').select('*').order('sort_order', { ascending: true });
    setServices((data || []) as Service[]);
  };

  const deleteService = async (id: string) => {
    if (!window.confirm('Delete this service?')) return;
    const supabase = createClientSupabase(null as never);
    await supabase.from('engineering_services').delete().eq('id', id);
    const { data } = await supabase.from('engineering_services').select('*').order('sort_order', { ascending: true });
    setServices((data || []) as Service[]);
  };

  const editService = (service: Service) => {
    setEditing(service.id);
    setForm({
      name: service.name,
      description: service.description,
      slug: service.slug,
      is_active: String(service.is_active),
      sort_order: String(service.sort_order),
    });
  };

  const cancelEdit = () => {
    setEditing(null);
    setForm({ name: '', description: '', slug: '', is_active: 'true', sort_order: '0' });
  };

  return (
    <main className="min-h-screen bg-navy-light">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Engineering Services</h1>
          <p className="text-navy-medium">Manage your engineering services catalog</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 mb-8 space-y-4">
          <h2 className="text-lg font-semibold text-navy">{editing ? 'Edit Service' : 'Add New Service'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full px-4 py-2 border border-navy-light rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Slug</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                required
                className="w-full px-4 py-2 border border-navy-light rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
                className="w-full px-4 py-2 border border-navy-light rounded"
                rows={3}
              />
            </div>
            <div className="flex items-end">
              <label className="block text-sm font-medium text-navy-medium mb-1">Active</label>
              <select
                value={form.is_active}
                onChange={(e) => setForm({ ...form, is_active: e.target.value })}
                className="w-full px-4 py-2 border border-navy-light rounded"
              >
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-navy-medium mb-1">Sort Order</label>
              <input
                type="number"
                value={form.sort_order}
                onChange={(e) => setForm({ ...form, sort_order: e.target.value })}
                required
                className="w-full px-4 py-2 border border-navy-light rounded"
              />
            </div>
            <div className="flex items-end">
              <button type="submit" className="bg-navy text-white px-6 py-2 rounded hover:bg-navy-light transition-colors">
                {editing ? 'Save Changes' : 'Add Service'}
              </button>
              {editing && (
                <button type="button" onClick={cancelEdit} className="ml-2 text-navy-medium hover:text-navy">
                  Cancel
                </button>
              )}
            </div>
          </div>
        </form>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-light">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-navy">Name</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Slug</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Description</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Active</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Sort Order</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-light/20">
              {services.map((service) => (
                <tr key={service.id}>
                  <td className="px-6 py-3 text-navy-medium">{service.name}</td>
                  <td className="px-6 py-3 text-navy-medium">{service.slug}</td>
                  <td className="px-6 py-3 text-navy-medium">{service.description}</td>
                  <td className="px-6 py-3 text-navy-medium">{service.is_active ? 'Yes' : 'No'}</td>
                  <td className="px-6 py-3 text-navy-medium">{service.sort_order}</td>
                  <td className="px-6 py-3">
                    <button onClick={() => editService(service)} className="text-navy hover:underline text-sm mr-2">Edit</button>
                    <button onClick={() => deleteService(service.id)} className="text-red-500 hover:underline text-sm">Delete</button>
                  </td>
                </tr>
              ))}
              {services.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-navy-medium">No services found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}