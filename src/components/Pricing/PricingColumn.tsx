import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-card-background rounded-xl border border-border-color lg:max-w-full", { "shadow-xl border-primary": highlight })}>
            <div className="p-6 border-b border-border-color rounded-t-xl">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">{name}</h3>
                <p className="text-3xl md:text-4xl font-bold mb-6">
                    <span className={clsx("text-foreground", { "text-primary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-sm font-normal text-foreground-accent"> x 3 Dispositivos</span>}
                </p>
                <button className={clsx("w-full py-3 px-4 rounded-full transition-colors font-semibold", { "bg-primary hover:bg-primary-accent text-white": highlight, "bg-transparent border border-border-color hover:border-primary text-foreground": !highlight })}>
                    Contratar Ahora
                </button>
            </div>
            <div className="p-6 mt-1">
                <ul className="space-y-3 mb-8">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <BsFillCheckCircleFill className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                            <span className="text-foreground-accent">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn