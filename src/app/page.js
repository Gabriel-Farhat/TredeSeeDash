import {Button} from '@/components/ui/button'
import Link from 'next/link'
import { Landmark } from 'lucide-react'
import {ChartOverView} from "@/components/chart";
import { Card, CardHeader , CardTitle , CardContent, CardDescription } from '@/components/ui/card';
import {ComboboxOp} from "@/components/Combobox";
import { Coins } from '@/components/coins';
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { ChartPizza } from '@/components/pizza';
import {RadarIA} from '@/components/radar'
import { AlertNews } from '@/components/news';

export default function Home() {
  return (
    <main style={{ background: "#181a20" }} className="sm:ml-14 p-7">
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-4">

        <Card className=" p-1 rounted-lg" 
        style={{ background: "#1e2329" }}>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-base select-none text-white mr-auto">
                Seu saldo estimado
              </CardTitle>
            </div>

            <CardContent className="text-xl sm:text-3xl p-0 font-bold text-white lg:grid-cols-4 gap-4">
             
             
              <article className="flex items-center gap-4 mb-2 py-2 text-xl sm:text-4xl p-0 font-bold text-white">
                80.355,62
                        <div >
                        <ComboboxOp/>
                            
                        </div>
                    </article>
             
             
            </CardContent>

            <CardDescription  style={{ color: "#F2F2F2" }}>
            PNL de hoje $ 211,1361 (0,3%)
            </CardDescription>

          </CardHeader>
        </Card>

        <Card style={{ background: "#1e2329" }}>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-base select-none text-white">
                Divisão da Carteira
              </CardTitle>

              <Link 

              href="#"
              className="text-lg sm:text-xl ml-auto text-white">
 
              </Link>
              
            </div>
            <CardContent className="text-base sm:text-lg  p-0 text-white">
                    <article className="flex items-center gap-4 mb-2 py-2 text-sm  sm:text-lg text-white">
                        <Avatar className="w-7 h-7 sm:w-9 sm:h-9">
                            <AvatarImage className="" src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png"/>
                            <AvatarFallback>BTC</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>BTC</p>
                            
                        </div>
                        <div>
                            <p>$ 50.214.81</p>
                        </div>
                    </article>
                    <article className="flex items-center gap-4 mb-2 py-2 text-sm sm:text-lg text-white">
                        <Avatar className="w-7 h-7 sm:w-9 sm:h-9">
                            <AvatarImage className="" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png"/>
                            <AvatarFallback>ETH</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>ETH</p>
                            
                        </div>
                        <div>
                            <p>$ 30.140.81</p>
                        </div>
                    </article>
            </CardContent>
          </CardHeader>
        </Card>

        <Card 
        
        style={{ background: "#1e2329" }}>
          <CardHeader className="p-0 pt-6 pl-6 pr-6">
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-base select-none text-white ">
                Sujestões da IA
              </CardTitle>
              <Link 
              href="#"
              className="text-lg sm:text-xl ml-auto text-white">
                Ver mais 
              </Link>
            </div>
            <CardContent className="text-base sm:text-lg font-bold text-white p-0 ">
              <RadarIA/>
            </CardContent>
          </CardHeader>

        </Card> 

        <Card style={{ background: "#1e2329" }}>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl select-none text-white">
                Notícias Relevantes do Mercado
              </CardTitle>

              <Link 

              href="#"
              className="text-lg sm:text-xl ml-auto text-white">
                Ver mais 
              </Link>
              
            </div>
            <CardContent className="p-0 text-base sm:text-lg font-bold text-white">
              <AlertNews/>
            </CardContent>
          </CardHeader>
        </Card> 

      </section>

      <section className='mt-4 flex flex-col md:flex-row gap-4 justify-center'>
        <ChartPizza/>
        <ChartOverView/>
        <Coins/>
        
        <Card className="mt-7" style={{ background: "#1e2329" }}>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg mb-4 sm:text-xl select-none text-white">
                Historico de Transações
              </CardTitle>


              
            </div>
            <CardContent 
            style={{ background: "#181a20", minHeight: "50px" , color: "#E2E2E2" }}
            className="p-2 text-base sm:text-lg select-none font-bold text-white">
               <Landmark /> Transferencia enviada

               <CardDescription>
                Gabriel Rodrigues Farhat <br />
                $3.000,00 <br />
                PayPal
               </CardDescription>
            </CardContent>
            
            <CardContent 
            style={{ background: "#181a20", minHeight: "50px" , color: "#E2E2E2" }}
            className="p-2 text-base sm:text-lg select-none font-bold text-white">
               <Landmark 
               style={{color: "#4CAF50"}}
               /> 
                Transferencia recebida
                
               <CardDescription>
                Thais Carollinne Barbosa Ferreira <br />
                $10.400,00 <br />
                Boleto
               </CardDescription>
            </CardContent>
            <Link 
              href="#"
              className="flex text-lg sm:text-xl m-auto pt-4 text-white">
                Ver mais 
              </Link>
          </CardHeader>
        </Card> 
        
      </section>

    </main>
  );
}
