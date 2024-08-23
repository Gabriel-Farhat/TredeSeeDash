import {Sheet, SheetTrigger, SheetContent} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import { BadgeDollarSign  , Home, ChartNoAxesCombined , PanelBottom,  SunMoon , Bitcoin, Settings2, LogOut } from 'lucide-react'
import { TooltipProvider , Tooltip , TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'


export function Sidebar (){
    return(
        <div 
        
        className="Flex w-full flex-col bg-muted/40">

            <aside 
            style={{ background: "#1e2329" }} 
            className="fixed inset-y-0 left-0 z-10 hidden w-16 border-r bg-background sm:flex flex-col">
                <nav 
                
                className="flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Link rel="stylesheet" 
                            href="#"
                            className=" flex h-12 w-12 shrink-0 items-center justify-center bg-primary-foreground rounded-full"
                            style={{ background: "#F3BA2F" }}
                            > 
                            <ChartNoAxesCombined className="h-8 w-8"/>
                            
                        </Link>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <Home className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <BadgeDollarSign className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <Bitcoin className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <SunMoon className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <Settings2 className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>

                </nav>

                <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild >
                                <Link  
                                    href="#"
                                    className=" flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
                                    > 
                                    <LogOut className="h-5 w-5"/>
                            </Link>
                            </TooltipTrigger>
                        </Tooltip>
                    </TooltipProvider>
                    
                </nav>

            </aside>
            


            <div 
            
            className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header 
                style={{ background: "#181a20" }}
                className='sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'
                >
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size="icon" variant="outline" 
                            style={{ background: "#1e2329" }}
                            className="sm:hidden">
                                <PanelBottom className='w-5 h-5 text-white'/>
                                <samp className='sr-only'>abrir</samp>
                            </Button>
                        </SheetTrigger>
                        
                        <SheetContent
                        style={{ background: "#1e2329" }}
                        side="left" className="sm:max-w-x text-white">
                            <nav className="grid gap-6 text-lg font-medium ">
                                <Link 
                                href="#"
                                className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
                                prefetch={false}
                                style={{ background: "#F3BA2F" }}
                                >
                                    <ChartNoAxesCombined  className="text-black h-5 w-5 transition-all"/>
                                    <span className="sr-only">Logo do Projeto TredeSee</span>
                                </Link>

                                <Link 
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                                style={{ color: "#E0E0E0" }}
                                >
                                    <Home  className=" h-5 w-5 transition-all"/>
                                    Inicio
                                </Link>

                                <Link 
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                                style={{ color: "#E0E0E0" }}
                                >
                                    <BadgeDollarSign   className=" h-5 w-5 transition-all"/>
                                    Mercados
                                </Link>

                                <Link 
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                                style={{ color: "#E0E0E0" }}
                                >
                                    <Bitcoin    className=" h-5 w-5 transition-all"/>
                                    Comprar e vender
                                </Link>

                                <Link 
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                                style={{ color: "#E0E0E0" }}
                                >
                                    <SunMoon className=" h-5 w-5 transition-all"/>
                                    Tema
                                </Link>

                                <Link 
                                href="#"
                                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                prefetch={false}
                                style={{ color: "#E0E0E0" }}
                                >
                                    <Settings2 className=" h-5 w-5 transition-all"/>
                                    Configurações
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>

                    <h2
                    className='text-white text-xl'
                    >Menu</h2>
                </header>
            </div>
        </div>
    )
}