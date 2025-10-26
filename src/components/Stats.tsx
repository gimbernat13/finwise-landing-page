import { stats } from "@/data/stats"

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20 bg-background">
            <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {stats.map(stat => (
                    <div key={stat.title} className="text-center">
                        <h3 className="text-5xl md:text-6xl font-bold text-foreground">
                            {stat.title}
                        </h3>
                        {stat.description && (
                            <p className="mt-2 text-foreground-accent">{stat.description}</p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats