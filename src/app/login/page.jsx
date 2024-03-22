

'use client'

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { UserIcon } from "lucide-react";
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from 'react'

import './style.css'
export default function Login() {
  const router = useRouter();
  const [formData, setFormData]= useState({
    email: "",
    password: "",
    error: ""
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setFormData({ ...formData, error: 'Please fill in all fields' });
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Invalid email or password');
      }
      router.push('/dashboard');
    } catch (error) {
      setFormData({ ...formData, error: error.message });
    }
  };

  const [emailClicked, setEmailClicked] = useState(false);
  const [passwordClicked, setPasswordClicked] = useState(false);

  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleEmailClick = () => {
    setEmailClicked(true);
    setEmailFocused(true);
  };

  const handlePasswordClick = () => {
    setPasswordClicked(true);
    setPasswordFocused(true);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Avatar className="rounded-full w-8 h-8 bg-gray-400">
            <AvatarImage alt="User profile picture" src="/placeholder.svg?height=64&width=64" />
          </Avatar>
        </div>
        <div>
          <div className="space-y-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900" style={{ fontFamily: 'NATS' }}>Content de te revoir!</h2>
            <p className="text-center text-sm text-light-gray-1">Nous sommes heureux que vous soyez de retour pour apprendre avec la plateforme Daresni</p>
            <form className="mt-8 space-y-6" onSubmit={handleLogin}>
              <div className="flex flex-col space-y-2 mb-10">
                <label className="text-sm font-medium leading-none" htmlFor="email">Email</label>
                <div className={`relative ${emailFocused ? 'slideRight' : ''}`}>
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" style={{ size:24 }} />
                  <Input
                    className="pl-10 border-light-gray-1"
                    id="email"
                    placeholder="Email"
                    type="email"
                    onFocus={handleEmailClick}
                    onBlur={() => setEmailFocused(false)} 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2 mb-10">
                <label className="text-sm font-medium leading-none" htmlFor="password">Mot de passe</label>
                <div className={`relative ${passwordFocused ? 'slideRight' : ''}`}>
                  <LockIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
                  <Input
                    className="pl-10 border-light-gray-1"
                    id="password"
                    placeholder="Mot de passe"
                    type="password"
                    onFocus={handlePasswordClick}
                    onBlur={() => setPasswordFocused(false)} 
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                {formData.error && <p className="text-red-500">{formData.error}</p>}
                <Button type="submit" className="w-full bg-purple-added border-blue border-[1px] hover:bg-blue text-white mb-10">
                  Se connecter
                </Button>
              </div>
            </form>
            <p className="text-center text-light-gray-1 border-t border-light-gray-1 text-sm">
            Vous n'avez pas de compte ?
              <Link className="text-purple-added" href="/signup">
              Inscription gratuite!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}



function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
