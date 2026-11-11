"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Sparkles, Calendar, Clock, User, Phone, Mail, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/data/services";

export default function BookingModal() {
  const { isBookingOpen, closeBooking, bookingService } = useCart();
  const [selectedService, setSelectedService] = useState(bookingService || SERVICES[0]?.title || "");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync initial service
  React.useEffect(() => {
    if (bookingService) setSelectedService(bookingService);
  }, [bookingService]);

  if (!isBookingOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        closeBooking();
      }, 3500);
    }, 1200);
  };

  const timeSlots = [
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "2:30 PM",
    "4:00 PM",
    "5:30 PM",
    "7:00 PM",
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={closeBooking}
        className="fixed inset-0 bg-[#241C20]/70 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-[16px] bg-[#FFF8F0] border border-[#C6A15B] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl animate-fade-in">
          {/* Header */}
          <div className="bg-[#241C20] px-6 py-5 text-[#FFF8F0] flex items-center justify-between border-b border-[#C6A15B]">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C6A15B]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Empress Palace Concierge</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-[#FFF8F0]">
                Reserve Your Private Experience
              </h3>
            </div>
            <button
              onClick={closeBooking}
              className="text-[#FFF8F0]/70 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close booking modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#A83263] text-white mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-serif text-2xl text-[#241C20] font-bold">
                  Your Sanctuary Is Reserved
                </h4>
                <p className="text-sm text-[#241C20]/75 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#A83263]">{name || "Valued Guest"}</strong>.
                  Our VIP Concierge team has reserved your appointment for <strong>{selectedService}</strong> on{" "}
                  <strong>{selectedDate || "your chosen date"}</strong> at <strong>{selectedTime}</strong>.
                  A private confirmation has been dispatched to your contact details.
                </p>
                <div className="pt-2 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold">
                  Reservation Code: EP-RES-{Math.floor(1000 + Math.random() * 9000)}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Select Service */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2">
                    Select Treatment or Bespoke Fitting
                  </label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2.5 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title} — ₦{s.price.toLocaleString()} ({s.duration})
                      </option>
                    ))}
                    <option value="Custom Bridal & Haute Couture Fitting">
                      Custom Bridal & Haute Couture Fitting (Private VIP Suite)
                    </option>
                  </select>
                </div>

                {/* Date & Time Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Preferred Time</span>
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    >
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Adeola Adeleke"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Telephone Number</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="09071649725"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>Email Address</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vip@luxurydomain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263]"
                  />
                </div>

                {/* Special Requests */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] font-semibold text-[#241C20] mb-2">
                    Bespoke Requirements / Dietary / Skin Sensitivities (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Detail any preferences or measurements for our concierge..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-white border border-[#C6A15B]/50 rounded-[6px] px-3.5 py-2 text-xs text-[#241C20] outline-none focus:border-[#A83263] resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#A83263] hover:bg-[#8C2450] text-white py-3.5 rounded-[6px] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-70 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Securing Concierge Slot...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#E8A9BD]" />
                      <span>Confirm Reservation</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
