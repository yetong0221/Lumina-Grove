import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const JOURNAL_ENTRIES = [
  {
    id: 1,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=1000&auto=format&fit=crop',
    title: 'Morning Mist',
    date: 'Oct 12',
    farmer: 'Masumoto Family',
    caption: 'The early morning fog helps keep the apples crisp. Harvest starts in 2 days!'
  },
  {
    id: 2,
    type: 'text',
    title: 'Soil Health Report',
    date: 'Oct 10',
    farmer: 'Elena Garcia',
    caption: 'We just finished our organic compost application. The earthworms are happy, and that means healthy roots for your trees. No synthetic fertilizers used this year.'
  },
  {
    id: 3,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1595855709940-fa19837ded65?q=80&w=1000&auto=format&fit=crop',
    title: 'New Irrigation System',
    date: 'Oct 08',
    farmer: 'Giuseppe Rossi',
    caption: 'Testing the new drip irrigation. It saves 40% more water compared to traditional methods.'
  },
  {
    id: 4,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1621459529554-20b85295b28e?q=80&w=1000&auto=format&fit=crop',
    title: 'Blossom Festival',
    date: 'Oct 05',
    farmer: 'Masumoto Family',
    caption: 'The community gathered to celebrate the first blooms. A magical evening under the petals.'
  }
];

export function JournalSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-leaf-600 font-medium tracking-wider uppercase text-xs mb-2 block">Direct from the Farm</span>
          <h2 className="font-serif text-4xl md:text-5xl text-earth-900 mb-4">The Orchard Journal</h2>
          <p className="text-earth-600 max-w-lg mx-auto">Real stories, updates, and moments captured by our farmers.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {JOURNAL_ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="break-inside-avoid bg-earth-50 rounded-2xl overflow-hidden border border-earth-100 hover:shadow-lg transition-shadow duration-300"
            >
              {entry.type === 'image' && (
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={entry.url} 
                    alt={entry.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-earth-800 flex items-center gap-1">
                    <Calendar size={12} />
                    {entry.date}
                  </div>
                </div>
              )}
              
              <div className="p-6">
                {entry.type === 'text' && (
                  <div className="flex items-center gap-2 text-xs font-medium text-earth-500 mb-4">
                    <Calendar size={12} />
                    {entry.date}
                  </div>
                )}
                
                <h3 className="font-serif text-2xl text-earth-900 mb-2">{entry.title}</h3>
                <p className="text-earth-600 text-sm leading-relaxed mb-4">
                  {entry.caption}
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-earth-200">
                  <div className="w-6 h-6 rounded-full bg-earth-300 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?u=${entry.farmer}`} alt={entry.farmer} />
                  </div>
                  <span className="text-xs font-medium text-earth-800">{entry.farmer}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
