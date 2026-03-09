import logoImg from '../assets/logo.jpg'

export default function Navbar() {
  return (
    <nav className="bg-[#3d1f0f] px-8 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={logoImg}
          alt="IGSCF Logo"
          className="w-10 h-10 rounded-full border-2 border-[#e89c2f] object-cover flex-shrink-0"
        />
        <div className="text-[#e89c2f] text-xs font-semibold leading-tight">
          <div>International Graduate Chapter of</div>
          <div>Stevens Christian Fellowship –</div>
          <div>Hoboken, NJ</div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <a href="#about" className="text-white text-sm hover:text-[#e89c2f] transition-colors">About</a>
        <a href="#home" className="text-white text-sm hover:text-[#e89c2f] transition-colors">Home</a>
        <a href="#students" className="text-white text-sm hover:text-[#e89c2f] transition-colors">For Students</a>
        <a
          href="#donors"
          className="bg-[#e89c2f] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#f0b84a] transition-colors"
        >
          For Donors
        </a>
      </div>
    </nav>
  )
}
