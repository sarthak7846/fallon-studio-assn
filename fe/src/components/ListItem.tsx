import { motion } from "motion/react";

interface ListItemProps {
  username: string;
  email: string;
  feedbackMessage: string;
  inx: number;
  len: number;
}

export const ListItem = ({
  username,
  email,
  feedbackMessage,
  inx,
  len,
}: ListItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`grid grid-cols-3 items-center justify-items-center bg-slate-200 hover:bg-slate-400 border-b border-slate-800   py-3 ${
        inx === len - 1 && "border-b-0"
      }`}
    >
      <h1 className="text-xl">{username}</h1>
      <h1 className="text-xl">{email}</h1>
      <h1 className="text-xl">{feedbackMessage}</h1>
    </motion.div>
  );
};
