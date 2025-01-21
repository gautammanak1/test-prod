import { Card, CardContent } from "@/components/ui/card"
import {
  FileJson, Code, FileType, Palette, Wind, CodepenIcon as ReactIcon,
  Server, Terminal, TypeIcon as TypeScriptIcon, Figma, CloudCog, PenTool,
  Github, GitBranch, Database, Flame, FileSpreadsheet, FileText, Megaphone,
  ClipboardList, PenSquare, PiIcon as Python, Brain, Bot, MessageSquare, LayoutDashboard
} from "lucide-react"
import React from "react"

const skills = [
  { name: "JavaScript", icon: <Code className="h-6 w-6" /> },
  { name: "HTML", icon: <FileType className="h-6 w-6" /> },
  { name: "CSS", icon: <Palette className="h-6 w-6" /> },
  { name: "Tailwind", icon: <Wind className="h-6 w-6" /> },
  { name: "ReactJS", icon: <ReactIcon className="h-6 w-6" /> },
  { name: "NodeJS", icon: <Server className="h-6 w-6" /> },
  { name: "ExpressJS", icon: <Terminal className="h-6 w-6" /> },
  { name: "TypeScript", icon: <TypeScriptIcon className="h-6 w-6" /> },
  { name: "JSON", icon: <FileJson className="h-6 w-6" /> },
  { name: "VS Code", icon: <Code className="h-6 w-6" /> },
  { name: "Figma", icon: <Figma className="h-6 w-6" /> },
  { name: "GCP", icon: <CloudCog className="h-6 w-6" /> },
  { name: "Canva", icon: <PenTool className="h-6 w-6" /> },
  { name: "GitHub", icon: <Github className="h-6 w-6" /> },
  { name: "Git", icon: <GitBranch className="h-6 w-6" /> },
  { name: "MongoDB", icon: <Database className="h-6 w-6" /> },
  { name: "Supabase", icon: <Database className="h-6 w-6" /> },
  { name: "Firebase", icon: <Flame className="h-6 w-6" /> },
  { name: "Excel", icon: <FileSpreadsheet className="h-6 w-6" /> },
  { name: "MS Office", icon: <FileText className="h-6 w-6" /> },
  { name: "Digital Marketing", icon: <Megaphone className="h-6 w-6" /> },
  { name: "Data Entry", icon: <ClipboardList className="h-6 w-6" /> },
  { name: "Tech Content Creator", icon: <PenSquare className="h-6 w-6" /> },
  { name: "Python", icon: <Python className="h-6 w-6" /> },
  { name: "Generative AI", icon: <Brain className="h-6 w-6" /> },
  { name: "AI Agent", icon: <Bot className="h-6 w-6" /> },
  { name: "NLP", icon: <MessageSquare className="h-6 w-6" /> },
  { name: "Next.js", icon: <LayoutDashboard className="h-6 w-6" /> },
]

export function SkillsSection() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {skills.map((skill, index) => (
      <Card 
        key={index} 
        className="flex flex-col items-center justify-center p-4 bg-white dark:bg-[#18181A] hover:bg-[#F8F9FB] dark:hover:bg-[#09090B] border border-transparent dark:border-[#333333] hover:border-[#F8F9FB] dark:hover:border-[#09090B] transition-all duration-200"
      >
        <CardContent className="flex flex-col items-center p-2">
          {React.cloneElement(skill.icon, { className: "h-6 w-6 text-primary" })}
          <span className="mt-2 text-sm font-medium text-center">{skill.name}</span>
        </CardContent>
      </Card>
    ))}
  </div>
  


  )
}
