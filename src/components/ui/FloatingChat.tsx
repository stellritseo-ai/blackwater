import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Phone, ArrowRight, User, HelpCircle, AlertTriangle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  actions?: { label: string; href: string; primary?: boolean; icon?: any }[];
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! Richard here from Blackwater USA LLC. How can I help you with your project today?",
      sender: "bot",
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      text,
      sender: "user"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Thanks for reaching out! The fastest way to get a pricing quote, ask questions, or schedule immediate service is to call us directly or fill out our online request form.";
      let actions = [
        { label: "Call Richard: (228) 219-8338", href: "tel:+12282198338", primary: true, icon: Phone },
        { label: "Request Free Estimate", href: "/estimate", primary: false, icon: ArrowRight }
      ];

      const lower = text.toLowerCase();
      if (lower.includes("emergency") || lower.includes("leak") || lower.includes("flood") || lower.includes("burst") || lower.includes("fire")) {
        replyText = "⚠️ For plumbing or electrical emergencies, please call Richard immediately. We are available 24/7/365 to handle urgent restoration requests.";
        actions = [
          { label: "Emergency Line: (228) 219-8338", href: "tel:+12282198338", primary: true, icon: Phone }
        ];
      } else if (lower.includes("estimate") || lower.includes("quote") || lower.includes("price") || lower.includes("cost")) {
        replyText = "We offer free, no-obligation estimates 24/7. You can fill out our estimate form online or call us anytime to discuss pricing.";
        actions = [
          { label: "Request Free Estimate", href: "/estimate", primary: true, icon: ArrowRight },
          { label: "Call Us: (228) 219-8338", href: "tel:+12282198338", primary: false, icon: Phone }
        ];
      }

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          text: replyText,
          sender: "bot",
          actions
        }
      ]);
    }, 1200);
  };

  const handleSuggestion = (suggestion: string) => {
    handleSend(suggestion);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-96 h-[500px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] bg-navy-dark/95 backdrop-blur-xl border border-white/10 flex flex-col relative z-50"
          >
            {/* Header */}
            <div className="p-4 bg-navy border-b border-white/10 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold border border-gold/30">
                  <User className="w-5 h-5" />
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-navy" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-tight">Richard Burns</h4>
                  <span className="text-[10px] text-white/60 font-semibold flex items-center gap-1">
                    Blackwater USA LLC • Online
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/5 flex items-center justify-center text-white/70 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs font-medium leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-gold text-navy-dark rounded-tr-none font-semibold shadow-sm"
                        : "bg-white/5 border border-white/5 text-white/95 rounded-tl-none"
                    }`}
                  >
                    {msg.text}

                    {msg.actions && (
                      <div className="mt-3.5 space-y-2">
                        {msg.actions.map((act) => {
                          const Icon = act.icon;
                          return (
                            <a
                              key={act.label}
                              href={act.href}
                              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-[11px] font-bold transition-all ${
                                act.primary
                                  ? "bg-red text-white hover:bg-red-dark shadow-md"
                                  : "bg-white/10 text-white hover:bg-white/15 border border-white/10"
                              }`}
                            >
                              {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                              <span>{act.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 bg-white/5 border border-white/5 rounded-2xl rounded-tl-none w-16 text-white/50 justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-bounce" />
                </div>
              )}

              {/* Suggestions chips on start/bot answer */}
              {messages[messages.length - 1]?.sender === "bot" && !isTyping && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {[
                    "📋 Free Estimate",
                    "🚨 Emergency Help",
                    "🔨 Renovation Options",
                    "📞 Request Callback"
                  ].map((sug) => (
                    <button
                      key={sug}
                      onClick={() => handleSuggestion(sug)}
                      className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 text-white/80 hover:text-white text-[10px] font-bold transition-all cursor-pointer"
                    >
                      {sug}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Footer Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(inputText);
              }}
              className="p-3 border-t border-white/10 bg-navy/40 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-white/5 border border-white/10 focus:border-gold/50 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none transition-all"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className="w-9 h-9 rounded-xl bg-gold hover:bg-gold-light text-navy-dark disabled:opacity-50 disabled:hover:bg-gold flex items-center justify-center transition shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-red text-white flex items-center justify-center shadow-[0_8px_30px_rgba(178,34,34,0.4)] hover:shadow-[0_12px_40px_rgba(178,34,34,0.6)] hover:scale-105 transition-all duration-300 relative group cursor-pointer border border-white/10"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold animate-ping" />
              <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-gold" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
