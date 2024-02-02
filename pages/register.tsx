import type { NextPage } from "next";
import Link from "next/link";

export const IMac: NextPage = () => {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center text-center text-base text-white">
    <div className="absolute left-0 top-0 h-[768px] w-[1280px]">
      <img
        className="absolute left-0 top-0 h-[768px] w-[800px] object-cover"
        alt=""
        src="rectangle-15@2x.png"
      />
      <div className="absolute left-[700px] top-0 h-[768px] w-[850px] bg-black" />
    </div>
      <div className="absolute left-[970px] top-[702px]">
        Pas de compte ? <Link href="/login" className="loginlink" style={{ textDecoration: "none", color: "fff"}}>Inscrivez-vous</Link>
      </div>
    <div className="absolute left-[1000px] top-[72px] h-11 w-[166px] text-[32px]">
      <div className="absolute left-0 top-0 font-semibold">
        Connexion
      </div>
    </div>
  
    <div className="absolute left-[900px] top-[196px] h-[75px] w-[380px]">
      <div className="absolute left-0 top-0">E-mail</div>
      <input
        className="rounded-8xs bg-principal border-principal absolute left-0 top-[25px] box-border h-[45px] w-[380px] border-[1px] border-solid text-black"
        type="text"
      />
    </div>
    <button className="connectbutton absolute left-[900px] top-[474px] h-12 w-[380px]">
      <div className="connectbuttondiv rounded-8xs bg-principal border-principal absolute left-0 top-0 box-border h-12 w-[380px] border-[1px] border-solid" />
      <div className="absolute left-[140px] top-[13px] font-semibold">
        Se connecter
      </div>
    </button>
    <div className="absolute left-[900px] top-[414px] h-6 w-[178px] text-gray-300">
      <input
        type="checkbox"
        className="absolute left-0 top-0 h-6 w-6 overflow-hidden opacity-[0.5]"
      />
      <div className="absolute left-[36px] top-[1px]">Se rappeler de moi</div>
    </div>
    <div className="font-hind-madurai absolute left-[900px] top-[305px] h-[75px] w-[380px] text-gray-200">
      <div className="absolute left-0 top-0 h-[75px] w-[380px]">
        <div className="font-open-sans absolute left-[3px] top-0 text-white">
          Mot de passe
        </div>
        <input
          type="password"
          className="rounded-8xs absolute left-0 top-[27px] box-border h-12 w-[380px] border-[1px] border-solid text-black"
        />
      </div>
    </div>
    <div className="connectbutton absolute left-[900px] top-[546px] h-12 w-[380px] text-gray-300">
      <div className="absolute left-[129.61px] top-[13px] h-[22px] w-[195px]">
        <div className="left-0 top-0 font-semibold">
          Se connecter avec Google
        </div>
      </div>
      <button className="connectbuttondiv rounded-8xs absolute left-0 top-0 box-border h-12 w-[380px] border-[1px] border-solid border-gray-400" />
    </div>
  </div>
  );
};

export default IMac;
