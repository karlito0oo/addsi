export default function PartnersAffiliationsSection() {
  return (
    <section
      className="w-full relative py-12 px-2 sm:px-0"
      style={{
        backgroundImage: 'url(/background1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl mx-auto bg-white/90 rounded-lg shadow p-4 sm:p-8">
        <div className="bg-green-700 text-white text-xl sm:text-2xl font-bold py-3 px-2 rounded-t-md text-center mb-8 tracking-wide">
          PARTNERS AND AFFILIATIONS
        </div>
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          {/* Alpha Logo and Name */}
          <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
            <img src="/shortLogo.png" alt="Alpha Logo" className="w-28 h-28 object-contain mb-2" />
            <div className="text-green-800 font-extrabold text-2xl mt-2">ALPHA</div>
            <div className="text-xs font-semibold tracking-wide text-green-800 text-center">DISTINCT DEVELOPMENT SOLUTIONS INC.</div>
          </div>
          {/* Government and Non-Government Logos */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="font-semibold text-gray-700 text-sm mb-2">Government</div>
                <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                  {[1,2,3,4,5,6].map(i => (
                    <img key={i} src={`/partner-gov${i}.jpg`} alt={`Government Partner ${i}`} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white shadow" />
                  ))}
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center">
                <img src="/partner-main.jpg" alt="Main Partner" className="w-40 max-w-full object-contain mb-2" />
                <div className="text-blue-900 font-bold text-lg text-center leading-tight">PHILIPPINE ALLIANCE FOR RECYCLING<br className="hidden sm:block"/> AND MATERIALS SUSTAINABILITY</div>
                <div className="text-green-700 font-bold text-base text-center">WASTE DIVERTER</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="font-semibold text-gray-700 text-sm mb-2">Non-Government</div>
              <div className="flex flex-wrap gap-2 justify-center">
                {[1,2,3,4,5,6,7,8].map(i => (
                  <img key={i} src={`/partner-non-gov${i}.jpg`} alt={`Non-Government Partner ${i}`} className="w-10 h-10 sm:w-12 sm:h-12 object-contain rounded bg-white shadow" />
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Powered by */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4 mb-6">
          <div className="text-xs text-gray-700 font-semibold text-right">POWERED BY:</div>
          <div className="flex gap-2 flex-wrap justify-center sm:justify-start">
            <img src="/powered1.jpg" alt="Powered by 1" className="w-12 h-12 object-contain rounded bg-white shadow" />
            <img src="/powered2.jpg" alt="Powered by 2" className="w-12 h-12 object-contain rounded bg-white shadow" />
          </div>
        </div>
        {/* Private and Circularity Affiliates */}
        <div className="bg-green-700 text-white font-bold text-xs px-4 py-2 rounded-t-md w-full text-center mb-2">Private and Circularity Affiliates</div>
        <div className="flex flex-wrap gap-3 bg-white rounded-b-md p-4 shadow justify-center items-center">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
            <img key={i} src={`/affiliate${i}.jpg`} alt={`Affiliate ${i}`} className="w-16 h-10 object-contain rounded bg-white shadow" />
          ))}
        </div>
      </div>
    </section>
  );
} 