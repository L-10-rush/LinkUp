// src/pages/SignUpPage.jsx

import React, { useState } from "react";
import { MessageSquare, User, Mail, Lock, EyeOff, Eye, Loader2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import LetterGlitch from "../components/LetterGlitch";
import toast from "react-hot-toast";

function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Inavlid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Passord must be at least 6 characters");

    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await signup(formData);
    //console.log("Form data:", formData);

    const success = validateForm();
    
    if (success===true) signup(formData);
    else console.log("inside the handel")
  };

  return (
    // 1. Main container: Relative positioning context for the background
    <div className="relative min-h-screen w-full overflow-hidden bg-[#101010]">
      
      {/* 2. Glitch Background: Absolutely positioned to fill the entire container */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch 
            // Optional: Adjust glitch properties for a background effect
            glitchSpeed={50}
            glitchColors={["#3a2c5c", "#7a52b3", "#1a1423"]}
        />
      </div>

      {/* 3. Form Container: Relative positioning to sit on top of the background */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8 rounded-xl bg-[#101010]/80 p-8 shadow-2xl backdrop-blur-sm">
          
          {/* LOGO */}
          <div className="text-center">
            <div className="flex flex-col items-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-white">Create Account</h1>
              <p className="text-base-content/60">Get started with your free account</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-300">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={"input input-bordered w-full pl-10 bg-gray-800/50 text-white border-gray-700"}
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-300">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="size-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={"input input-bordered w-full pl-10 bg-gray-800/50 text-white border-gray-700"}
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-300">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="size-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={'input input-bordered w-full pl-10 bg-gray-800/50 text-white border-gray-700'}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="size-5 text-base-content/40" />
                  ) : (
                    <Eye className="size-5 text-base-content/40" />
                  )}
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>

      {/* Right Side: The Glitch Animation */}
      {/* <div className="hidden lg:flex items-center justify-center bg-[#101010] p-8">
        <div className="w-full h-full max-w-md max-h-md aspect-square">
            <SlidingPuzzleGlitch />
        </div>
      </div> */}

        </div>
      </div>
    </div>
  );
}



export default SignUpPage;