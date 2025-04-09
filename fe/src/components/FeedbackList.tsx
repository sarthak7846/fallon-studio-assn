import { motion } from "motion/react";
import { ListItem } from "./ListItem";
import { CloseIcon } from "@/icons/CloseIcon";
import { useEffect, useState } from "react";
import { Feedback } from "@/types/feedback";
import axios from "axios";
import { BACKEND_URL } from "@/config";

export const FeedbackList = ({ onClose }: { onClose: () => void }) => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      const res = await axios.get(`${BACKEND_URL}/feedbacks`);
      console.log(res);

      setFeedbacks(res.data);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className=" text-gray-900">
      <div className="flex flex-col mx-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center h-10 my-6"
        >
          <h1 className="text-4xl font-semibold">Feedback List</h1>
          <CloseIcon onClose={onClose} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 bg-slate-300 border sticky top-0 z-10 border-slate-800 rounded-t-xl py-4 text-center"
        >
          <h1 className="text-xl ">Email</h1>
          <h1 className="text-xl ">Full Name</h1>
          <h1 className="text-xl ">Feedback Message</h1>
        </motion.div>
        <div className="overflow-y-auto scroll-auto border-b rounded-b-xl border-slate-800 h-[70vh]">
          {feedbacks.map((feedback, inx) => (
            <ListItem
              key={inx}
              inx={inx}
              email={feedback.email}
              username={feedback.username}
              feedbackMessage={feedback.feedbackMessage}
              len={feedbacks.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
