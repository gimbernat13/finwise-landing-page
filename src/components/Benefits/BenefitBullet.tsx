import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    // Check if description contains sport leagues (indicated by bullet points •)
    const hasSportBadges = description.includes('•');
    const sportsList = hasSportBadges ? description.split('•').map(s => s.trim()).filter(s => s) : [];

    return (
        <motion.div
            className="flex flex-col items-center mt-4 gap-2 lg:gap-3 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className="flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-1 w-fit">
                {icon}
            </div>
            <div className="w-full">
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
                {hasSportBadges ? (
                    <div className="flex flex-wrap gap-2 mt-3">
                        {sportsList.map((sport, index) => (
                            <span
                                key={index}
                                className="bg-primary/10 border border-primary/30 text-foreground px-3 py-1.5 rounded-full text-sm font-semibold hover:bg-primary/20 transition-colors"
                            >
                                {sport}
                            </span>
                        ))}
                    </div>
                ) : (
                    <p className="text-base text-foreground-accent">
                        {description}
                    </p>
                )}
            </div>
        </motion.div>
    )
}

export default BenefitBullet