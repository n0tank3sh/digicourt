"use client"

import { Footprints, Waves } from "lucide-react"
import { Bar, BarChart, XAxis } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
    { date: "2024-07-15", disposal: 450, pe: 300 },
    { date: "2024-07-16", running: 380, swimming: 420 },
    { date: "2024-07-17", running: 520, swimming: 120 },
    { date: "2024-07-18", running: 140, swimming: 550 },
    { date: "2024-07-19", running: 600, swimming: 350 },
    { date: "2024-07-20", running: 480, swimming: 400 },
]

const chartConfig = {
    running: {
        label: "disposal",
        color: "var(--pinky)",
        icon: Footprints,
    },
    swimming: {
        label: "pending",
        color: "var(--pinky2)",
        icon: Waves,
    },
} satisfies ChartConfig

export function JudgesPerformance() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Judges Performance</CardTitle>
                <CardDescription>Disposal rates by date</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => {
                                return new Date(value).toLocaleDateString("en-US", {
                                    weekday: "short",
                                })
                            }}
                        />
                        <Bar
                            dataKey="running"
                            stackId="a"
                            fill="var(--color-pinky)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="swimming"
                            stackId="a"
                            fill="var(--color-pinky2)"
                            radius={[4, 4, 0, 0]}
                        />
                        <ChartTooltip
                            content={<ChartTooltipContent hideLabel />}
                            cursor={false}
                            defaultIndex={1}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
