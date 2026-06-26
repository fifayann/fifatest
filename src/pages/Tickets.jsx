import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, CheckCircle, XCircle, Loader2, Ticket } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Tickets() {
  // 'form' = formulaire de demande | 'validate' = saisie du code
  const [step, setStep] = useState('form');

  // --- Form state ---
  const [form, setForm] = useState({ fullName: '', email: '', phone: '' });
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  // --- Validate state ---
  const [code, setCode] = useState('');
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null); // 'valid' | 'used' | 'invalid'

  const canSubmit = form.fullName && form.email && form.phone;

  // ===== SUBMIT REQUEST =====
  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    setFormError('');

    const { error } = await supabase.from('ticket_requests').insert([{
      full_name: form.fullName,
      email: form.email,
      phone: form.phone,
      match_id: 0,
      match_label: 'General ticket request',
      category: 'N/A',
      quantity: 1,
      total_price: 0,
    }]);

    setSubmitting(false);
    if (error) {
      setFormError('Something went wrong. Please try again.');
      console.error(error);
    } else {
      setStep('validate');
    }
  };

  // ===== VALIDATE CODE =====
  const handleValidate = async () => {
    if (!code.trim()) return;
    setChecking(true);
    setResult(null);

    const { data: codeRow, error } = await supabase
      .from('ticket_codes')
      .select('*')
      .eq('code', code.trim())
      .single();

    if (error || !codeRow) {
      setResult('invalid');
      setChecking(false);
      return;
    }
    if (codeRow.used) {
      setResult('used');
      setChecking(false);
      return;
    }

    const { error: updateError } = await supabase
      .from('ticket_codes')
      .update({ used: true, used_by: form.fullName || 'Anonymous', used_at: new Date().toISOString() })
      .eq('code', code.trim());

    setChecking(false);
    setResult(updateError ? 'invalid' : 'valid');
  };

  return (
    <div className="bg-fifa-light min-h-screen">
      <div className="max-w-md mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-fifa-blue mb-6">
          <ChevronLeft size={18} /> Back to home
        </Link>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg">
          <div className="w-16 h-16 bg-fifa-bright/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <Ticket size={30} className="text-fifa-bright" />
          </div>

          {/* ========== STEP 1: FORM ========== */}
          {step === 'form' && (
            <>
              <h1 className="text-2xl font-black text-center mb-2">Request Tickets</h1>
              <p className="text-gray-500 text-sm text-center mb-6">
                Fill in your details and we'll send you a validation code to confirm your tickets.
              </p>

              <div className="space-y-3 mb-5">
                <input type="text" placeholder="Full name" value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-fifa-bright focus:outline-none" />
                <input type="email" placeholder="Email address" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-fifa-bright focus:outline-none" />
                <input type="tel" placeholder="Phone number" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:border-fifa-bright focus:outline-none" />
              </div>

              {formError && <p className="text-red-500 text-xs mb-3 text-center">{formError}</p>}

              <button onClick={handleSubmit} disabled={!canSubmit || submitting}
                className={`w-full font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
                  canSubmit && !submitting ? 'bg-fifa-bright hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}>
                {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : 'Submit Request'}
              </button>
            </>
          )}

          {/* ========== STEP 2: VALIDATE ========== */}
          {step === 'validate' && (
            <>
              <h1 className="text-2xl font-black text-center mb-2">Validate Your Code</h1>
              <p className="text-gray-500 text-sm text-center mb-6">
                Enter the validation code we sent you to confirm your tickets.
              </p>

              {result === 'valid' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-5 text-center">
                  <CheckCircle size={36} className="text-green-500 mx-auto mb-2" />
                  <h3 className="font-bold text-green-700">Code Validated!</h3>
                  <p className="text-sm text-green-600 mt-1">Your tickets are confirmed. See you at the stadium! 🎉</p>
                </div>
              )}
              {result === 'used' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5 text-center">
                  <XCircle size={36} className="text-red-500 mx-auto mb-2" />
                  <h3 className="font-bold text-red-700">Code Already Used</h3>
                  <p className="text-sm text-red-600 mt-1">This code has already been redeemed and cannot be used again.</p>
                </div>
              )}
              {result === 'invalid' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-5 text-center">
                  <XCircle size={36} className="text-red-500 mx-auto mb-2" />
                  <h3 className="font-bold text-red-700">Invalid Code</h3>
                  <p className="text-sm text-red-600 mt-1">This code doesn't exist. Please check and try again.</p>
                </div>
              )}

              {result !== 'valid' && (
                <>
                  <input type="text" placeholder="Code (e.g. 0001)" value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 text-center text-2xl font-black tracking-widest focus:border-fifa-bright focus:outline-none mb-4" />
                  <button onClick={handleValidate} disabled={!code.trim() || checking}
                    className={`w-full font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 ${
                      code.trim() && !checking ? 'bg-fifa-bright hover:bg-blue-700 text-white' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    }`}>
                    {checking ? <><Loader2 size={18} className="animate-spin" /> Checking...</> : 'Validate Code'}
                  </button>
                </>
              )}

              {result === 'valid' && (
                <Link to="/" className="block text-center bg-fifa-bright text-white font-bold py-3 rounded-full hover:bg-blue-700 transition-colors">
                  Done
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}