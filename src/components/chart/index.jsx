"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {ChartContainer,  ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent} from "../ui/chart"
import{  Bar, BarChart, CartesianGrid, XAxis } from "recharts"

export function ChartOverView () {  

    const chartData = [
        { month: "Janeiro", BTC: 10029.21, ETH: 2080.05 },
        { month: "Fevereiro", BTC: 50170.21, ETH: 5140.01 },
        { month: "Março", BTC: 20237.55, ETH: 40120.24 },
        { month: "Abril", BTC: 43073.48, ETH: 20190.85 },
        { month: "Maio", BTC: 35209.59, ETH: 15130.02 },
        { month: "Juho", BTC: 50214.81, ETH: 30140.96 },
      ]
       
      const chartConfig = {
        BTC: {
          label: "BTC",
          color: "#F7931A",
        },
        ETH: {
          label: "ETH",
          color: "#627EEA",
        },
      } 
      
    return (
        <Card style={{ background: "#1e2329" }} className="w-full md:w-1/2 md:max-w-[600px] mt-7">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-white">Analise de Investimentos</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false}/>
                        <XAxis 
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />}/>
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Bar dataKey="BTC" fill="var(--color-BTC)" radiuns={4} />
                        <Bar dataKey="ETH" fill="var(--color-ETH)" radiuns={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}