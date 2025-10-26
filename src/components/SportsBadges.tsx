import React from 'react';

const sports = [
    'UFC', 'NFL', 'NBA', 'MLB', 'NHL',
    'Premier League', 'Champions League', 'Libertadores',
    'La Liga', 'Serie A', 'Bundesliga', 'Liga MX', 'MLS',
    'Formula 1', 'Boxing', 'WWE', 'Tennis', 'Golf'
];

const SportsBadges: React.FC = () => {
    return (
        <div className="flex flex-wrap gap-2 mt-4">
            {sports.map((sport, index) => (
                <span
                    key={index}
                    className="bg-primary/10 border border-primary/30 text-foreground px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                >
                    {sport}
                </span>
            ))}
        </div>
    );
};

export default SportsBadges;
