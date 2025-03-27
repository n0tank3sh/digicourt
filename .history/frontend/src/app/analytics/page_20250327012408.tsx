"use client"

import type React from "react"

import { MainLayout } from "@/components/layout/main-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserRole } from "@/types"
import { BarChart, Calendar, Clock, Download, FileText, Gavel, PieChart, TrendingDown, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Pie, PieChartComponent } from "@/components/ui/piechart"
import { RadarComponent } from "@/components/ui/radar"
import { LineChartComponent } from "@/components/ui/linechart"
import { HearingPieChartEfficiency } from "@/components/ui/hearingeffeciency"
import { BarGraphCourtUtilization } from "@/components/ui/courtutilization"

// Mock user data
const user = {
  name: "Justice Sharma",
  email: "justice.sharma@courts.gov.in",
  role: UserRole.JUDGE,
}

export default function AnalyticsPage() {
  return (
    <MainLayout user={user}>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue="last30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last7days">Last 7 Days</SelectItem>
                <SelectItem value="last30days">Last 30 Days</SelectItem>
                <SelectItem value="last90days">Last 90 Days</SelectItem>
                <SelectItem value="lastyear">Last Year</SelectItem>
                <SelectItem value="custom">Custom Range</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
              <span className="sr-only">Download report</span>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <AnalyticsCard
            title="Total Cases"
            value="1,284"
            trend="+8%"
            trendDirection="up"
            description="vs. previous period"
            icon={<FileText className="h-5 w-5 text-muted-foreground" />}
          />
          <AnalyticsCard
            title="Case Disposal Rate"
            value="68%"
            trend="+12%"
            trendDirection="up"
            description="vs. previous period"
            icon={<Gavel className="h-5 w-5 text-muted-foreground" />}
          />
          <AnalyticsCard
            title="Avg. Resolution Time"
            value="124 days"
            trend="-15%"
            trendDirection="down"
            description="vs. previous period"
            icon={<Clock className="h-5 w-5 text-muted-foreground" />}
          />
          <AnalyticsCard
            title="Adjournment Rate"
            value="22%"
            trend="-3%"
            trendDirection="down"
            description="vs. previous period"
            icon={<Calendar className="h-5 w-5 text-muted-foreground" />}
          />
        </div>

        <Tabs defaultValue="cases" className="space-y-4">
          <TabsList>
            <TabsTrigger value="cases">Case Analytics</TabsTrigger>
            <TabsTrigger value="court">Court Efficiency</TabsTrigger>
            <TabsTrigger value="judges">Judge Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="cases" className="space-y-4 ">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="flex flex-col ">
                <CardHeader className="bg-transparent ">
                  <CardTitle>Pie Chart</CardTitle>
                  <CardDescription>Browser usage statistics</CardDescription>

                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-80 flex items-center justify-center">
                    {/* <div className="text-center text-muted-foreground">
                      <PieChart className="h-16 w-16 mx-auto mb-4" />
                      <p>Case distribution chart would appear here</p>
                      <p className="text-sm">Showing distribution across different case types</p>
                    </div> */}
                    <PieChartComponent/>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 px-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-muted-foreground">Civil</span>
                      </div>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="text-sm text-muted-foreground">Criminal</span>
                      </div>
                      <span className="text-sm font-medium">28%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                        <span className="text-sm text-muted-foreground">Family</span>
                      </div>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span className="text-sm text-muted-foreground">Other</span>
                      </div>
                      <span className="text-sm font-medium">12%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Case Status</CardTitle>
                  <CardDescription>Current status breakdown</CardDescription>
                </CardHeader>
                <CardContent className="px-2">
                  <div className="h-80 flex items-center justify-center">
                      <RadarComponent/>
                  </div>
                  <div className="space-y-4 mt-4 px-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Pending</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full w-[35%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">In Progress</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full w-[25%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Scheduled</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="bg-blue-500 h-full w-[15%]" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Disposed</span>
                        <span className="text-sm font-medium">25%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full w-[25%]" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <LineChartComponent />

          </TabsContent>

          <TabsContent value="court" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Hearing Efficiency</CardTitle>
                  <CardDescription>Hearing outcomes analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <HearingPieChartEfficiency />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                        <span className="text-sm text-muted-foreground">Completed</span>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-amber-500" />
                        <span className="text-sm text-muted-foreground">Adjourned</span>
                      </div>
                      <span className="text-sm font-medium">22%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <span className="text-sm text-muted-foreground">Cancelled</span>
                      </div>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-500" />
                        <span className="text-sm text-muted-foreground">Rescheduled</span>
                      </div>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>

                {/* <CardContent>
                </CardContent> */}
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Court Utilization</CardTitle>
                  <CardDescription>Courtroom usage analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="h-80 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <BarChart className="h-16 w-16 mx-auto mb-4" />
                      <p>Court utilization chart would appear here</p>
                      <p className="text-sm">Showing utilization rates for different courtrooms</p>
                    </div>
                  </div> */}

                  <BarGraphCourtUtilization/>
                </CardContent>
              </Card>
            </div>

            {/* <Card>
              <CardHeader>
                <CardTitle>Hearing Duration Analysis</CardTitle>
                <CardDescription>Average hearing duration by case type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BarChart className="h-16 w-16 mx-auto mb-4" />
                    <p>Hearing duration chart would appear here</p>
                    <p className="text-sm">Showing average hearing duration for different case types</p>
                  </div>
                </div>
              </CardContent>
            </Card> */}

            "use client"

            import * as React from "react"
            import {Bar, BarChart, CartesianGrid, XAxis} from "recharts"

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
            {date: "2024-04-01", desktop: 222, mobile: 150 },
            {date: "2024-04-02", desktop: 97, mobile: 180 },
            {date: "2024-04-03", desktop: 167, mobile: 120 },
            {date: "2024-04-04", desktop: 242, mobile: 260 },
            {date: "2024-04-05", desktop: 373, mobile: 290 },
            {date: "2024-04-06", desktop: 301, mobile: 340 },
            {date: "2024-04-07", desktop: 245, mobile: 180 },
            {date: "2024-04-08", desktop: 409, mobile: 320 },
            {date: "2024-04-09", desktop: 59, mobile: 110 },
            {date: "2024-04-10", desktop: 261, mobile: 190 },
            {date: "2024-04-11", desktop: 327, mobile: 350 },
            {date: "2024-04-12", desktop: 292, mobile: 210 },
            {date: "2024-04-13", desktop: 342, mobile: 380 },
            {date: "2024-04-14", desktop: 137, mobile: 220 },
            {date: "2024-04-15", desktop: 120, mobile: 170 },
            {date: "2024-04-16", desktop: 138, mobile: 190 },
            {date: "2024-04-17", desktop: 446, mobile: 360 },
            {date: "2024-04-18", desktop: 364, mobile: 410 },
            {date: "2024-04-19", desktop: 243, mobile: 180 },
            {date: "2024-04-20", desktop: 89, mobile: 150 },
            {date: "2024-04-21", desktop: 137, mobile: 200 },
            {date: "2024-04-22", desktop: 224, mobile: 170 },
            {date: "2024-04-23", desktop: 138, mobile: 230 },
            {date: "2024-04-24", desktop: 387, mobile: 290 },
            {date: "2024-04-25", desktop: 215, mobile: 250 },
            {date: "2024-04-26", desktop: 75, mobile: 130 },
            {date: "2024-04-27", desktop: 383, mobile: 420 },
            {date: "2024-04-28", desktop: 122, mobile: 180 },
            {date: "2024-04-29", desktop: 315, mobile: 240 },
            {date: "2024-04-30", desktop: 454, mobile: 380 },
            {date: "2024-05-01", desktop: 165, mobile: 220 },
            {date: "2024-05-02", desktop: 293, mobile: 310 },
            {date: "2024-05-03", desktop: 247, mobile: 190 },
            {date: "2024-05-04", desktop: 385, mobile: 420 },
            {date: "2024-05-05", desktop: 481, mobile: 390 },
            {date: "2024-05-06", desktop: 498, mobile: 520 },
            {date: "2024-05-07", desktop: 388, mobile: 300 },
            {date: "2024-05-08", desktop: 149, mobile: 210 },
            {date: "2024-05-09", desktop: 227, mobile: 180 },
            {date: "2024-05-10", desktop: 293, mobile: 330 },
            {date: "2024-05-11", desktop: 335, mobile: 270 },
            {date: "2024-05-12", desktop: 197, mobile: 240 },
            {date: "2024-05-13", desktop: 197, mobile: 160 },
            {date: "2024-05-14", desktop: 448, mobile: 490 },
            {date: "2024-05-15", desktop: 473, mobile: 380 },
            {date: "2024-05-16", desktop: 338, mobile: 400 },
            {date: "2024-05-17", desktop: 499, mobile: 420 },
            {date: "2024-05-18", desktop: 315, mobile: 350 },
            {date: "2024-05-19", desktop: 235, mobile: 180 },
            {date: "2024-05-20", desktop: 177, mobile: 230 },
            {date: "2024-05-21", desktop: 82, mobile: 140 },
            {date: "2024-05-22", desktop: 81, mobile: 120 },
            {date: "2024-05-23", desktop: 252, mobile: 290 },
            {date: "2024-05-24", desktop: 294, mobile: 220 },
            {date: "2024-05-25", desktop: 201, mobile: 250 },
            {date: "2024-05-26", desktop: 213, mobile: 170 },
            {date: "2024-05-27", desktop: 420, mobile: 460 },
            {date: "2024-05-28", desktop: 233, mobile: 190 },
            {date: "2024-05-29", desktop: 78, mobile: 130 },
            {date: "2024-05-30", desktop: 340, mobile: 280 },
            {date: "2024-05-31", desktop: 178, mobile: 230 },
            {date: "2024-06-01", desktop: 178, mobile: 200 },
            {date: "2024-06-02", desktop: 470, mobile: 410 },
            {date: "2024-06-03", desktop: 103, mobile: 160 },
            {date: "2024-06-04", desktop: 439, mobile: 380 },
            {date: "2024-06-05", desktop: 88, mobile: 140 },
            {date: "2024-06-06", desktop: 294, mobile: 250 },
            {date: "2024-06-07", desktop: 323, mobile: 370 },
            {date: "2024-06-08", desktop: 385, mobile: 320 },
            {date: "2024-06-09", desktop: 438, mobile: 480 },
            {date: "2024-06-10", desktop: 155, mobile: 200 },
            {date: "2024-06-11", desktop: 92, mobile: 150 },
            {date: "2024-06-12", desktop: 492, mobile: 420 },
            {date: "2024-06-13", desktop: 81, mobile: 130 },
            {date: "2024-06-14", desktop: 426, mobile: 380 },
            {date: "2024-06-15", desktop: 307, mobile: 350 },
            {date: "2024-06-16", desktop: 371, mobile: 310 },
            {date: "2024-06-17", desktop: 475, mobile: 520 },
            {date: "2024-06-18", desktop: 107, mobile: 170 },
            {date: "2024-06-19", desktop: 341, mobile: 290 },
            {date: "2024-06-20", desktop: 408, mobile: 450 },
            {date: "2024-06-21", desktop: 169, mobile: 210 },
            {date: "2024-06-22", desktop: 317, mobile: 270 },
            {date: "2024-06-23", desktop: 480, mobile: 530 },
            {date: "2024-06-24", desktop: 132, mobile: 180 },
            {date: "2024-06-25", desktop: 141, mobile: 190 },
            {date: "2024-06-26", desktop: 434, mobile: 380 },
            {date: "2024-06-27", desktop: 448, mobile: 490 },
            {date: "2024-06-28", desktop: 149, mobile: 200 },
            {date: "2024-06-29", desktop: 103, mobile: 160 },
            {date: "2024-06-30", desktop: 446, mobile: 400 },
            ]

            const chartConfig = {
              views: {
              label: "Page Views",
  },
            desktop: {
              label: "Desktop",
            color: "hsl(var(--chart-1))",
  },
            mobile: {
              label: "Mobile",
            color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

            export function Component() {
  const [activeChart, setActiveChart] =
            React.useState<keyof typeof chartConfig>("desktop")

              const total = React.useMemo(
    () => ({
                desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
              []
              )

              return (
              <Card>
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                  <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                    <CardTitle>Bar Chart - Interactive</CardTitle>
                    <CardDescription>
                      Showing total visitors for the last 3 months
                    </CardDescription>
                  </div>
                  <div className="flex">
                    {["desktop", "mobile"].map((key) => {
                      const chart = key as keyof typeof chartConfig
                      return (
                        <button
                          key={chart}
                          data-active={activeChart === chart}
                          className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                          onClick={() => setActiveChart(chart)}
                        >
                          <span className="text-xs text-muted-foreground">
                            {chartConfig[chart].label}
                          </span>
                          <span className="text-lg font-bold leading-none sm:text-3xl">
                            {total[key as keyof typeof total].toLocaleString()}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </CardHeader>
                <CardContent className="px-2 sm:p-6">
                  <ChartContainer
                    config={chartConfig}
                    className="aspect-auto h-[250px] w-full"
                  >
                    <BarChart
                      accessibilityLayer
                      data={chartData}
                      margin={{
                        left: 12,
                        right: 12,
                      }}
                    >
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="date"
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        minTickGap={32}
                        tickFormatter={(value) => {
                          const date = new Date(value)
                          return date.toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                      />
                      <ChartTooltip
                        content={
                          <ChartTooltipContent
                            className="w-[150px]"
                            nameKey="views"
                            labelFormatter={(value) => {
                              return new Date(value).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })
                            }}
                          />
                        }
                      />
                      <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              )
}

          </TabsContent>

          <TabsContent value="judges" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Judge Performance Metrics</CardTitle>
                <CardDescription>Comparative analysis of case disposal rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <BarChart className="h-16 w-16 mx-auto mb-4" />
                    <p>Judge performance chart would appear here</p>
                    <p className="text-sm">Showing case disposal rates and other metrics by judge</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}

function AnalyticsCard({
  title,
  value,
  trend,
  trendDirection,
  description,
  icon,
}: {
  title: string
  value: string
  trend: string
  trendDirection: "up" | "down"
  description: string
  icon: React.ReactNode
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
            <span className="text-2xl font-bold">{value}</span>
            <div className="flex items-center gap-1">
              {trendDirection === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <span className={`text-xs ${trendDirection === "up" ? "text-green-500" : "text-red-500"}`}>{trend}</span>
              <span className="text-xs text-muted-foreground">{description}</span>
            </div>
          </div>
          <div className="bg-muted p-3 rounded-full">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

