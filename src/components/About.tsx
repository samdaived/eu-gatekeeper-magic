import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '10+', label: t.about.experience },
    { value: '27', label: t.about.countries },
    { value: '200+', label: t.about.clients },
    { value: '500+', label: t.about.transactions },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t.about.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 card-elevated"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl hero-gradient p-8 relative overflow-hidden">
              {/* EU Stars Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180 - Math.PI / 2;
                    const x = 50 + 40 * Math.cos(angle);
                    const y = 50 + 40 * Math.sin(angle);
                    return (
                      <div
                        key={i}
                        className="absolute text-accent text-2xl animate-pulse"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: 'translate(-50%, -50%)',
                          animationDelay: `${i * 0.1}s`,
                        }}
                      >
                        ★
                      </div>
                    );
                  })}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <div className="text-5xl font-bold mb-2">EU</div>
                      <div className="text-lg opacity-80">Trade Partner</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card rounded-xl p-4 card-elevated">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                  <span className="text-lg">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Trusted</div>
                  <div className="text-sm text-muted-foreground">Since 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
