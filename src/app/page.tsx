import Input from "@/components/Input";
import Image from "next/image";

const App = () => {
  return (
    <section className="w-full min-h-dvh flex justify-center items-center">
      <div className="w-[628px] bg-white border-4 border-primary p-16 rounded-xl flex items-center flex-col">
        <h1 className="text-4xl font-bold text-primary capitalize mb-8">
          selamat datang
        </h1>
        <Input
          label="username"
          type="text"
          placeholder="masukkan username"
          name="username"
        />
        <Input
          label="password"
          type="password"
          placeholder="masukkan password"
          name="password"
        />
        <button
          type="submit"
          className="w-full py-3 capitalize text-lg font-bold text-white bg-primary hover:bg-secondary rounded-md"
        >
          masuk
        </button>
      </div>
    </section>
  );
};

export default App;
