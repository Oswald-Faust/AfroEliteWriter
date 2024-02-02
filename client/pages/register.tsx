// pages/forfaits.js
/*import { Html, Head, Main, NextScript } from 'next/document'
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import Image from "next/image";
import React from "react";
import { PinContainer } from "../components/ui/3d-pin";
import { Header } from '../components/Header';

export default function Forfaits() {
  return (
    
    <div className="h-[40rem] w-full bg-[] flex items-center justify-center" style={{backgroundImage: "url('/vue-dessus-adulte-appareils.jpg')"}}>
  
      <PinContainer
        title="Je veux des articles"
        href="https://www.google.com"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] "
          >
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
            Créer un compte client
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             Commandez vos articles de qualités sur les meilleurs sujets et les meilleurs thématiques
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="Je suis rédacteur"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl text-slate-100">
            Créer un compte rédacteur
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Rédigez les articles de qualités sur les meilleurs sujets et les meilleurs thématiques
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
    
    
  );
}*/

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
  <div className="absolute left-[950px] top-[702px]">
  Vous avez deja un compte ?{" "}
    <Link href="/login" className="loginlink" style={{ textDecoration: "none", color: "fff" }}>
    Se connecter
    </Link>
  </div>
  <div className="absolute left-[1000px] top-[72px] h-11 w-[166px] text-[32px]">
    <div className="absolute left-0 top-0 font-semibold">
      Inscription
    </div>
  </div>

  <div className="absolute left-[900px] top-[196px] h-[75px] w-[380px]">
    <div className="absolute left-0 top-0">E-mail</div>
    <input
      className="rounded-8xs bg-principal border-principal absolute left-0 top-[25px] box-border h-[45px] w-[380px] border-[1px] border-solid text-black"
      type="text"
    />
  </div>

  <div className="absolute left-[900px] top-[280px] h-[75px] w-[380px]">
    <div className="absolute left-0 top-0">Nom</div>
    <input
      className="rounded-8xs bg-principal border-principal absolute left-0 top-[25px] box-border h-[45px] w-[380px] border-[1px] border-solid text-black"
      type="text"
    />
  </div>

  <button className="connectbutton absolute left-[900px] top-[520px] h-12 w-[380px]">
    <div className="connectbuttondiv rounded-8xs bg-principal border-principal absolute left-0 top-0 box-border h-12 w-[380px] border-[1px] border-solid" />
    <div className="absolute left-[150px] top-[13px] font-semibold">
      Se connecter
    </div>
  </button>
  <div className="absolute left-[900px] top-[470px] h-6 w-[178px] text-gray-300">
    <input
      type="checkbox"
      className="absolute left-0 top-0 h-6 w-6 overflow-hidden opacity-[0.5]"
    />
    <div className="absolute left-[36px] top-[1px]">Se rappeler de moi</div>
  </div>
  <div className="font-hind-madurai absolute left-[900px] top-[370px] h-[75px] w-[380px] text-gray-200">
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
  <div className="connectbutton absolute left-[900px] top-[590px] h-12 w-[380px] text-gray-300">
    <div className="absolute left-[100px] top-[13px] h-[22px] w-[195px]">
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


