import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { SpinnerIcon } from "@/icons/SpinnerIcon";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { fetchFeedbacks } from "@/services/feedbackService";
import { toast } from "sonner";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address",
  }),
  feedbackMessage: z.string().min(1, {
    message: "Feedback message is required",
  }),
});

export const FeedbackForm = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      feedbackMessage: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("values", values);

    setLoading(true);
    try {
      await axios.post(`${BACKEND_URL}/submit-feedback`, values);
      form.reset();
      toast("Feedback submitted successfully.");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center border border-slate-600 p-8 rounded-2xl w-80">
      <span className="text-slate-900 text-3xl text-center font-bold mb-6">
        Feedback Form
      </span>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="feedbackMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Feedback Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write your feedback here."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="cursor-pointer" disabled={loading}>
            {loading ? (
              <>
                <SpinnerIcon /> Please wait
              </>
            ) : (
              "Submit"
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};
