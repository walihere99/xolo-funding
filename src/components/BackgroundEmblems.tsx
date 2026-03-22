import { motion } from 'framer-motion';

type EmblemType = {
    size: string;
    opacity: string;
    rotate: number;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
};

const EMBLEMS: EmblemType[] = [
    // Between Hero and How it Works
    { size: 'w-[150px]', opacity: 'opacity-[0.06]', top: '15%', left: '5%', rotate: -15 },
    // Between Pricing and Execution Platforms
    { size: 'w-[200px]', opacity: 'opacity-[0.05]', top: '40%', right: '8%', rotate: 25 },
    // Between Why Choose Us and Payouts
    { size: 'w-[180px]', opacity: 'opacity-[0.06]', top: '65%', left: '10%', rotate: -10 },
    // Near FAQ
    { size: 'w-[250px]', opacity: 'opacity-[0.04]', top: '85%', right: '5%', rotate: 15 },
];

export function BackgroundEmblems() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full">
            {EMBLEMS.map((emblem, i) => (
                <motion.img
                    key={i}
                    src="/whyus.png"
                    alt=""
                    className={`absolute ${emblem.size} ${emblem.opacity} object-contain mix-blend-screen grayscale`}
                    initial={{
                        top: emblem.top,
                        bottom: emblem.bottom,
                        left: emblem.left,
                        right: emblem.right,
                        rotate: emblem.rotate,
                        y: 0
                    }}
                    animate={{
                        y: [0, -30, 0],
                        rotate: [emblem.rotate, emblem.rotate + 5, emblem.rotate]
                    }}
                    transition={{
                        duration: 15 + (i * 2), // Randomize float speeds a bit
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            ))}
        </div>
    );
}
