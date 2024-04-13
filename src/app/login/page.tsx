import { Input, Button, Image } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-800 p-4 rounded border border-gray-200">
      <div className="flex flex-col w-4/12 ">
        <h1 className="text-2xl text-white mb-2 text-center">Joker Login</h1>
        <div className="flex items-center justify-center">
          <Image src="./logo.png" alt="Joker Logo" width={250} />
        </div>
        <form>
          <Input
            size="lg"
            className="mb-4"
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <Input
            size="lg"
            type="password"
            label="Password"
            placeholder="Enter password"
          />
          <div className="flex items-center justify-center">
            <Button size="lg" type="submit" color="primary" className="mt-4">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
