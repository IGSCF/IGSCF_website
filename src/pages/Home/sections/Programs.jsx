import { Link } from 'react-router-dom'
import { programs } from '../../../data/programs'

function ProgramCard({ headerBg, headerText, title, time, description, tabId }) {
  return (
    <div className="flex-1 rounded-[10px] overflow-hidden shadow-sm border border-gray-100 bg-white">
      <div className={`${headerBg} py-5 text-center`}>
        <span className="text-white font-semibold text-base">{headerText}</span>
      </div>
      <div className="p-5">
        <h3 className="text-[#a32638] font-semibold text-sm">{title}</h3>
        <p className="text-[#a32638] text-xs mt-0.5">{time}</p>
        <div className="w-8 h-0.5 bg-[#a32638] my-3" />
        <p className="text-[#7a6555] text-sm leading-relaxed">{description}</p>
        <Link
          to={tabId ? `/students#${tabId}` : '/students'}
          className="mt-5 inline-block bg-[#a32638] text-white text-xs font-semibold px-4 py-2 rounded-md hover:bg-[#8a1e2f] transition-colors"
        >
          More Info
        </Link>
      </div>
    </div>
  )
}

export default function Programs() {
  return (
    <section className="bg-[#faf6f0] py-12 px-8" id="students">
      <div className="max-w-5xl mx-auto">
        <p className="text-[#a32638] text-xs font-semibold uppercase tracking-widest mb-1">Programs</p>
        <h2 className="text-3xl font-bold text-[#2c1a0e] mb-8">For Students</h2>
        <div className="flex gap-6">
          {programs.map((p) => (
            <ProgramCard key={p.tabId} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
