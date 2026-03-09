function ProgramCard({ headerBg, headerText, title, time, description }) {
  return (
    <div className="flex-1 rounded-[10px] overflow-hidden shadow-sm border border-gray-100 bg-white">
      <div className={`${headerBg} py-5 text-center`}>
        <span className="text-white font-semibold text-base">{headerText}</span>
      </div>
      <div className="p-5">
        <h3 className="text-[#e89c2f] font-semibold text-sm">{title}</h3>
        <p className="text-[#e89c2f] text-xs mt-0.5">{time}</p>
        <div className="w-8 h-0.5 bg-[#e89c2f] my-3" />
        <p className="text-[#7a6555] text-sm leading-relaxed">{description}</p>
        <button className="mt-5 bg-[#e89c2f] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#f0b84a] transition-colors">
          More Info
        </button>
      </div>
    </div>
  )
}

export default function Programs() {
  return (
    <section className="bg-[#faf6f0] py-12 px-8" id="students">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#e89c2f] text-xs font-semibold uppercase tracking-widest mb-1">Programs</p>
        <h2 className="text-3xl font-bold text-[#2c1a0e] mb-8">For Students</h2>
        <div className="flex gap-6">
          <ProgramCard
            headerBg="bg-[#3bbfbf]"
            headerText="Friday Nights"
            title="Friday Night Group"
            time="Every Friday @ 7:00 PM . Gateway North 103"
            description="A welcoming space for all students, postdocs & visiting scholars from every religious background and faith."
          />
          <ProgramCard
            headerBg="bg-[#1e2a3a]"
            headerText="Special Events"
            title="Outdoor Trips"
            time="Monthly · Various Locations"
            description="Join students across campuses for a night of reflection, community, and connection at Pillar College, Newark."
          />
          <ProgramCard
            headerBg="bg-[#3d1f0f]"
            headerText="Home Groups"
            title="Small Group Gatherings"
            time="Monthly · Host Homes"
            description="Intimate home groups where you can build lasting friendships and find community in a relaxed setting."
          />
        </div>
      </div>
    </section>
  )
}
