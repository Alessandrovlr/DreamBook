export const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100%] w-[100%]">
      <form
        action=""
        className="flex flex-col justify-center items-center h-[90%] w-[60%]"
      >
        <div className="w-[100%] h-[100%]">
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="focus:outline-none w-[30%] h-[10%] bg-gray-700 rounded-sm"
          />
          <label htmlFor="password"> Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="focus:outline-none w-[30%] h-[10%] bg-gray-700 rounded-sm"
          />
        </div>

        <button
          type="submit"
          className="w-[30%] h-[10%] bg-blue-500 rounded-sm"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};
