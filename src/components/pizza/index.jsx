"use client"

import { Card, CardContent, CardHeader, CardTitle , CardDescription} from "../ui/card"
import {ChartContainer, ChartTooltip, ChartLegend, ChartTooltipContent, ChartLegendContent} from "../ui/chart"
import{  Pie, PieChart } from "recharts"

export function ChartPizza () {  

    const data01 = [
        {
          "name": "BTC",
          "value": 50170.21
        }];

    const data02 = [
    {
        "name": "ETH",
        "value": 30.141
    }];

 
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
        <Card style={{ background: "#1e2329" }} className="w-full md:w-1/2 md:max-w-[340px] mt-7">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-white">Distribuição de Investimentos</CardTitle>
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="mt-4 min-h-[200px] w-full">
                    <PieChart >
                  
                        <ChartTooltip content={<ChartTooltipContent  />}/>
                        <ChartLegend content={<ChartLegendContent />} className="text-white"/>
                        <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#F7931A"/>
                        <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#627EEA" label />
                    </PieChart>
                </ChartContainer>

                <CardDescription className="mt-4">
                    Divisão dos bens em dolar
                </CardDescription>
            </CardContent>
        </Card>
    )
}