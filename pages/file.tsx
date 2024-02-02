// pages/forfaits.js
import { Html, Head, Main, NextScript } from 'next/document'
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
}

