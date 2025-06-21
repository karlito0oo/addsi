import { motion } from 'framer-motion';

const cardMotion = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

export default function AlphaDDSINewNormSection() {
  return (
    <section className="w-full py-12 px-2 sm:px-0 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <motion.div
          variants={cardMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background1.jpg)' }} />
          <div className="relative bg-white/80 backdrop-blur p-8 h-full flex flex-col justify-between">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">ALPHA DDSI in the New Norm</h2>
            <div className="text-gray-800 mb-4">
              Considering the current challenges brought about by the pandemic and the effects of climate change in the Philippines, true to its name, ALPHA DDSI aims to widen its horizons to adapt to global change by developing distinct solutions through the enhancement of our product and service portfolio to help the Filipinos in our own little way. The E.C.O. way.<br /><br />
              We continue our journey through <b>Climate Innovations & Proper Waste Solutions</b> that contribute to our <b>Environment</b> and our <b>Communities</b> in collaboration with organizations which shall likewise be translated into <b>Opportunities</b> for Sustainable Development.
            </div>
            <img src="/shortLogo.png" alt="Alpha Logo" className="w-10 h-10 absolute bottom-4 right-4 opacity-80" />
          </div>
        </motion.div>
        {/* Card 2 */}
        <motion.div
          variants={cardMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background1.jpg)' }} />
          <div className="relative bg-white/80 backdrop-blur p-8 h-full flex flex-col justify-between">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">Facing the Challenge</h2>
            <div className="flex flex-col items-center mb-4">
              <img src="/challenge.jpg" alt="Facing the Challenge" className="w-full max-w-xs rounded shadow mb-4" />
              <div className="text-gray-800 text-sm text-center">
                We lack access to waste collection services & recycling facilities<br />
                There are inefficiencies in collection, transportation, treatment and disposal systems that affect waste water and drainage systems that leads to marine litter and plastic pollution
              </div>
            </div>
            <img src="/shortLogo.png" alt="Alpha Logo" className="w-10 h-10 absolute bottom-4 right-4 opacity-80" />
          </div>
        </motion.div>
        {/* Card 3 */}
        <motion.div
          variants={cardMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background1.jpg)' }} />
          <div className="relative bg-white/80 backdrop-blur p-8 h-full flex flex-col justify-between">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">Compliance to EPR Law</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="bg-white/90 border border-gray-300 rounded p-3 text-xs flex-1">
                <b>The EPR Law takes on the Philippines’ plastic problem</b><br />
                By: Ma. Celina Afonuevo and Bonar Laureto<br />
                <br />
                Barring any last-minute hiccups, the Extended Producer Responsibility (EPR) Act of 2022 should have lapsed into law by now, which means companies are now responsible for the plastic packaging they use to protect, transport, and sell their products.<br />
                <br />
                The law is meant to address our country’s contribution to the global plastic pollution problem, where 40 percent of global plastic waste ends up in the ocean. In 2016 alone, 11 million metric tons of plastic entered the ocean, and if nothing is done, this may reach 29 million metric tons by 2040.<br />
                <br />
                <span className="bg-yellow-200 px-1">Previously, manufacturers were only responsible for the actual product of their products. But under the EPR law, product manufacturers will be held responsible for the entire life cycle of their product -- from manufacture, to use, and to end-of-life.</span>
              </div>
              <div className="flex-1 text-sm">
                <b>EPR</b> is an environmental policy approach that encourages plastic waste reduction through<br />
                <ol className="list-decimal list-inside ml-4">
                  <li>the elimination of unnecessary plastic packaging of products</li>
                  <li>the development of more environmentally friendly and recyclable packaging design</li>
                  <li>the recovery of plastic packaging from the trash in order to reuse them or recycle them back into the production process</li>
                </ol>
                <div className="text-xs mt-2">Source: <a href="https://www.manilatimes.net/2022/07/25/business/top-business/the-epr-law-takes-on-the-philippines-plastic-problem/1852083" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">manilatimes.net</a>, <a href="https://wedocs.unep.org/bitstream/handle/20.500.11822/41846/EPR_whitepaper.pdf" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">UNEP Whitepaper</a></div>
              </div>
            </div>
            <img src="/shortLogo.png" alt="Alpha Logo" className="w-10 h-10 absolute bottom-4 right-4 opacity-80" />
          </div>
        </motion.div>
        {/* Card 4 */}
        <motion.div
          variants={cardMotion}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-lg overflow-hidden shadow-lg"
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/background1.jpg)' }} />
          <div className="relative bg-white/80 backdrop-blur p-8 h-full flex flex-col">
            <h2 className="text-4xl font-serif font-bold mb-4 italic">THE TIME TO ACT IS NOW</h2>
            <div className="text-gray-800 mb-4">
              With our advocacy partners from the Government, Private and Non Government Organizations, we shall also implement programs, events & activities, and eco-activation that would complement in pursuing our goals in promoting Green, Blue and Circular Economy. Ergo, contributing to climate change resiliency in our country.
            </div>
            <img src="/shortLogo.png" alt="Alpha Logo" className="w-10 h-10 absolute bottom-4 right-4 opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 