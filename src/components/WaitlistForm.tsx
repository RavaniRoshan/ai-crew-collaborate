
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from 'react-router-dom';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // Navigate to thank you page with email as state
      navigate('/thank-you', { state: { email } });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-grow waitlist-input bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      />
      <Button type="submit" disabled={loading} className="waitlist-btn">
        <span className="text-white">{loading ? 'Joining...' : 'Join Waitlist'}</span>
        {!loading && <ArrowRight className="ml-2 h-4 w-4 text-white" />}
      </Button>
    </form>
  );
};

export default WaitlistForm;
