import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface LinkButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  href?: string;
}

export function LinkButton({ icon, label, onClick, href }: LinkButtonProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex w-full items-center justify-between overflow-hidden rounded-[1rem] sm:rounded-[1.25rem] bg-zinc-900/80 p-2 sm:p-4 border border-zinc-800/50 backdrop-blur-md transition-all hover:bg-zinc-800 hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(255,123,0,0.15)]"
    >
      <div className="flex items-center gap-2.5 sm:gap-4 w-full">
        <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-zinc-900">
          {icon}
        </div>
        <span className="flex-1 text-center pr-[36px] sm:pr-[44px] text-[13px] sm:text-[15px] font-medium text-zinc-200 group-hover:text-white leading-tight">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full outline-none">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="block w-full outline-none">
      {content}
    </button>
  );
}
