import React from "react";
import {
	Card,
	CardHeader,
	CardTitle,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { loginReq, postRequest } from "@/utils/api";

interface LoginPopupProps {
	btntext: string;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ btntext }) => {
	const handleLogin = async () => {
		const userEmail = (document.getElementById("name") as HTMLInputElement).value;
		const userPassword = (document.getElementById("password") as HTMLInputElement).value;
		// Change Alerts in Future

		if (!userEmail || !userPassword) {
			alert("Please fill in both fields.");
			return;
		}
		const loginData = {
			userEmail,
			userPassword,
		};

		// Call API
		try {
			await loginReq(
				"https://serene-fortress-91389-77d1fb95872a.herokuapp.com/user/login",
				loginData,
				"",
				(response) => {
					// Change state + store tokens; 
					alert("Login Successful");
				}
			);
		} catch (error) {
			alert((error as Error).message);
		}
	};

	const handleSignup = () => {
		// Signup logic here
		// Username length validation
		const userName = (document.getElementById('username') as HTMLInputElement).value;
		const firstName = (document.getElementById('firstName') as HTMLInputElement).value;
		const lastName = (document.getElementById('lastName') as HTMLInputElement).value;
		const userEmail = (document.getElementById('email') as HTMLInputElement).value;
		const userPhone = (document.getElementById('phoneNumber') as HTMLInputElement).value;
		const Pass1 = (document.getElementById('current') as HTMLInputElement).value;
		const Pass2 = (document.getElementById('new') as HTMLInputElement).value;
		var userPassword = '';
		if(Pass1 === Pass2) {
			 userPassword = Pass1;
		}

		const signupData = {userName,firstName,lastName,userEmail,userPhone,userPassword};
		





		// if (username.length < 3 || username.length > 20) {
		// 	alert('Username must be between 3 and 20 characters.');
		// 	return;
		//   }
		//   // Password validation
		//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
		//   if (!passwordRegex.test(password)) {
		// 	alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one digit.');
		// 	return;
		//   }
	};

	return (
		<>
			<Dialog>
				<DialogTrigger asChild>
					<Button variant="outline">{btntext}</Button>
				</DialogTrigger>
				<DialogContent className="justify-center pt-10 w-[475px]">
					<Tabs defaultValue="Login" className="w-[400px]">
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="Login">LogIn</TabsTrigger>
							<TabsTrigger value="SignUp">SignUp</TabsTrigger>
						</TabsList>
						<TabsContent value="Login">
							<Card>
								<CardHeader>
									<CardTitle>Login to your Account</CardTitle>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="username">
											Username / Email id
										</Label>
										<Input
											id="name"
											placeholder="Enter your Email"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="password">
											Password
										</Label>
										<Input
											id="password"
											type="password"
											placeholder="Enter your Password"
										/>
									</div>
								</CardContent>
								<CardFooter className="justify-center">
									<Button
										className="w-full"
										onClick={handleLogin}
									>
										Log In
									</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="SignUp">
							<Card>
								<CardHeader>
									<CardTitle>Create a new Account</CardTitle>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="username">
											Username
										</Label>
										<Input
											id="username"
											placeholder="Enter your Username"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="firstName">
											First Name
										</Label>
										<Input
											id="firstName"
											placeholder="Enter your First Name"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="lastName">
											Last Name
										</Label>
										<Input
											id="lastName"
											placeholder="Enter your Last Name"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="phoneNumber">
											Phone Number
										</Label>
										<Input
											id="phoneNumber"
											placeholder="Enter your Phone Number"
											type="tel"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="email">Email id</Label>
										<Input
											id="email"
											placeholder="Enter your Email"
											type="email"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="current">
											Password
										</Label>
										<Input
											id="current"
											type="password"
											placeholder="Enter your Password"
										/>
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">
											Re-Enter password
										</Label>
										<Input
											id="new"
											type="password"
											placeholder="Re-Enter your Password"
										/>
									</div>
								</CardContent>
								<CardFooter className="justify-center">
									<Button
										className="w-full"
										onClick={handleSignup}
									>
										Sign Up
									</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>
		</>
	)
};

export default LoginPopup;
