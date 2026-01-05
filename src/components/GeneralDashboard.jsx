//ReactIcons
import { AiOutlineLike } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import { MdBubbleChart } from "react-icons/md";
import { MdKeyboardVoice } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { TrendingUp } from "lucide-react";
//Chart
import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  LineChart,
  CartesianGrid,
  XAxis,
  Line,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "./ui/chart";
//Progress
import { Progress } from "./ui/progress"
//Card & Select
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useState , React, useEffect} from "react";
import { CoursesItems } from "../lib/Dummydata.js/Courses";
import {ForumActivity} from "../lib/Dummydata.js/ForumActivity";
import { Quizzes } from "../lib/Dummydata.js/Quizzes";
import {Link} from "react-router-dom";
import { SiGoogleforms } from "react-icons/si";

{
  /***********Course Degree Chart*******************/
}
export const description = "A radar chart";
const chartData = [
  { subject: "JavaScript", score: 85 },
  { subject: "HTML", score: 98 },
  { subject: "Vue.JS", score: 60 },
  { subject: "React.JS", score: 90 },
  { subject: "Next.JS", score: 75 },
  { subject: "TypeScript", score: 80 },
];
const chartConfig = {
  desktop: {
    label: "score",
    color: "var(--chart-1)",
  },
};
{
  /*****************************/
}

{
  /************Linear IQ********************/
}
export const descriptionIQ = "A line chart with dots";
const chartDataIQ = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfigIQ = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
};

const GeneralDashboard = () => {
  const [CourseName, setCourseName] = useState("");
   const [progress, setProgress] = useState(13)

  const handleSelect = (value) => {
    setCourseName(value);
  };

   useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="container mt-10">
      <h1 className="font-bold text-3xl mb-8 mt-10">Dashboard</h1>
      {/************Degree, Experience IQ and Rewards Section************************/}
      <div className="flex lg:flex-row flex-col gap-10 ">
        <div className="shadow-sm rounded-xl border-2 flex flex-row gap-[1px] p-5 dash w-[55%] wdash">
          {/***************Course Degree******************/}
          {chartData.map((item) => (
            <div key={item.subject}>
              <p className="text-xl text-[#FF9500] sm:text-sm">
                {CourseName === item.subject ? `${item.score}` : " "}
              </p>
            </div>
          ))}

          <div className="flex flex-col">
            <h1 className="text-[#59626a] sm:text-xl text-sm">{CourseName}</h1>
            <span className="text-[#b8bdc2] sm:text-sm">
              {CourseName ? "BEST SCORE" : " "}
            </span>
            {/**********Degree Chart********************/}
            <div className="mt-10 text-center mx-auto">
              <Card className="CourseDegree mt-5 w-96">
                <CardContent className="pb-0 w-md degreecardContent">
                  <ChartContainer
                    config={chartConfig}
                    className="mx-auto max-h-[200px] max-w-xl p-0"
                  >
                    <RadarChart data={chartData}>
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                      />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarGrid />
                      <Radar dataKey="score" fill="#FF9500" fillOpacity={0.6} />
                    </RadarChart>
                  </ChartContainer>
                </CardContent>
                <CardFooter className="flex-col gap-2 text-sm">
                  <div className="flex items-center gap-2 leading-none font-medium">
                    Total Score In Your Courses{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                </CardFooter>
              </Card>
            </div>
            {/***********End Degree Chart******************/}
          </div>
          <div className="DegreeButton z-10 bg-white ml-[65px] sm:text-sm sm:w-[10rem] w-[9rem]">
            {/********Select Button*************/}
            <Select onValueChange={handleSelect}>
              <SelectTrigger>
                <SelectValue placeholder="Course Degree" className="sm:text-sm"/>
              </SelectTrigger>
              <SelectContent className="w-sm">
                <SelectGroup className="w-sm">
                  <SelectLabel className="text-sm">Course Degree</SelectLabel>
                  <SelectItem  className="text-sm" value="HTML">HTML</SelectItem>
                  <SelectItem  className="text-sm" value="JavaScript">JavaScript</SelectItem>
                  <SelectItem   className="text-sm" value="TypeScript"  >TypeScript</SelectItem>
                  <SelectItem  className="text-sm" value="React.JS"  >React.JS</SelectItem>
                  <SelectItem  className="text-sm" value="Next.JS"  >Next.JS</SelectItem>
                  <SelectItem  className="text-sm" value="Vue.JS"  >Vue.JS</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/********Select Button*************/}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            {/***********Linear Code***************/}
            <Card className="experience">
              <CardHeader>
                <CardTitle className="text-[#59626a] text-xl">Experience IQ</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartContainer config={chartConfigIQ}>
                  <LineChart
                    accessibilityLayer
                    data={chartDataIQ}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Line
                      dataKey="desktop"
                      type="natural"
                      stroke="var(--color-desktop)"
                      strokeWidth={2}
                      dot={{
                        fill: "var(--color-desktop)",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    />
                  </LineChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="text-muted-foreground leading-none text-sm">
                  4 DAYS STREAK THIS WEEK
                </div>
              </CardFooter>
            </Card>
          </div>
          {/*********************************/}
          {/*************Rewards**********************/}
          <div className=" mt-5 rewards">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#59626a] text-xl">Rewards</CardTitle>
                <p className="text-[10px]">YOUR LATEST ACHIEVEMENTS</p>
              </CardHeader>
              <CardContent className="mx-auto text-center">
                <div className="flex flex-row gap-2">
                  <div className="rounded-full bg-[#2196f3] text-white text-center w-8 h-8">
                    <AiOutlineLike className="text-center mx-auto text-2xl pt-1.5 " />
                  </div>
                  <div className="rounded-full bg-[#f44336] text-white text-center w-8 h-8">
                    <CiStar className="text-center mx-auto text-2xl pt-1.5 " />
                  </div>
                  <div className="rounded-full bg-[#66bb6a] text-white text-center w-8 h-8">
                    <MdBubbleChart className="text-center mx-auto text-2xl pt-1.5 " />
                  </div>
                  <div className="rounded-full bg-[#ffa726] text-white text-center w-8 h-8">
                    <MdKeyboardVoice className="text-center mx-auto text-2xl pt-1.5 " />
                  </div>
                  <div className="rounded-full bg-[#29b6f6] text-white text-center w-8 h-8">
                    <MdEventAvailable className="text-center mx-auto text-2xl pt-1.5 " />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start gap-2 text-sm"></CardFooter>
            </Card>
          </div>
          {/**************End OF Rewards*******************************/}
        </div>
      </div>
      {/************End of Degree, Experience IQ and Rewards Section********************************/}

      {/**************Courses Section******************************/}
      <div className="mt-8 flex lg:flex-row flex-col gap-8">
        <div className="shadow-sm  rounded-xl border-2  w-[40rem] p-5 rewards">
          <h1 className="text-[#59626a] text-xl mb-5">Courses</h1>
          {CoursesItems.map((item) => (
            <div key={item.id} className="flex flex-col gap-8">
              <div className="mb-5 flex flex-row gap-3">
               <Link to={`/Courses/${item.id}`} >
                <img src={item.img} alt="image name" className="w-20 h-10" />
                </Link>
                <div className="font-bold flex flex-col">
                  {item.name}
                  <Progress value={progress} className="w-[60%] mt-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="shadow-sm rounded-xl border-2 p-5 activity w-[22%]">
           <h1 className="text-[#59626a] text-xl mb-5">Forum Activity</h1>
            {ForumActivity.map((item) => (
            <div key={item.id} className="flex flex-col gap-8">
              <div className="mb-5 flex flex-row gap-3">
                <div className=" h-10 w-10 rounded-full bg-card text-card-foreground shadow-sm w-sm rounded-xl border  border-2 pt-2.5 relative">
               
                <SiGoogleforms className="text-center mx-auto my-auto "/>
                 <div className="ml-5">
                  <img src={item.img} className="w-5 h-5 rounded-full"/>
                 </div>
               
                </div>
                <div className="font-bold flex flex-col">
                  {item.name}
                  <p className="text-gray-400 font-normal text-[13.5px]">{item.Quest}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/***************Quizes results***************************************/}
       <div className="mt-10 mrewards">
        <div className="shadow-sm  rounded-xl border-2 w-[40rem] p-5 rewards">
          <h1 className="text-[#59626a] text-xl mb-5">Quizzes</h1>
         
          <div>
          {Quizzes.map((item) => (
            <div key={item.id} className="flex flex-row mb-5">
              <div className="flex flex-1 flex-col">
                <h5 className="font-bold text-[md]">{item.title}</h5>
                <p>Course <span className="text-[#FF9500] text-[30]">{item.name}</span></p>
              </div>
              <div className="flex flex-row gap-2">
                <p>{item.grade}</p>
                <p>{item.degree}</p>
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>
       
      </div>
  );
};

export default GeneralDashboard;
