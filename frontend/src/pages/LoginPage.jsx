// src/pages/LoginPage.jsx

import React, { useState } from "react";
import { MessageSquare, Mail, Lock, EyeOff, Eye, Loader2 } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link } from "react-router-dom";
import LetterGlitch from "../components/LetterGlitch";
import toast from "react-hot-toast";

function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { login, isLoggingIn } = useAuthStore();

	const validateForm = () => {
		if (!formData.email.trim()) return toast.error("Email is required");
		if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
		if (!formData.password) return toast.error("Password is required");
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isFormValid = validateForm();
		if (isFormValid) {
			await login(formData);
		}
	};

	return (
		<div className='relative min-h-screen w-full overflow-hidden bg-[#101010]'>
			{/* Glitch Background */}
			<div className='absolute inset-0 z-0'>
				<LetterGlitch
					glitchSpeed={50}
					glitchColors={["#3a2c5c", "#7a52b3", "#1a1423"]}
				/>
			</div>

			{/* Form Container */}
			<div className='relative z-10 flex min-h-screen flex-col items-center justify-center p-6 sm:p-12'>
				<div className='w-full max-w-md space-y-8 rounded-xl bg-[#101010]/80 p-8 shadow-2xl backdrop-blur-sm'>
					{/* LOGO */}
					<div className='text-center'>
						<div className='group flex flex-col items-center gap-2'>
							<div className='flex size-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20'>
								<MessageSquare className='size-6 text-primary' />
							</div>
							<h1 className='mt-2 text-2xl font-bold text-white'>Sign In</h1>
							<p className='text-base-content/60'>Log in to your account</p>
						</div>
					</div>

					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Email */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text font-medium text-gray-300'>Email</span>
							</label>
							<div className='relative'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<Mail className='size-5 text-base-content/40' />
								</div>
								<input
									type='email'
									className={"input input-bordered w-full border-gray-700 bg-gray-800/50 pl-10 text-white"}
									placeholder='you@example.com'
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								/>
							</div>
						</div>

						{/* Password */}
						<div className='form-control'>
							<label className='label'>
								<span className='label-text font-medium text-gray-300'>Password</span>
							</label>
							<div className='relative'>
								<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
									<Lock className='size-5 text-base-content/40' />
								</div>
								<input
									type={showPassword ? "text" : "password"}
									className={"input input-bordered w-full border-gray-700 bg-gray-800/50 pl-10 text-white"}
									placeholder='••••••••'
									value={formData.password}
									onChange={(e) => setFormData({ ...formData, password: e.target.value })}
								/>
								<button
									type='button'
									className='absolute inset-y-0 right-0 flex items-center pr-3'
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? (
										<EyeOff className='size-5 text-base-content/40' />
									) : (
										<Eye className='size-5 text-base-content/40' />
									)}
								</button>
							</div>
						</div>

						<button type='submit' className='btn btn-primary w-full' disabled={isLoggingIn}>
							{isLoggingIn ? (
								<>
									<Loader2 className='size-5 animate-spin' />
									Signing In...
								</>
							) : (
								"Sign In"
							)}
						</button>
					</form>

					<div className='text-center'>
						<p className='text-base-content/60'>
							Don't have an account?{" "}
							<Link to='/signup' className='link link-primary'>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;