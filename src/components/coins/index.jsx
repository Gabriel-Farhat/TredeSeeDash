import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardHeader, CardTitle , CardContent} from "../ui/card";

export function Coins (){
    return (
        <div >
            <Card 
            className="flex-1 mt-7 "
            style={{ background: "#1e2329" }}>
                <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-base sm:text-base select-none text-white mr-auto">
                        Moedas de Maior Volume
                    </CardTitle>
                </div>




                </CardHeader>
                <CardContent>
                    
                    <article className="flex items-center gap-4 mb-2 py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://cdn-icons-png.flaticon.com/512/5968/5968260.png"/>
                            <AvatarFallback>BTC</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>BTC</p>
                            
                        </div>
                        <div>
                            <p>$ 60.872,1</p>
                        </div>
                        <div 
                        style={{ color: "#4CAF50" }}>
                            <p>+2.18%</p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 mb-2 py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png"/>
                            <AvatarFallback>ETH</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>ETH</p>
                            
                        </div>
                        <div>
                            <p>$ 2.623,64</p>
                        </div>
                        <div 
                        style={{ color: "#4CAF50" }}>
                            <p>+1.79%</p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 mb-2 py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png"/>
                            <AvatarFallback>SOL</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>SOL</p>
                            
                        </div>
                        <div>
                            <p>$ 142,954</p>
                        </div>
                        <div style={{ color: "#4CAF50" }}>
                            <p>+1.49%</p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 mb-2 py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/tron-trx-7152138-5795294.png"/>
                            <AvatarFallback>TRX</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>TRX</p>
                            
                        </div>
                        <div>
                            <p>$ 0,156217</p>
                        </div>
                        <div style={{ color: "#F44336" }}>
                            <p>-3.08%</p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4 mb-2 py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://cryptologos.cc/logos/pepe-pepe-logo.png"/>
                            <AvatarFallback>PEPE</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>PEPE</p>
                            
                        </div>
                        <div>
                            <p>$ 0,0798</p>
                        </div>
                        <div style={{ color: "#4CAF50" }}>
                            <p>+3.51%</p>
                        </div>
                    </article>

                    <article className="flex items-center gap-4  py-2 text-white">
                        <Avatar className="w-8 h-8">
                            <AvatarImage className="" src="https://cryptologos.cc/logos/bnb-bnb-logo.png"/>
                            <AvatarFallback>BNB</AvatarFallback>
                        </Avatar>
                        <div >
                            <p>BNB</p>
                            
                        </div>
                        <div>
                            <p>$ 584,009</p>
                        </div>
                        <div style={{ color: "#4CAF50" }}>
                            <p>+5.83%</p>
                        </div>
                    </article>



                                        
                </CardContent>

            </Card>
        </div>
    );
}