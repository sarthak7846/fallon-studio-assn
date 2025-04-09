import { useState } from "react";
import { motion } from "motion/react";
import { FeedbackForm } from "./components/FeedbackForm";
import { Button } from "./components/ui/button";
import { FeedbackList } from "./components/FeedbackList";

function App() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="bg-slate-200  h-screen overflow-hidden">
      {showList ? (
        <div className="mb-4">
          <FeedbackList onClose={() => setShowList(false)} />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-evenly items-center h-screen"
        >
          <FeedbackForm />
          <div className="w-[1px] bg-slate-900 h-full" />
          <Button
            variant="secondary"
            size="lg"
            className="cursor-pointer border border-slate-600 hover:bg-slate-800 hover:text-white px-10 py-6 text-xl"
            onClick={() => setShowList(true)}
          >
            View Submitted Feedbacks
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default App;
