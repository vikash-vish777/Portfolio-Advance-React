import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const subject = encodeURIComponent(form.subject || `Portfolio message from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Vikash,\n\nYou have a new message from your portfolio:\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n---\nSent via your portfolio website`
    );

    window.location.href = `mailto:vikash13306@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  }

  function handleReset() {
    setSent(false);
  }

  return (
    <section id="contact" className="py-24 relative min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              I'm currently looking for internship opportunities. Whether you have a question or just want to say hi, I'll get back to you!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <a
                href="mailto:vikash13306@gmail.com"
                className="flex items-center gap-6 p-6 glass-card rounded-xl hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Email</div>
                  <div className="text-lg text-gray-200 group-hover:text-cyan-300 transition-colors">vikash13306@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919838655493"
                className="flex items-center gap-6 p-6 glass-card rounded-xl hover:bg-white/5 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Phone</div>
                  <div className="text-lg text-gray-200 group-hover:text-indigo-300 transition-colors">+91 9838655493</div>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 glass-card rounded-xl">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-mono text-gray-500 mb-1">Location</div>
                  <div className="text-lg text-gray-200">Nashik, Maharashtra, India</div>
                </div>
              </div>

              {/* Response time note */}
              <div className="p-5 glass-card rounded-xl border border-cyan-500/20">
                <p className="text-sm text-gray-400 font-mono leading-relaxed">
                  <span className="text-cyan-400">$</span> avg_response_time: <span className="text-emerald-400">"within 24 hours"</span>
                </p>
              </div>
            </motion.div>

            {/* Right — Message Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card rounded-xl p-8 border border-white/10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 pointer-events-none" />

              <AnimatePresence mode="wait">
                {sent ? (
                  /* Success state */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center h-full min-h-[380px] text-center gap-6 relative z-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.15 }}
                    >
                      <CheckCircle className="w-20 h-20 text-emerald-400" />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">Email Client Opened!</h3>
                      <p className="text-gray-400 max-w-xs mx-auto">
                        Your message has been pre-filled in your email client. Just hit Send and I'll get back to you soon.
                      </p>
                    </div>
                    <button
                      onClick={handleReset}
                      className="px-6 py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all text-sm font-mono"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  /* Form */
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="relative z-10 space-y-5"
                    noValidate
                  >
                    <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
                    <p className="text-sm text-gray-500 font-mono mb-4">
                      Fills your email client with your message — no sign-up needed.
                    </p>

                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                            errors.name ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                          }`}
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-gray-400 mb-1.5">Your Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                            errors.email ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                          }`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Internship opportunity / Project idea…"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/30 transition-colors"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-mono text-gray-400 mb-1.5">Message *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Hi Vikash, I'd love to connect about…"
                        className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors resize-none ${
                          errors.message ? 'border-red-500/60 focus:ring-red-500/40' : 'border-white/10 focus:border-cyan-500/60 focus:ring-cyan-500/30'
                        }`}
                      />
                      {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-cyan-950 font-bold rounded-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] active:scale-[0.98]"
                    >
                      Send Message <Send className="w-4 h-4" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
