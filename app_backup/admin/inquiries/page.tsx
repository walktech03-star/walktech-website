'use client';

import { createClientSupabase } from "@/libsupabase";
import { useEffect, useRef, useState } from 'react';

type Inquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
};

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authenticated, setAuthenticated] = useState(false);

  const handleStatusChange = async (id: string, status: string) => {
  try {
    const supabase = createClientSupabase(null as never);
    const { error: err } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id);
    if (err) throw err;
    await fetchInquiries();
  } catch (err: any) {
    setError(err.message || 'Failed to update inquiry status');
  }
};

const fetchInquiries = async () => {
  try {
    setError(null);
    const supabase = createClientSupabase(null as never);
    const { data, error: err } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });
    if (err) throw err;
    setInquiries((data || []) as Inquiry[]);
  } catch (err: any) {
    setError(err.message || 'Failed to load inquiries');
  }
};

useEffect(() => {
    let cancelled = false;

    const checkAuth = async () => {
      try {
        const supabase = createClientSupabase(null as never);
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError || !session?.user) {
          window.location.href = '/admin/login';
          return;
        }
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('role')
          .eq('id', session.user.id)
          .single();
        if (profileError || !profile || profile.role !== 'admin') {
          window.location.href = '/';
          return;
        }
        if (!cancelled) {
          setAuthenticated(true);
          await fetchInquiries();
        }
      } catch {
        if (!cancelled) window.location.href = '/admin/login';
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    checkAuth();

    return () => { cancelled = true; };
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-navy flex items-center justify-center p-8">
        <div className="text-white">
          <h1 className="text-3xl font-bold">Walk Tech Admin</h1>
          <p className="mt-2">Loading...</p>
        </div>
      </main>
    );
  }

  if (!authenticated) return null;

  const statusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-red-600';
      case 'read': return 'text-blue-600';
      case 'replied': return 'text-green-600';
      case 'closed': return 'text-gray-600';
      default: return 'text-navy-medium';
    }
  };

  return (
    <main className="min-h-screen bg-navy-light">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-navy">Customer Inquiries</h1>
          <p className="text-navy-medium">Manage customer project requests</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 text-red-800">
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="mt-2 underline text-red-600">Retry</button>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-navy-light">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-navy">Name</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Email</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Subject</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Created</th>
                <th className="px-6 py-3 text-sm font-medium text-navy">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-light/20">
              {inquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-navy-light/5 transition-colors">
                  <td className="px-6 py-4 text-navy-medium">{inquiry.name}</td>
                  <td className="px-6 py-4 text-navy-medium">{inquiry.email}</td>
                  <td className="px-6 py-4 text-navy-medium">{inquiry.subject}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium border ${statusColor(inquiry.status)} border-${statusColor(inquiry.status)}/30`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-navy-medium">{new Date(inquiry.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4">
                    <select
                      value={inquiry.status}
                      onChange={(e) => handleStatusChange(inquiry.id, e.target.value)}
                      className="text-sm border border-navy-light rounded px-2 py-1"
                    >
                      <option value="new">New</option>
                      <option value="read">Read</option>
                      <option value="replied">Replied</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-navy-medium">No inquiries found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}