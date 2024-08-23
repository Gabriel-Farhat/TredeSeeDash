"use client"

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import {ChartContainer,  ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent} from "../ui/chart"
import{  Radar, RadarChart,PolarRadiusAxis, PolarGrid, Legend, PolarAngleAxis } from "recharts"



export function RadarIA () {  

    const data = [
        {
          "subject": "POPULAR",
          "A": 70,
          "B": 110,
          "fullMark": 150
        },
        {
          "subject": "EM ALTA",
          "A": 128,
          "B": 100,
          "fullMark": 150
        },
        {
          "subject": "VALOR",
          "A": 86,
          "B": 130,
          "fullMark": 150
        },
        {
          "subject": "CUSTO",
          "A": 110,
          "B": 80,
          "fullMark": 150
        },
        {
          "subject": "PNL",
          "A": 185,
          "B": 90,
          "fullMark": 150
        },
        {
          "subject": "VOLUME",
          "A": 65,
          "B": 185,
          "fullMark": 150
        }
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
        <Card style={{ background: "#1e2329" }} className="w-full p-0 md:max-w-[300px] m-auto border-0">

            <CardContent className="p-0">
                <ChartContainer config={chartConfig} className="min-h-[100px] w-full">
                <RadarChart outerRadius={65} width={730} height={250} data={data}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} />
                    <Radar name="BTC" dataKey="A" stroke="#627EEA" fill="#627EEA" fillOpacity={0.6} />
                    <Radar name="PEPE" dataKey="B" stroke="#F7931A" fill="#F7931A" fillOpacity={0.6} />
                    
                </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}