import type { NextPage } from 'next';


export const IMac:NextPage = () => {
  	return (
    		<div className="w-full relative h-screen overflow-hidden bg-red-800 text-left text-base text-white font-open-sans">
      			<div className="absolute top-[0px] left-[0px] w-[1280px] h-[768px]">
        				<img className="absolute top-[0px] left-[0px] w-[640px] h-[768px] object-cover" alt="" src="Rectangle 15.png" />
        				<div className="absolute top-[0px] left-[640px] bg-black w-[640px] h-[768px]" />
      			</div>
      			<div className="absolute top-[702px] left-[863px]">Pas de compte ? Inscrivez-vous</div>
        				<div className="absolute top-[72px] left-[876px] w-[166px] h-11 text-[32px]">
          					<div className="absolute top-[0px] left-[0px] font-semibold">Connexion</div>
        				</div>
						
						
        				<div className="absolute top-[196px] left-[770px] w-[380px] h-[75px]">
          					<div className="absolute top-[0px] left-[3px]">E-mail</div>			
							<input className="absolute top-[25px] left-[3px] rounded-8xs text-black bg-principal box-border w-[380px] h-[45px] border-[1px] border-solid border-principal" type="text" />
						</div>
						
        				<div className="absolute top-[474px] left-[770px] w-[380px] h-12">
          					<div className="absolute top-[0px] left-[0px] rounded-8xs bg-principal box-border w-[380px] h-12 border-[1px] border-solid border-principal" />
          					<div className="absolute top-[13px] left-[140px] font-semibold">Se connecter</div>
        				</div>
							
        				<div className="absolute top-[414px] left-[770px] w-[178px] h-6 text-gray-300">
          					<div className="absolute top-[1px] left-[36px]">Se rappeler de moi</div>
          					<img className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden opacity-[0.5]" alt="" src="check-square.svg" />
        				</div>
        				<div className="absolute top-[305px] left-[770px] w-[380px] h-[75px] text-gray-200 font-hind-madurai">
          					<div className="absolute top-[0px] left-[0px] w-[380px] h-[75px]">
            						
            						<div className="absolute top-[0px] left-[3px] font-open-sans text-white">Mot de passe</div>
            						<input className="absolute top-[27px] left-[0px] rounded-8xs box-border w-[380px] h-12 border-[1px] border-solid text-black" />
									</div>
          								<img className="absolute top-[42px] left-[352px] w-[18px] h-[18px] overflow-hidden opacity-[0.25]" alt="" src="eye.svg" />
        							</div>
        				<div className="absolute top-[546px] left-[770px] w-[380px] h-12 text-gray-300">
          					<div className="absolute top-[13px] left-[129.61px] w-[195px] h-[22px]">
            						<button className=" top-[0px] left-[0px] font-semibold">Se connecter avec google</button>
          					</div>
          					<div className="absolute top-[0px] left-[0px] rounded-8xs box-border w-[380px] h-12 border-[1px] border-solid border-gray-400" />
          					<img className="absolute h-[41.67%] w-[5.16%] top-[29.17%] right-[70.1%] bottom-[29.17%] left-[24.74%] max-w-full overflow-hidden max-h-full" alt="" src="Vector.svg" />
        				</div>
        				<img className="absolute top-[32px] left-[1231px] w-6 h-6 overflow-hidden opacity-[0.5]" alt="" src="x-circle.svg" />
        				</div>);
      			};
      			
export default IMac;
      			