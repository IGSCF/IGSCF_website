const testimonials = [
  {
    quote: "I came from Brazil knowing nobody. The community welcomed me with open arms regardless of my background. Truly special people here.",
    name: "Carlos Mendes",
    role: "Postdoc Researcher",
    color: "#3b82f6",
  },
  {
    quote: "The special events always bring such joy. I attended the Collegiate Day of Prayer and left feeling inspired and connected to something bigger.",
    name: "Kenji Mori",
    role: "PhD Candidate",
    color: "#60a5fa",
  },
  {
    quote: "I arrived in America without knowing a single person. Within a month of joining home groups, I had a real support network. Life-changing.",
    name: "Adarsh Kalra",
    role: "Research Fellow",
    color: "#9ca3af",
  },
  {
    quote: "The Friday night group gave me a reason to look forward to the end of the week. I've made lifelong friends through this community.",
    name: "Priya Nair",
    role: "PhD Student, Stevens",
    color: "#f59e0b",
  },
  {
    quote: "The home groups helped me practice English and make real friends. I'm so grateful for this welcoming community during my time in New Jersey.",
    name: "Lin Wei",
    role: "Visiting Scholar",
    color: "#34d399",
  },
  {
    quote: "The team here goes above and beyond to make international students feel at ease. The warmth is consistent and genuine, not performative.",
    name: "David Okonkwo",
    role: "Visiting Researcher",
    color: "#f97316",
  },
  {
    quote: "As a visiting scholar, I didn't expect to find such a warm welcome. IGSCF truly lives out what it says — everyone is welcome here.",
    name: "Mr. Adarsh Mehdi",
    role: "Visiting Scholar",
    color: "#eab308",
  },
  {
    quote: "I was skeptical at first, but the genuine warmth and inclusivity here changed my mind immediately. This community is something truly rare.",
    name: "Sofia Torres",
    role: "Graduate Student",
    color: "#a78bfa",
  },
  {
    quote: "From my very first Friday night, I felt seen and valued. IGSCF builds real bridges between people of very different backgrounds.",
    name: "Mei Zhang",
    role: "PhD Researcher",
    color: "#f87171",
  },
]

function Avatar({ name, color }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block border border-gray-300 text-[#7a6555] text-xs px-4 py-1 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl font-bold text-[#2c1a0e]">What our community says</h2>
          <p className="text-sm text-[#7a6555] mt-2">See what our members have to say about us.</p>
        </div>

        <div className="columns-3 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="break-inside-avoid mb-4 bg-white border border-gray-100 rounded-[10px] p-5 shadow-sm"
            >
              <p className="text-sm text-[#2c1a0e] leading-relaxed mb-4">{t.quote}</p>
              <div className="flex items-center gap-2">
                <Avatar name={t.name} color={t.color} />
                <div>
                  <p className="text-xs font-semibold text-[#2c1a0e]">{t.name}</p>
                  <p className="text-xs text-[#7a6555]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
