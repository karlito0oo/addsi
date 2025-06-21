export default function OurTeamSection() {
  return (
    <section className="w-full bg-white px-4 sm:px-0 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-center mb-10">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Team Leader 1 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6 border-t-4 border-green-700">
            <img src="/team1.jpg" alt="Noel Tanada" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">NOEL IGNATIUS F. TAÑADA</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">President & CEO</div>
            <p className="text-gray-700 text-sm text-center">He has a vast experience in the field of Design and has worked with global brands such as Issey Miyake, Charles & Keith, and Triple Lumen. Contributed his expertise to the Filipino design community by mentoring through Europe as a De Saavedra scholar on Shell Traditions, member of the Chamber of Furniture Industries of the Philippines. He holds several patents for innovative and sustainable products registered in many countries, and continuously develops new concepts & technology-based design promotions.</p>
          </div>
          {/* Team Leader 2 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6 border-t-4 border-green-700">
            <img src="/team2.jpg" alt="Michelle Bautista-Tanada" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">MICHELLE BAUTISTA-TAÑADA</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">Chief Operating Officer</div>
            <p className="text-gray-700 text-sm text-center">A local and international marketing specialist with over 20 years of experience. Sits on the Board of Advisors of the Achievers Group of Companies. Led wide-ranging experiential and creative initiatives including collaborations with the Life Earth Foundation Inc. as its co-advocacy partner. Co-organizer of “Upcycling as Art.” Co-Founder of Philippine Alliance for Sustainable Solutions (PASS) Foundation. She also champions women empowerment and is a member of the board of Trustees of Women of the Earth Foundation and Ladies For A Cause.</p>
          </div>
          {/* Team Leader 3 */}
          <div className="flex flex-col items-center bg-white rounded-lg shadow p-6 border-t-4 border-green-700">
            <img src="/team3.jpg" alt="Crystal Dy" className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-200" />
            <div className="text-green-700 font-bold text-lg text-center leading-tight">CRYSTAL “MIXY” B. DY</div>
            <div className="uppercase text-xs font-semibold text-gray-700 mb-2 text-center">Chief Creative Officer</div>
            <p className="text-gray-700 text-sm text-center">Fashion Designer and Creative Entrepreneur who graduated Magna Cum Laude from Central Saint Martins London. She has advanced her technical skills in sustainable fashion and was selected for several international courses such as Redress Founder Award, Stockholm, and the H&M Foundation. As a Brand Strategist for leading multinational FMCGs, she brings creative direction to inspire the leadership effort. She also serves as Special Project Director of Balikatan Sa Kaunlaran Foundation and principal co-organizer for Life Earth Foundation, heads initiatives that harness design for sustainability, livelihood, and community empowerment.</p>
          </div>
        </div>
        <div className="bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-t-md w-full text-center mb-2">OUR ENVIRONMENT, SCIENCE AND TECHNICAL SUPPORT</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-b-md p-4 shadow">
          <div className="text-center">
            <div className="font-semibold">MARISSA A. PAGLICAWAN, PH.D.</div>
            <div className="text-xs text-gray-600">Science and Technology</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">ENCARNACION N. RARALIO, PH.D., UAP, ENP</div>
            <div className="text-xs text-gray-600">Environment and Architecture</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">MARICHELLE ANN F. CARREON MM, HD, PHD, PD-SML</div>
            <div className="text-xs text-gray-600">Livelihood Training</div>
          </div>
        </div>
      </div>
    </section>
  );
} 